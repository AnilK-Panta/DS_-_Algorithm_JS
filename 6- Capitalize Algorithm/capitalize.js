//write a program to capitalize the first word of the sentense
// eg. "I love you all" == "I Love You All"


function capitalize(str){
    const strArr= str.split(" ")
    const strObj=[]
    for(let i=0; i<strArr.length; i++){
        const letter= strArr[i]
        // strObj=letter[0].toUpperCase() + letter.slice(1).toLowerCase()
        strObj.push(letter[0].toUpperCase() + letter.slice(1).toLowerCase())
    }
    console.log(strObj.join(" "))
}

capitalize("I love ypu melo jaan")