function reverseString(str){
    console.log("reverse string: ", str)
    //change string to array
    var arr= str.split('')
    console.log("step 1. string to array:", arr)

    //reverse the array
    var revArray= arr.reverse()
    console.log("step 2. reverse array: ", revArray)

    //change array to string
    var result=revArray.join('')
    console.log("step 3. array to string, which is the final answer: ", result);
}


const str= "anil"
reverseString(str)