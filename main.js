import './style.css'

const getEl = selector => document.querySelector(selector)

const $html = getEl('#html')
const $css = getEl('#css')
const $js = getEl('#js')

$html.addEventListener('input', e => {
  console.log(e.target.value)
})

$js.addEventListener('input', e => {
  console.log(e.target.value)
})

$css.addEventListener('input', e => {
  console.log(e.target.value)
})


