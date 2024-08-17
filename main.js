/************************************************** 1 ***************************************************/
// var number = prompt('Enter Any Number:')

// for( var i= 0; i<=number; i++){
//     if(i %2 == 0){
//         console.log(i);
//         document.write(i + " ")
//     }
// }

/************************************************** 2 ***************************************************/
// var products = document.querySelectorAll("ul li");
// var con = document.getElementById("container");
// var total = 0;

// products.forEach(function (item) {
//   item.onclick = function () {
//     total += +item.getAttribute("price");
//     con.innerHTML = total;
//   };
// });

/************************************************** 3 ***************************************************/
// var avarage = document.getElementById('avarage')
// var salary =0
// for( var i =1; i<=8; i++){
//     salary += +(prompt('Enter your salary in a month '+ i+ ':'))
// }

// avarage.innerHTML = salary/8

/************************************************** 4 ***************************************************/

// var salary2 = prompt('Enter your salary:')

// if(salary2 > 17000){
//     console.log('WEALTHY');
// }else if(salary2 >= 9000 && salary2 <= 17000){
//     console.log('RICH');
// } else if(salary2 < 9000){
//     console.log('POOR');
// }

/************************************************** 5 ***************************************************/

// var array = ['a','c','d','a','d'];
// var newArray = [];

// array.forEach(function(value){
//     if(newArray.indexOf(value) == -1){
//         newArray.push(value)
//     }
// })
// console.log(newArray)


/************************************************** 6 ***************************************************/

// 1- Scop
// var v1 = 10
// console.log(window.v1);

// let l1 = 10
// console.log(window.l1);

// const c1 = 10
// console.log(window.c1);


// function testVar(){
//     var v2 = 20
//     console.log(v2);
// }
// testVar()
// console.log(v2);

// {
//     var v3 =30
// }
// console.log(v3);

// {
//     let l2 =30
// }
// console.log(l2);

// {
//     const c2 =30
// }
// console.log(c2);

// 2- Reassignment 

// var v4 = 40
// v4 = 50
// console.log(v4);


// let l3 = 40
// l3 = 50
// console.log(l3);


// const c3 = 40
// c3 = 50
// console.log(c3);

// 3-Redeclaration

// var v5 = 60
// var v5 = 70
// console.log(v5);


// let l4 = 60
// let l4 = 70
// console.log(l4);


// const c4 = 60
// const c4 = 70
// console.log(c4);

// 4-Hoisting

// console.log(v6);
// var v6 = 80


// console.log(l5);
// let l5 = 80


// console.log(c5);
// const c5 = 80