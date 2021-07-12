//a word is said to be palindrome if the word is same when reversed i.e. madam

function palindrome(str){
    // const arr1=str.split('')

    const revArr1=str.split('').reverse().join('')
    console.log(str)
    console.log(revArr1)
    if(str===revArr1){
        console.log("It is a palindrome")
    }else{
        console.log("It is not a palindrome")
    }
}

palindrome("madam")