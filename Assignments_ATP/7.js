//7.write a function that recieves an array and search element as args and returns the index of that search element in the array.
//it should return "not found" when search element not found.

let Find = function (array,element)
{
    let i;
    for(i=0;i<array.length;i++)
        if(array[i] == element)
            return i;

        return 'not found'
}

let res = Find([10,40,20,50,70],70)
console.log(res)