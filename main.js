import './style.css'

const getEl = selector => document.querySelector(selector)

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