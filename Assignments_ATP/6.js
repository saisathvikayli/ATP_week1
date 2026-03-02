//6.write a function that recieves an array as arg and return their sum
//let marks=[90,78,65,98]
let num = function (ar)
{
let sum=0;
let i=0;
for(i=0;i<ar.length;i++)
    sum+=ar[i]
return sum;
}

let res = num([10,20,30,40])

console.log(`the sum of array is ${res}`)
