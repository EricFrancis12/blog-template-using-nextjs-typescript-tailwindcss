
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: '<h1>📑 My Blog Tutorials</h1><p>Tutorials blog made white React and Markdown, darkmode and copy to clipboard.</p><h3>Front-end</h3><ul><li>React js</li><li>markdown-to-jsx</li><li>react-syntax-highlighter</li><li>react-copy-to-clipboard</li></ul><h3>Installig</h3><pre><code>npm run install</code></pre><h3>Running app</h3><pre><code>npm run start</code></pre><p><a href="https://my-blog-tutorials.netlify.app/">🚀 See the demo here.</a></p><p>This app is explained in the following <a href="https://medium.com/bitsrc/build-a-blog-with-react-and-markdown-files-30d969ce62d5">📰 post</a>.</p><p><img alt="image" src="https://user-images.githubusercontent.com/34925280/189154683-86d6ad0c-f405-42b1-962b-7d58e03b50cb.png"><img alt="image" src="https://user-images.githubusercontent.com/34925280/189154774-0c5c5c57-73ec-4c97-a4f8-9bac99b051da.png"></p>'
            }}
            />
        </PageLayout>
    )
}

export default Article;
