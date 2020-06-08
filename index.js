const button = document.querySelector('.btn')

let value = 0

sessionStorage.getItem('value')

button.addEventListener('click', () => {
  value += 1 
  sessionStorage.setItem('value', value)
  button.textContent = `Clicked: ${value}`
})

if(sessionStorage.getItem('value') > 0){
  value = JSON.parse(sessionStorage.getItem('value'))
  console.log(value)
}
button.textContent = `Clicked: ${value}`