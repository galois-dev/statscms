import katex from 'katex'
import texmath from 'markdown-it-texmath'
export let localhost = "localhost:3000/"
export function addMarkdown(self) {
  var markdownit = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
  }).use(texmath)
  const tm = texmath.use(katex)
  const md = markdownit.use(tm, {
    engine: katex,
    delimiters: 'brackets',
  })
  for (let ref in self.$refs) {
    if (ref.slice(0, 3) === 'MD_') {
      const innerText = self.$refs[ref].innerText
      self.$refs[ref].innerHTML = md.render(String(innerText))
    }
  }
}
