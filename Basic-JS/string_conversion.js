// // all matimetical operations we can perfom by using the js.
// console.log(4+5);
// console.log(4-5);
// console.log(4*5);
// console.log(4/5);
// console.log(4%5);
// console.log(4**5);

// console.log(4 +2+ "4"); // if you declayer the numbers first then the o/p is following the maths rull and then stringh is executed
// console.log("4" + 5+3); // if you declayer the string first then the all parameters behaveslike string.
// let val=6
// console.log(++val); // pre increment.increment the value before  the execution

// console.log(val++); // post increment. increment the value after the execution .
// console.log(val);


//############################ comparision oprator #######################
 
// console.log(null>0)  //it gives the false because the null is treated as the object then it will convert into the 0 and 0 is not greater then 0.
// console.log(null==0)
// console.log(null>=0)

// console.log("0"==0) // == operator are typecast the string to the numeric then the conversion it will be compares the values and then gives the result.
// console.log("4">2)
// // if you don't went to conversion then you used the === operator.it strictly compare the values for the same datatype. 

//  #################### datatype ######################

/* datatype are basicaly are two type one is primitive and another one is non primitive(Reference);
  primitive datatype: string,boolean,null,undefine,number,symbul.
  non-primitive datatype: array,object,function.
*/

// ##################### Memri type ######################

// stack(primitive)  Heap(non-primitive)

/* Example of the stack memory type :in the stack memori allocation if you gives the some one 
value and you used this in another variable then the memori will pass you as a copy of the orriginal value.*/
// let userOne="hello hi how are you"
// let userTwo=userOne;
// console.log(userTwo)
// userTwo="where atre you"
// console.log(userOne)
// console.log(userTwo)

/* Example of the Heap memory:in this method the Reference of the value is given .*/
// Creat an Object
let persionOne={
    email:"user@11332",
    upi:"ssdojfeif"
}
let persionTwo=persionOne
console.log(persionTwo)
persionTwo.email="hello@32449" // How to access the object elements.
console.log(persionOne)
console.log(persionTwo)