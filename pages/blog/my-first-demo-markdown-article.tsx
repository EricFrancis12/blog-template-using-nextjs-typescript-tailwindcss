
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: '<h1>My First Demo Markdown Article</h1><h2>This is gonna be good...</h2><p>Hi</p><p>Hey</p><p>Hello</p>'
            }}
            />
        </PageLayout>
    )
}

export default Article;
