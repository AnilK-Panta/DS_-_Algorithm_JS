const maxChar=(str)=>{
    let charCountObject={}
    let maxChar=""
    let maxCount=0

    for(let i=0; i<str.length; i++){
        const char= str[i]
        charCountObject[char]=charCountObject[char] + 1 || 1
        if(charCountObject[char]>maxCount){
            maxChar=char
            maxCount=charCountObject[char]
        }
    }
    console.log(maxChar)
}

maxChar("I loveeeee noodles")