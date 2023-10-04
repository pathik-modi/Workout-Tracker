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
  console.log(liveWorkout)
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
      cellExercise.textContent = exercise
      cellWeight.textContent = weight
      submitCurrentWorkout.innerHTML = 'Finish Workout' //only show finish workout button when there is something in the live workout table
    }
  }
}
// Current workout to past workout
let pastWorkouts = []

const pastWorkoutDisplay = document.getElementById('pastWorkoutDisplay')
const submitCurrentWorkout = document.getElementById('submitCurrentWorkout')
submitCurrentWorkout.onclick = submitLiveWorkout

function submitLiveWorkout() {
  pastWorkouts.push(liveWorkout)
  console.log(pastWorkouts)
  liveWorkout = {}
}
