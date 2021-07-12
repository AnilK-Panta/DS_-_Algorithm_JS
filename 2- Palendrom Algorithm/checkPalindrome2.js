//check the palindrome with for the case insensetive string

function palindrome(str){
    str=str.toLowerCase()
    var strReversed=str.split('').reverse().join('')
    if(str==strReversed){
        console.log("It is palindrome")
    }else{
        console.log("sorry folks, It is not palindrome")
    }    

}

palindrome("Madam")