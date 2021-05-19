function main() {
  let buttonCounter = 0
  buttonCounter++

  let teamOneScore = document.querySelector('h3.team1score')
  teamOneScore.textContent = buttonCounter

  // click + Button

  function handleClickButton() {
    console.log('You clicked the add button')
  }

  let addAllButtons = document.querySelectorAll('i.add')
  // let addButton = document.querySelector('i.add')

  // addAllButtons.addEventListener('click', handleClickButton)

  addAllButtons.forEach(button =>
    button.addEventListener('click', handleClickButton)
  )
}

document.addEventListener('DOMContentLoaded', main)
