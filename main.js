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

function update() {
  const html = createHtml()
  $iframe.setAttribute('srcdoc', html)
}

const createHtml = () => {
  const html = $html.value;
  const js = $js.value;
  const css = $css.value;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      <script>
        ${js}
      </script>
      ${html}
    </body>
  </html>
`

}