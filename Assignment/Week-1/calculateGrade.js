console.log("Grade Calculation based on Student score")
console.log("========================================")

function calculateGrade(score) {
    switch(true){
        case (score>=80 && score <=100 ): 
        console.log("Grade A"+" (Score:"+score+")")
        break

        case (score>=60 && score <80):
        console.log("Grade B"+" (Score:"+score+")")
        break

        case (score>= 40 && score <60) :
        console.log("Grade C"+" (Score:"+score+")")
        break

        default:
        console.log("No Grade"+" (Score:"+score+")")
        break
}
}
calculateGrade(49)
calculateGrade(30)
calculateGrade(70)
calculateGrade(100)