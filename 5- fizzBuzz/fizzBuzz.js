// pass an argument as an integer
// if an integer is devisible by 3 pass "fizz"
// if an integer is divisible by 5 pass "buzz"
// if an integer is devisible by both 3 and 5 pass "fizzbuzz"

function fizzbuzz(n){
    for(let i=1; i<=n; i++){
        if(i%3==0 || i%5==0){
            if(i%3==0 && i%5==0){
                console.log("fizzbuzz")
            }
            else if(i%3==0){
                console.log("fizz")
            }
            else{
                console.log("buzz")
            }
        }
        else{
            console.log(i)
        }
        
    }
}

fizzbuzz(5)