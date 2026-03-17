// // 1. writing function for greeting in formal way.....

// function greet(name) {
//   console.log("hello " + name);
//   console.log(
//     "Dear " +
//        name  +
//       " we are informing you that you are succesfully run this code ",
//   );
// }
// greet("ankit");

// // 2. make a calculator

// function calculate(a, b) {
//   console.log(a + b);
// }
// calculate(6, 7);

// // 3.  make a funion to reverse the string

// let p1 = "saturn";
// function revers(st) {
//   console.log(st.split("").reverse().join(""));
// }
// revers(p1);

// // 4. find small and big number
// let number = [2, 34, 4, 5, 8, 45, 23, 67];

// function big(sp) {
//   let max = sp[0];
//   for (let i = 1; i < sp.length; i++) {
//     if (sp[i] > max) {
//       max = sp[i];
//     }
//   }
//   return max;
// }
// function small(sm) {
//   let small = sm[0];
//   for (let i = 1; i < sm.length; i++) {
//     if (sm[i] < small) {
//       small = sm[i];
//     }
//   }
//   return small;
// }
// console.log("In this array your Big number is : " + big(number));
// console.log("In this array your Small number is : " + small(number));

// // 5. Count the vowels in string

// function count(str) {
//   let count = 0;
//   let vowels = "aeiou";
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(count("hhsdcjbf  wuoooihfrai noiour yaiey"));

// // 6. Count the string

// let count = (str) => {
//   let word = str.split(" ");
//   return word;
// };
// console.log(count("gsfn gsgv gsfw shd eg dhh t"));

// // 7.control flow questions means if else switch case

// let num = -8;
// if (num > 0) {
//   console.log("this is positive");
// } else if (num < 0) {
//   console.log("this is negative");
// } else console.log("this is Zero");

// let nm = prompt("how much you score in your senior secondary");
// if (nm >= 90) {
//   console.log("grade A");
// } else if (nm >= 75) {
//   console.log("grade B");
// } else if (nm >= 50) {
//   console.log("grade C");
// } else if (nm >= 33) {
//   console.log("grade D");
// } else console.log(" you are fail");

// let day = Number(prompt("tel me a number"));
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wedneaday");
//     break;

//   case 4:
//     console.log("thursday");
//     break;

//   case 5:
//     console.log("Fridy");
//     break;
//   default:
//     console.log("Invailid day");
// }

// let age = 2;
// let result = age >= 18 ? " you can vote " : " you can't vote";
// console.log(result);

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }
// for (i = 1; i >= -50; i--) {
//   console.log(i);
// // }
// var n = 1;
// while (n <= 33) {
//   console.log(n);
//   n++;
// // }

// let i = 59;
// do {
//   console.log(i);
//   i++;
// } while (i < 9);

// let sr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(sr);

// let student1 = {
//   name: "ankit pal",
//   age: 21,
//   class: "12",
// };
// student1.age = 35;
// student1.city = "gurgaon";
// console.log(student1.city);

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello Bro ";
// h1.style.backgroundColor = "red";
// h1.style.color = "white";
// h1.style.fontFamily = "serif";
// h1.classList.add("hulu");
// h1.classList.remove();
// h1.classList.toggle()//class ho toh hata do nahi ho toh laga do
// document.body.prepend(h1);
// document.body.append(h1);
// document.body.append(h1);
// let img= document.createElement('img')
// img.setAttribute("src", "p1.png")
// img.removeAttribute()
// document.body.append(img)

// let h1 = document.createElement("h1");
// h1.innerHTML = "hey bro ";
// h1.style.backgroundColor = "black";
// h1.style.color = "white";
// h1.addEventListener("click", function () {
//   h1.style.backgroundColor = "red";
//   h1.style.color = "blue";
// });
// h1.addEventListener("dblclick", function () {
//   h1.style.backgroundColor = "green";
//   h1.style.color = "white";
// });

// document.body.append(h1);

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (ev) {
//   console.log(ev.data);
// });


// let h1 = document.createElement("h1");
// window.addEventListener("keydown", function (dt) {
//   if (dt.key === " ") {
//     h1.textContent = "spc";
//   } else h1.textContent = dt.key;
//   document.body.append(h1);
// });

// let bt= document.querySelector(".btn")
// let file= document.querySelector("#file")
// bt.addEventListener("click" , function(){
//     file.click()
//  })
// file.addEventListener("change", function(dt){
//    bt.textContent = dt.target.files[0].name;
// })