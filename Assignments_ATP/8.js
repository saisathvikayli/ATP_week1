let emps = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




// 1. Insert new Emp at 2nd position

emps.splice(1,0,{'eno':106,'name':'Coldtan','marks':[79,80,98]})
console.log(emps)
// 2. Remove an emp with name "Kiran"

// emps.splice(4,1)
// console.log(emps)
let  i=0
for (i in emps)
    if(emps[i].name =='Kiran')
        emps.splice(i,1)
        
   console.log(emps)

// 3.Change the last mark 95 to 75 of emp  "Sneha"
emps[3].marks[2] =75
console.log(emps[3])
// if (emps.