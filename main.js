import './style.css'
import Split from 'split-grid'

const getEl = selector => document.querySelector(selector)

Split({
    columnGutters: [{
        track: 1,
        element: getEl('.vertical-gutter'),
    }],
    rowGutters: [{
        track: 1,
        element: getEl('.horizontal-gutter'),
    }]
})


const $html = getEl('#html')
const $css = getEl('#css')
const $js = getEl('#js')
const $iframe = getEl('iframe')

$html.addEventListener('input', update)
$js.addEventListener('input', update)
$css.addEventListener('input', update)

function init(){
  const { pathname } = window.location
  const [rawHtml, rawJs, rawCss] = pathname.slice(1).split('%7C')

  const html = window.atob(rawHtml)
  const js = window.atob(rawJs)
  const css = window.atob(rawCss)

  $html.value = html;
  $js.value = js;
  $css.value = css;

  const htmlForPreview = createHtml({html, js, css})
  $iframe.setAttribute('srcdoc', htmlForPreview)
}

function update() {
  const html = $html.value;
  const js = $js.value;
  const css = $css.value;

  const hashedCode = `${window.btoa(html)}|${window.btoa(js)}|${window.btoa(css)}`

  window.history.replaceState(null, null, `/${hashedCode}`)

  const htmlForPreview = createHtml({html, js, css})
  $iframe.setAttribute('srcdoc', htmlForPreview)
}

const createHtml = ({html, js, css}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>
        ${js}
      </script>
    </body>
  </html>
`
}

init()