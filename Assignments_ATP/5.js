//5.Write a function that recieves 3 number args and returns the bigger number
let num = function (a,b,c)
{
if(a>b && a>c)
    return a;
else if(b>a && b>c)
     return b;
else
    return c;;
}
let res = num(1000,240,43)
console.log(`the bigger number is ${res}`);