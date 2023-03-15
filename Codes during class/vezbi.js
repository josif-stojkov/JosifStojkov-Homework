// // let type = "HIPI"
// // class Animal {
// //     constructor(par1, par2) {
// //         this.type = type;
// //         this.location = location
// //     }
// // }

// // let lion = new Animal ("CAT", "Africa")
// // let grizzly_bear = new Animal ("BEAR", "North Africa" ) 

// // console.log(grizzly_bear.lenght);

// class Car{
//     constructor(brand, model, year, fuel, km, color){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.fuel = fuel;
//     this.description = km + " " + color;
// }
// age(){
//     let today = new Date();
//     today.getFullYear() - this.year;
//     return today.getFullYear() - this.year;
// }
// }
// let car1 = new Car("Mercedes", "e270", 2022, "petrol", "3000", "black"); //instance
// let car2 = new Car("Audi", "a4", 2010, "petrol", "100000", "yellow");

// console.log(car2.age());

// for(let Node of document.body.childNodes){
//     console.log(Node)
// }
// let myArray = [7, 2, 1, 4, 5];
// iterateArray(myArray, 3); 
// function iterateArray(array, repeatCount) {
//     let currentIndex = 0;
//     let iterationCount = 0;
//     let intervalId = setInterval(() => {
//       console.log(array[currentIndex]);
//       currentIndex++;
//       if (currentIndex >= array.length) {
//         currentIndex = 0;
//         iterationCount++;
//         if (iterationCount >= repeatCount) {
//           clearInterval(intervalId);
//         }
//       }
//     }, 1000);
//   }


// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; //Prvo gi deklarirame dvete nizi
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; 
// let sum = 0; //potoa deklarirame varijabla i ja inicijalizirame so 0
// for (let i = 0; i < arr_1.length; i++) { // vo for go inicijalizirame i na 0 pa proveruvame dali i e pomalo od prvata niza i so loop pominuvame niz cela niza
//   sum += arr_1[i]; // ja dodavame vrednosta na arr_1 na momentalnata vrednost na sumata i zacuvaj go rezultatot naza vo suma
// }
// for (let i = 0; i < arr_2.length; i++) {
//   sum += arr_2[i];
// }
// console.log(sum); 

let str2 = "don't know why"; //deklalirame string 
if (str2.includes("y")) { //provervame dali ima y vo stringot dokolku ima pecati yes 
  console.log("yes");
} else {
  console.log("no"); //dokolku ne pecati no
}
