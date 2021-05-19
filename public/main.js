function main() {
  //team 1 input box//

  function updateTeam1Name(event) {
    const teamName = document.querySelector('.team1 h2')
    teamName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }

  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)

  //team 2 input box//

  function updateTeam2Name(event2) {
    const team2Name = document.querySelector('.team2 h2')
    team2Name.textContent = event2.target.value
    console.log(event2.target.value)
    console.log(event2)
  }

  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)

  let buttonCounter = 0

  let teamOneScore = document.querySelector('h3')

  // click + Button

  function handleClickButton(event) {
    const thingClickedOn = event.target
    teamOneScore.textContent = buttonCounter++
  }
  function addAPoint() {
    buttonCounter++
  }

  let allAddButtons = document.querySelectorAll('.add')

  allAddButtons.forEach(button =>
    button.addEventListener('click', handleClickButton)
  )
}

document.addEventListener('DOMContentLoaded', main)
