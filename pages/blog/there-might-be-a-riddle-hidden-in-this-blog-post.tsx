
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: '<p>SeE if you can find it.</p>'
            }}
            />
        </PageLayout>
    )
}

export default Article;
