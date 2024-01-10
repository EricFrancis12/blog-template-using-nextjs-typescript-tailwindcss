
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: '<p>This is a demo file for your first article, you can copy code / structure of this file into new file and replace content with your content to create new articles.</p><blockquote><p>For any any queries related to this project / template feel free to connect with us at <a href="mailto:webexpe13@gmail.com">webexpe13@gmail.com</a>. You can also post any comments on our github discussions.</p></blockquote>'
            }}
            />
        </PageLayout>
    )
}

export default Article;
