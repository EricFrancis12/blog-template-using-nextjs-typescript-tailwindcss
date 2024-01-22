
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: `<h1>Sometimes I need to remind myself it's okay to not be perfect</h1><p>Hello friends.</p><p>I decided to make this my first blog post because it's okay not to be perfect.</p><p>I hope everyone reading this has a great day!</p>`
            }}
            />
        </PageLayout>
    )
}

export default Article;
