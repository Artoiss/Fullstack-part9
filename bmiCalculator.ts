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

console.log(calculateBmi(180, 74))