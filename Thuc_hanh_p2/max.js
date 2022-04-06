const arr=[10,15,100,19,16,50]
let max=arr[0]
for (let i=1;i<=arr.length-1;i++){
    if (arr[i]>max){max=arr[i]}
}
console.log(max);