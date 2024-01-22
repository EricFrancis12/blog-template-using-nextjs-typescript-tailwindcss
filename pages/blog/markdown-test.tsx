
import { PageLayout } from '../../src/components';

const Article = () => {
    return (
        <PageLayout blogwithsidebar>
            <div className='MARKDOWN_TO_HTML_CLASSNAME' dangerouslySetInnerHTML={{
                __html: `<h1>h1</h1><h2>h2</h2><h3>h3</h3><h4>h4</h4><h5>h5</h5><h6>h6</h6><p>normal text</p><p><em>asterisk italic</em></p><p><strong>asterisk bold</strong></p><p><em><strong>asterisk bold and italic</strong></em></p><h2>underline?</h2><p><del>tilde strikethrough</del></p><p>==equals sign highlight==</p><p><mark>mark element</mark></p><p>^caret superscript^</p><p><del>tilde subscript</del></p><p>x<sup>sup tag</sup></p><p>:smile:</p><p>:emoji:</p><p><code>let code = 'code'</code></p><pre><code class="language-js">const doubleSpacedCode = true;const hello = true;</code></pre><p><a href="/demo-page">this is a link</a></p><p><a href="https://bing.com?you-are-a-cool-person=true">this is an external link</a></p><p><a href="https://wikipedia.com">https://wikipedia.com</a></p><p><a href="https://wikipedia.com">https://wikipedia.com</a></p><p><img alt="Google Logo" src="https://blog.webdevsimplified.com/articleAssets/2023-06/markdown-crash-course/Google_Normal.png"></p><blockquote><p>blockquote</p><blockquote><p>nested</p><blockquote><p>more nested</p></blockquote></blockquote></blockquote><p>line</p><hr><ol><li>one</li><li>two</li><li>three</li></ol><hr><ol><li>one</li><li>two</li><li>three<ol><li>nested<ol><li>really nested</li><li>really nested</li><li>really nested</li></ol></li><li>nested</li><li>nested</li></ol></li></ol><hr><ul><li>one<ul><li>nested</li></ul></li><li>two<ul><li>nested</li></ul></li><li>three<ul><li>nested</li></ul></li></ul><hr><table><thead><tr><th>Col 1</th><th>Col 2</th></tr></thead><tbody><tr><td>this</td><td>is</td></tr><tr><td>a</td><td>table</td></tr><tr><td>with</td><td>two</td></tr><tr><td>cool</td><td>columns</td></tr></tbody></table><hr><p>-[] checkbox?</p><ul><li>[] checkbox?</li></ul><p>-[ ] checkbox?</p><ul><li><input type="checkbox" disabled=""> checkbox?</li></ul><p>-[x] checkbox?</p><ul><li><input type="checkbox" disabled="" checked=""> checkbox?</li></ul><p>-[ x ] checkbox?</p><ul><li>[ x ] checkbox?</li></ul>`
            }}
            />
        </PageLayout>
    )
}

export default Article;
