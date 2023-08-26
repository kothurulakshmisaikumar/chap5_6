// console.log("don't lose hope");
// let arr =[];
// // do{
//    let n =  Number(prompt("enter a number"));
//    arr.push(n);
// } while(n ==" ");

// console.log(arr);
// while(true){
//     let n =  Number(prompt("enter a number"));
//     if (n ===0){
//         break;
//     }
//     arr.push(n);
//     console.log(arr);
// }
// let sp1 =[1,2,31,10,120,30,40];
// let neww =sp1.filter(a=> a%10 == 0);
// console.log(neww);
// let k =[12,23,30,40,50,60];
// let nn=[];
// for(i=0;i<k.length;i++){
//     if(k[i]%10 == 0)
//     nn.push(k[i]);
// }
// console.log(nn);

// const companies = [
//   {
//     product: "product 1",
//     price: 6,
//     department: "Electronics",
//   },
//   {
//     product: "product 2",
//     price: 61,
//     department: "Groceries",
//   },
//   {
//     product: "product 3",
//     price: 26,
//     department: "Diary",
//   },
//   {
//     product: "product 4",
//     price: 4,
//     department: "Diary",
//   },
//   {
//     product: "product 5",
//     price: 78,
//     department: "Electronics",
//   },
//   {
//     product: "product 6",
//     price: 23,
//     department: "Groceries",
//   },
//   {
//     product: "product 7",
//     price: 12,
//     department: "Electronics",
//   },
//   {
//     product: "product 8",
//     price: 5,
//     department: "Groceries",
//   },
//   {
//     product: "product 9",
//     price: 78,
//     department: "Diary",
//   },
//   {
//     product: "product 10",
//     price: 87,
//     department: "Groceries",
//   },
// ];
// console.error(companies);
// output[
//   {
//     department: "Electronics",
//     avgPrice: "",
//   },
// ];
// function ff(companies) {
//   let i = 0,
//     j=0,
//     k=0,
//     s1 = 0,
//     s2 = 0,
//     s3 = 0,
//     re = [];
//   companies.map((a) => {
//     if (a.department == "Electronics") {
//       i++;
//       s1 += a.price;
//     }
//     if (a.department == "Diary") {
//       j++;
//       s2 += a.price;
//     }
//     if (a.department == "Groceries") {
//       k++;
//       s3 += a.price;
//     }
//   });

//   re.push({ department: "Electronics", average: s1 / i });
//   re.push({ department: "Groceries", average: s2 / j });
//   re.push({ department: "Diary", average: s3 / k });
//   console.log(re);
// }
// ff(companies);
// let r = companies.reduce((a, b) => {
//   if (b.department == "Electronics" && !a.includes("Electronics")) {
//     a.push(b);
//     return a;
//   } else {return a};
// }, []);
// console.log(r);

// const output = companies.reduce((acc, currentVal) => {
//   if (acc[currentVal.department]) {
//     acc[currentVal.department].price += currentVal.price;
//     acc[currentVal.department].count++;
//   } else {
//     acc[currentVal.department] = { price: currentVal.price };
//     acc[currentVal.department].count = 1;
//   }
//   return acc;
// }, {});

// const value = Object.keys(output).map((item) => ({
//   department: item,
//   average: output[item].price / output[item].count,
// }));

// console.log(value);
// console.log(output);

// let testString = "the quick brown fox jumps over the lazy dog";

// console.log(
//   testString
//     .split(" ")
//     .map((ele) => ele[0].toUpperCase() + ele.slice(1))
//     .join(" ")
// );

// let r = testString.split(" ");
// r.forEach((a, b) => {
//   r[b] = a[0].toUpperCase() + a.slice(1);
// });
// let p =r.map((a)=> a[0].toUpperCase())
// console.log(p.join(" "));
// let j = [23, 44, 56, 788, 99];
// console.log(
//   j.reduce((el,e2) => {
//     e2 * e2;
//   })
// );
// let n = 5,
//   fact = 1;
// while (n > 1) {
//   fact *= n;
//   // console.log(fact);
//   n--;
// }
// console.log(fact);
// let t = [1, 2, 3, 4, 5, 6];
// console.log(
//   t.map((b) => {
//     let fact = 1;
//     while (b > 1) {
//       fact *= b;
//       b--;
//     }
//     return fact;
//   })
// );
// let b = [1, 2, 3, "lakshmi"];
// console.log(b);
// c=b.toString();
// console.log(c);
// let a =[1,2,3,4,5,6,7];
// a.splice(1,2,90,100,200,300);
// console.log(a);
// let a =[1,2,3,4,5,69];
// let p =Array.from("lakshmi");
// console.log(p);

// setTimeout(() => {
//   console.log("Hello no");
// });

// console.log("hello");

// console.log("This");
// setTimeout(() => {
//     console.log("Hello ngggo");
//   },1000);

// date = `${h}:${m}:${s} `;
// console.log(date);

// setInterval(() => {
//   let d = new Date();
//   let date = "";
//   const h = d.getHours();
//   const s = d.getSeconds();
//   const m = d.getMinutes();
//   date = `${h}:${m}:${s} `;
//   console.log(date);
// }, 1000);
// document.body.appendChild(document.createElement("div")).innerHTML = "I should work dont get distracted by zaiem";
// class Car {
//     constructor(name,mileage,color,price){
//       this.car_name =name;
//       this.car_mileage =mileage;
//       this.car_color = color;
//       this.car_price =price;
//     }
//     efficiency(){
//         return this.car_price * this.car_mileage
//     }
// }
// let maruti = new Car("swift",100,"color",10000);
// console.log(maruti.car_color);
// console.log(maruti.car_mileage);
// console.log(maruti.car_name);
// console.log(maruti.efficiency());
/* chapter-6 */
let n, age;
do {
  age = Number.parseInt(prompt("Please enter your age"));
  n = confirm("do you want to see prompt again");
} while (n);

if (age > 0) {
  if (age > 18) {
    alert("you can drive");
  } else {
    alert("you cannot drive");
  }
} else {
  console.error("you entered  a invalid age ");
}
// if (age > 4) {
//   location.href = "https://www.google.com/";
// }
let co = prompt("please enter your color");
document.body.style.background = co;
