function chunk(arr,n){
    let outputArry=[]
    for(let i=0; i<arr.length; i++){
        const item= arr[i]
        const last= outputArry[outputArry.length-1]
        if(!last || last.length == n){
            outputArry.push([item])
        }else{
            last.push(item)
        }
    }
    console.log(outputArry)

}
chunk([1,2,3,4,5],2)