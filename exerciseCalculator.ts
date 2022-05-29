interface ExerciseInterface {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (hour_array: Array<number>, target: number) => {
    var periodLength = hour_array.length
    var trainingDays = hour_array.filter(num => num != 0).length
    var average = hour_array.reduce((prev, curr) => prev + curr) / periodLength
    if (average + 0.5 < target){
        var success = false
        var ratingDescription = "Bad, you can do a lot better."
        var rating = 1
    } else if (average + 0.5 >= target && average < target ) {
        var success = false
        var ratingDescription = 'Not too bad but could be better.'
        var rating = 2
    } else {
        var success = true
        var ratingDescription = 'Good!'
        var rating = 3
    }
    var myObj: ExerciseInterface = {periodLength, trainingDays, success, rating, ratingDescription, target, average}

    return myObj
}

// Loop arguments to array
const arr: Array<number> = []
var arraylen = process.argv.length
for (var i = 2; i < arraylen -1; i++) {
    arr.push(Number(process.argv[i]))
}

const target: number = Number(process.argv[arraylen-1])
console.log(target)
console.log(calculateExercises(arr, target))