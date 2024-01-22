const visor = document.querySelector('#visor')
const btnShift = document.querySelector('#btnShift')
const check = document.querySelector('#check')
const buttons = document.querySelectorAll('button')

visor.innerText = ''
let phrase = ''
let key

document.addEventListener('keypress', (e) => {
  key = e.key
  console.log(key)

  if (key == 'Enter') {
    key = '\n'
  }

  phrase = phrase + key
  visor.innerText = phrase
})


for (let btn of buttons) {
  btn.addEventListener('click', (e) => {
    let letter = e.target.innerText

    if (letter == 'Shift') {
      letter = ''
    }

    if (check.checked) {
      letter = letter.toLocaleUpperCase()
    }

    if (letter == '-------') {
      letter = ' '
    }

    if (letter == 'Enter') {
      letter = '\n'
    }

    if (letter == '<---') {
      letter = ''
      phrase = phrase.substring(0, phrase.length - 1)
    }

    if (letter == 'cls') {
      letter = ''
      phrase = ''
    }

    phrase = phrase + letter
    visor.innerText = phrase
  })
}


let minhaString = "Olá mundo";
minhaString = `${minhaString.substring(0, minhaString.length - 1)}`;
minhaString = minhaString.toLocaleUpperCase()
// console.log(minhaString);

btnShift.addEventListener('click', () => {
  check.checked = !check.checked

})