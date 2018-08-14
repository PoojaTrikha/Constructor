//Production
const calculateScore = (score, totalScore) =>{

    return ((score/totalScore)*10)
}


//Testing Logic

const itWorkWith16And20 =() =>{

    return calculateScore (16,20)


//Expectation
//console.log("with 16 and 20, it should work",itWorkWith16And20());