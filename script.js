/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const newArray = arr.map(myFunction);
    
    function myFunction(value){
        if(value.marks>50)
        {
            console.log(value);
        }

    }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(frEachfun);
    function frEachfun(value){
        if(value.marks>50)
        {
            console.log(value);
        }

    }
}

function addData() {
  //Write your code here, just console.log
  var obj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(obj);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const array2 = arr.filter(student=>student.marks>=50);
     console.log(array2);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
        { id: 5, name: "rahul", age: "22", marks: 70 },
        { id: 6, name: "rohan", age: "21", marks: 75 },
        { id: 7, name: "arjun", age: "23", marks: 86 },
      ];
      let mergedArray = arr.concat(arr2);
      console.log(mergedArray);
}
