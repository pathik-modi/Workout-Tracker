// ---Example for reference--- //
// let pastWorkouts = [
//   {
//     workoutDate: new Date('2023-09-23'),
//     squats: 50,
//     benchPress: 100,
//     deadlifts: 110,
//   },
//   {
//     workoutDate: new Date('2023-09-25'),
//     squats: 55,
//     benchPress: 110,
//     deadlifts: 120,
//   },
// ]
// console.log(pastWorkouts)
// ---Example for reference--- //
// ---live workout section--- //
let liveWorkout = {}

const addCurrentExercise = document.getElementById('addCurrentExercise')
const currentWorkoutTableBody = document.querySelector('tbody')

addCurrentExercise.onclick = addToObject //adds current input items to liveworkout table

function addToObject() {
  let currentExerciseInput = document.getElementById('currentExercise')
  let currentWeightInput = document.getElementById('currentWeight')
  // current input exercise & weight values
  currentExercise = currentExerciseInput.value
  currentWeight = currentWeightInput.value
  // adding values to object
  liveWorkout[`${currentExercise}`] = currentWeight
  updateCurrentWorkoutTable()
  //reset values back to default
  currentExerciseInput.value = ''
  currentWeightInput.value = ''
}

function updateCurrentWorkoutTable() {
  //clear existing rows in the table
  currentWorkoutTableBody.innerHTML = ''

  //populate the table with current state of liveworkout
  for (const exercise in liveWorkout) {
    if (liveWorkout.hasOwnProperty(exercise)) {
      const weight = liveWorkout[exercise]
      // Create a new row
      const row = currentWorkoutTableBody.insertRow()
      // Insert cells for exercise and weight
      const cellExercise = row.insertCell(0)
      const cellWeight = row.insertCell(1)

      // const removeExercise = row.insertCell(2) //add one more cell to delete exercise
      // removeExercise.textContent = 'x' //test for the x button

      cellExercise.textContent = exercise
      cellWeight.textContent = weight
      submitCurrentWorkout.innerHTML = 'Finish Workout' //only show finish workout button when there is something in the live workout table
    }
  }
  const hasExercises = Object.keys(liveWorkout).length > 0 // check if there is an exercise in the live workout table
  submitCurrentWorkout.style.display = hasExercises ? 'inline-block' : 'none' // hide finish button until sometihng is added
}
// Current workout to past workout
let pastWorkouts = []

const pastWorkoutDisplay = document.getElementById('pastWorkoutsDisplay')
const submitCurrentWorkout = document.getElementById('submitCurrentWorkout')
submitCurrentWorkout.onclick = submitLiveWorkout

function displayPastWorkout() {
  // clear existing content in the past workout section
  pastWorkoutDisplay.innerHTML = ''
  // go through past workouts
  pastWorkouts.forEach((workout) => {
    // create div in HTML for each past workout
    const workoutDiv = document.createElement('div')
    workoutDiv.classList.add('past-workout')

    // add date to the div
    const workoutDate = document.createElement('p')
    workoutDate.textContent = `${workout.workoutDate.toDateString()}`
    workoutDiv.appendChild(workoutDate)

    // add exercise and weights to the div
    for (const exercise in workout) {
      if (exercise !== 'workoutDate') {
        const exerciseElement = document.createElement('p')
        exerciseElement.textContent = `${exercise}: ${workout[exercise]}`
        workoutDiv.appendChild(exerciseElement)
      }
    }
    pastWorkoutDisplay.appendChild(workoutDiv)
  })
}

function submitLiveWorkout() {
  liveWorkout.workoutDate = new Date()
  pastWorkouts.push(liveWorkout)
  displayPastWorkout()
  liveWorkout = {}
  updateCurrentWorkoutTable()
  displayPastWorkout()
  console.log(pastWorkouts)
}
