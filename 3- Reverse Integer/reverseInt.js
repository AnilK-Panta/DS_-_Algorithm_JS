//Reverse the integer number
//step1: Convert interger to string
//step2: Reverse the string
//step3: Convert String to integer


// var val = document.getElementById("num").target.value()


function reverseInteger(num){
    console.log(num)

    const numString=num.toString()
    console.log(numString)

    const strReversed = numString.split('').reverse().join('')
    console.log(strReversed)

    const num1 = parseInt(strReversed) //We can use Number() instead of parsedInt() but it depends
    
    if(num<0){
        console.log(num1 * -1)
    }else{
        console.log(num1)
    }

}

reverseInteger(123456789)