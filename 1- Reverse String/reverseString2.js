function reverseString(str){
    console.log("reverse string: ", str)

    //change string to array
    var arr= str.split('')
    console.log("step 1. string to array:", arr)

    //reverse the array and join it
    let charr=""
    for(i=0; i<arr.length; i++){
        var res= arr[i]
        charr = res + charr
    }
    console.log("step 2. array to string, which is the final answer: ",charr)
}


const str= "anil"
reverseString(str)