// Your code goes here

document.addEventListener('DOMContentLoaded', alterText)

function alterText() {
  const $p = document.getElementById('text')
  $p.textContent = 'This is really cool!'
}