function main() {
  //team 1 input box//

  function updateTeam1Name(event) {
    const team1Name = document.querySelector('.team1 h2')
    team1Name.textContent = event.target.value
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
  let team1Name = document.querySelector('.team1 h2')
  let teamOneScore = document.querySelector('.team1 h3')

  function handleClickAddition1() {
    teamOneScore.textContent = ++buttonCounter

    if (buttonCounter === 21) {
      window.alert(`Yay! ${team1Name.textContent} wins!!`)
    } else if (buttonCounter > 21) {
      window.alert(`Can't have a score above 21! I'm setting it to zero.`)
      return (teamOneScore.textContent = 0)
    }
  }

  document
    .querySelector('.team1 .add')
    .addEventListener('click', handleClickAddition1)

  // TEAM 2 ADD button

  let buttonCounter2 = 0
  let team2Name = document.querySelector('.team2 h2')
  let teamTwoScore = document.querySelector('.team2 h3')

  function handleClickAddition2() {
    teamTwoScore.textContent = ++buttonCounter2
    if (buttonCounter2 === 21) {
      window.alert(`Yay! ${team2Name.textContent} wins!!`)
    } else if (buttonCounter2 > 21) {
      window.alert(`Can't have a score above 21! I'm setting it to zero.`)
      return (teamTwoScore.textContent = 0)
    }
  }

  document
    .querySelector('.team2 .add')
    .addEventListener('click', handleClickAddition2)

  //TEAM 1 SUBTRACT BUTTON

  function handleClickSubtraction1() {
    teamOneScore.textContent = --buttonCounter
    if (teamOneScore.textContent < 0) {
      window.alert(`Can't have a negative number! Stop!`)
      return (teamOneScore.textContent = 0)
    }
  }

  let team1SubtractButton = document
    .querySelector('.team1 .subtract')
    .addEventListener('click', handleClickSubtraction1)

  //TEAM 2 SUBTRACT BUTTON

  function handleClickSubtraction2() {
    teamTwoScore.textContent = --buttonCounter2
    if (teamTwoScore.textContent < 0) {
      window.alert(`Can't have a negative number! Stop!`)
      return (teamTwoScore.textContent = 0)
    }
  }

  let team2SubtractButton = document
    .querySelector('.team2 .subtract')
    .addEventListener('click', handleClickSubtraction2)

  // *****************************************************************

  //RESET BUTTON

  let resetButton = document
    .querySelector('body button')
    .addEventListener('click', resetButtonClick)

  function resetButtonClick() {
    let teamOneScore = document.querySelector('section h3')
    teamOneScore.textContent = 0
    teamTwoScore.textContent = 0
  }
}

document.addEventListener('DOMContentLoaded', main)
