const calculateBmi = (height: number, weight: number) => {
    const bmi = (weight / ((height * 0.01) ** 2))
    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi >= 18.5 && bmi < 25.0) {
        return "Normal (healthy weight)"
    } else if (bmi >= 25.0){
        return "Overweight"
    }
}

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])
console.log(calculateBmi(height, weight))
