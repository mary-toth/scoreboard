function main() {
  //input team name boxes
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

  // **********************************************************

  // TEAM 1 ADD button

  let buttonCounter = 0

  function handleClickAddition1() {
    let teamOneScore = document.querySelector('.team1 h3')
    teamOneScore.textContent = buttonCounter++
  }

  document
    .querySelector('.team1 .add')
    .addEventListener('click', handleClickAddition1)

  // TEAM 2 ADD button

  let buttonCounter2 = 0

  let teamTwoScore = document.querySelector('.team2 h3')

  function handleClickAddition2() {
    teamTwoScore.textContent = buttonCounter2++
  }

  let team2AddButtons = document.querySelectorAll('.team2 .add')

  team2AddButtons.forEach(button =>
    button.addEventListener('click', handleClickAddition2)
  )
  //TEAM 1 SUBTRACT BUTTON

  function handleClickSubtraction1() {
    let teamOneScore = document.querySelector('.team1 h3')
    console.log(buttonCounter)

    teamOneScore.textContent = --buttonCounter
    console.log(buttonCounter)
  }

  let team1SubtractButton = document.querySelectorAll('.team1 .subtract')
  team1SubtractButton.forEach(button =>
    button.addEventListener('click', handleClickSubtraction1)
  )

  //TEAM 2 SUBTRACT BUTTON

  function handleClickSubtraction2() {
    teamTwoScore.textContent = --buttonCounter2
  }

  let team2SubtractButton = document.querySelectorAll('.team2 .subtract')

  team2SubtractButton.forEach(button =>
    button.addEventListener('click', handleClickSubtraction2)
  )

  // *****************************************************************
  // HOMEWORK PART 2
}

document.addEventListener('DOMContentLoaded', main)
