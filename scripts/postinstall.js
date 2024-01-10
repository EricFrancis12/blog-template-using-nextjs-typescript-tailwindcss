const fs = require('fs');
const { marked } = require('marked');
const { sanitize } = require('isomorphic-dompurify');

const MARKDOWN_TO_HTML_CLASSNAME = 'MARKDOWN_TO_HTML_CLASSNAME';

const AUTHOR = {
    name: 'Eric Francis',
    designation: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    profilePic: '',
    social: []
};

const slugToTitle = (slug) => {
    return slug
        .split('-')
        .map(word => word.split('')
            .map((letter, index) => index === 0 ? letter.toUpperCase() : letter)
            .join(''))
        .join(' ');
};

const removeHtmlTags = (inputString) => {
    return inputString.replace(/<[^>]*>/g, ' ');
};

const markdownArticlesDir = './markdown-articles';
const markdownArticlesDirContents = fs.readdirSync(markdownArticlesDir);

const ARTICLES_LIST = markdownArticlesDirContents
    .filter(item => {
        const fileExt = item.split('.').at(-1);
        return fileExt.toLowerCase() === 'md';
    })
    .map(markdownFile => {
        const filePath = `${markdownArticlesDir}/${markdownFile}`;

        const slug = markdownFile.split('.').slice(0, - 1).join('');
        const category = 'blog';
        const path = `/pages/${category}/${slug}.tsx`;

        console.log(fs.statSync(filePath));
        const date = fs.statSync(filePath).mtime;
        const title = slugToTitle(slug);
        const html = sanitize(marked(fs.readFileSync(filePath, { encoding: 'utf8' })).replace(/\n/g, ''));
        const previewText = `${removeHtmlTags(html).slice(0, 200)}...`;

        const tsxCode = `
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='${MARKDOWN_TO_HTML_CLASSNAME}' dangerouslySetInnerHTML={{
                __html: '${html}'
            }}
            />
        </PageLayout>
    )
}

export default Article;
`;
        fs.writeFileSync(`.${path}`, tsxCode, { encoding: 'utf8' });

        return {
            slug: slug,
            path: path,
            featureArticle: true,
            preview: {
                author: AUTHOR,
                date: date.toLocaleString(),
                articleTitle: title,
                tags: '', // replace later
                thumbnail: '/public/imp_assets/tutorials/demo-image.jpg', // replace later
                shortIntro: previewText, // replace later
                category: category
            },
            seo: {
                title: title,
                description: previewText, // replace later
                keywords: '', // replace later
                ogImage: '/public/imp_assets/tutorials/demo-image.jpg', // replace later
                twitterHandle: '', // replace later
                author: AUTHOR.name
            }
        };
    });

const tsxCode = `
import { iArticle } from '../src/shared/interfaces';

const ARTICLES_LIST = JSON.parse('${JSON.stringify(ARTICLES_LIST)}');

export const SORTED_ARTICLES_BY_DATE: iArticle[] = ARTICLES_LIST.sort((a: iArticle, b: iArticle) =>
    new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
`;

fs.writeFileSync('./BLOG_CONSTANTS/_ARTICLES_LIST.tsx', tsxCode, { encoding: 'utf8' });
