import { useRouter } from 'next/router';
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from '../../../src/components';
import { SORTED_ARTICLES_BY_DATE } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { iArticle } from '../../../src/shared/interfaces';

const Article = () => {
    const router = useRouter();
    const { slug } = router.query;

    const article = SORTED_ARTICLES_BY_DATE.find(_article => _article.slug === slug);

    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
            <div dangerouslySetInnerHTML={{
                __html: article?.html
                    ? article.html
                    : 'article not found...'
            }}
            />
            {/* This is a demo file for your first article, you can copy code / structure of this file into new file and replace content with your content to create new articles.
            <div className='px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed'>
                For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                You can also post any comments on our <a href='https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions' target='_blank' rel='noopener noreferrer'><u><i>github discussions</i></u></a>.
            </div> */}
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;