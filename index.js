
// js 練習第一題
// const friends = ["Harry", "Ron", "Snap"];
// const reversed_friends = [];

// const { addElementPromiseChainMethod } = require("wd");

//const { strip } = require("wd/lib/utils")

// for(let i=friends.length-1 ; i>=0 ; i--){

//    reversed_friends.push(friends[i]);

// }

// console.log(reversed_friends);

// js 練習第二題

// function findBiggest(arr) {

//     let biggestNumber = arr[0];

//     for(let i=1; i<arr.length; i++){

//         if(biggestNumber<arr[i]){
//             biggestNumber = arr[i];
//         }else
//             continue;
//     }

//         return biggestNumber;
//   } 


// let bn = findBiggest([15,20,22,16,7]);

// console.log(bn);

// js 練習第三題

// function addUpTo(n) {

//     let result = 0;

//     for(let i=1; i<=n; i++){

//         result+=i;

//     }

//     return result;
// }

// let n = addUpTo(100000);

// console.log(n);

// js 練習第四題

// function printMany(){

//     let i =1;

//     while(i<=100){

//         console.log(i);
//         i++;
//     }
 

// }
// printMany();

// js 練習第四題

//  function printEvery3(){
     
//         let i =1;

//         while(i<=88){
    
//             console.log(i);
//             i+=3;
//         }

//  }
// printEvery3();

// js 練習第五題

//  function stars(n){

//     let star = '';

//     for(let i=0; i<n; i++){

//         star+='*';

//     }

//     console.log(star);
//  }
// stars(10);

// // js 練習第六題

// function isUpperCase(str){

//     if(str.length === 0){

//           return false;
//     }

//         if(str.charCodeAt(0)-32 >=65){

//             return false;

//         }else
           
//             return  true;
 
//     }
// console.log(isUpperCase("Djfdh"));


// // js 練習第7題

// function isUpperCase(str){

//     let a = true;

//     if(str.length === 0){

//         return false;

//     }

//     for(let i=0; i<str.length; i++){
//         if(str.charCodeAt(i)-32 >=65){

//             a=false;

//             break;

//         }
//     }

//     return a;

//     }

// console.log(isUpperCase("ABCD"));


// js 練習第8題

// function position(str){

//     let a = 0;

//     for(let i=0; i<str.length; i++){
//         if(str.charCodeAt(i)-32 < 65){

//             console.log(str[i]+" "+i);
//             break;
//         }else
//         a++;
//         continue;
//     }
//        if(a===str.length){
//         console.log("-1");
//     }

//     }

// position("khkjhjkgkjgjgjhgj");

// js 練習第9題

// function  findSmallCount(arr,num){

//     let count = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<num){
//             count++;
//         }
//     }

//     return count;
// }


// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0

// js 練習第10題

// function  findSmallerTotal(arr,num){

//     let sum = 0;
    
//     for(let i=0; i<arr.length; i++){

//         sum+=arr[i];

//     }

//     if(sum<=num){
//     return sum;
//     }else
//     return 0;
// }

// console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));

// js 練習第11題

// function  findAllSmall(arr,num){

//     let l = [];
    

//     for(let i=0; i<arr.length; i++){

//         if(arr[i]<num){

//             l.push(arr[i]);

//             }
//     }

//     return l;

// }

// console.log(findAllSmall([1, 2, 3], 10));
// console.log(findAllSmall([1, 2, 3], 2));

// js 練習第12題

// function  sum(arr){

//     let sum = 0;
    

//     for(let i=0; i<arr.length; i++){

//         sum+=arr[i];

//     }

//     return sum;

// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(sum([]));
// console.log(sum([-10, -20, -30]));

// js 練習第13題

// function stars(num){

//     let i= 0;

//     let str = "";

//     while(i<num){

//         str+="*";

//         console.log(str);

//         i++;
//     }
// }

// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****


// js 練習第14題

// function makeStars(num){

//     let str = "";
//     let str2 ="";

//     if(num===1){
//         return '*';
//     }

//     for(let i=1; i<num;i++){

//         str+="*";

//         str2+="\\n"+str+"*";

//     }
//     return "*"+str2;
// }

// console.log(makeStars(5));
// *\n**

// console.log(`\\n`); 

// js 練習第15題

// function stars2(num){

//     let str2 = "";
//     let str = "";

//     for(let i=0; i<num; i++){

//         str+="*"

//         console.log(str);

//     }
//     for(let i=1; i<num; i++){

//         str2+=str;

//         console.log(str2.substring(0,num-i));
        
//     }
// }

// stars2(4);


// js 練習第15題
// function table(num){

//     let a ="";
//     let b ="";

//     for(let i =1; i<=9; i++ ){
//         a = num;
//         b = i;
//         console.log(a+"x"+b+"="+(num*i));
//     }
// }
// table(3);

// js 練習第16題

// function  table9to9(){

//     let a ="";
//     let b ="";

//     for(let i=1; i<=9; i++){

//         a = i ;

//         for(let j=1; j<=9; j++){

//             b = j;

//             console.log(a+"x"+b+"="+(i*j));
//         }
//     }
// }

// table9to9();


// js 練習第17題

// function reverse(str){

//     let strArr = [];
    
//     strArr = str.split("");
//     strArr2 = "";

//     let temp = "";

//     for(let i=0; i<str.length/2;i++){

//         temp = strArr[i];

//         strArr[i] = strArr[str.length-1-i];

//         strArr[str.length-1-i] = temp;

//         strArr2=strArr.toString();        

//     }

//     console.log(strArr2.replaceAll(",",""));
// }

// reverse("abcd");
// reverse("I am a good guy.");

// // js 練習第18題

// function swap(str){

//     let str2 = "";

//     for(let i=0; i<str.length; i++){

//         if(str.charCodeAt(i)-32<65){

//             str2+=str[i].toLowerCase();

//         }else

//             str2+=str[i].toUpperCase();
//     }

//     console.log(str2);
// }

// swap("Aloha");
// swap("Love you.");

// // // js 練習第19題

// function findMin(arr){

//     let min =arr[0];

//     for(let i=1; i<=arr.length-1;i++){

//         if(min>arr[i]){

//             min=arr[i];

//         }
//     }
    
//     return min;
    
// }

// console.log(findMin([100, 2, 5, 6, 99, 4, 5])); // returns 1
// console.log(findMin([])); // returns undefined
// console.log(findMin([1, 6, 0, 33, 44, 88, -10]))

// // // js 練習第20題

// function findNthMin(arr,num){


//     for(let i=0; i<arr.length; i++){

//         let max = arr[i];
//         let a = 0;

//         for(let j=0; j<arr.length ; j++){

//             if(max<=arr[j]){
//                 a++;
                
//             }
//         }
//         if(num===arr.length-a+1){
//             return max;
//         }

//     }
// }

// console.log(findNthMin([-4, -4, -4, -4, 5], 1)); // returns 1
// console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5

// // // // js 練習第21題

// function mySort(arr){

//     let temp = 0;

//     for(let i=0; i<arr.length; i++){

//         for(let j=i+1; j<arr.length; j++){

//             if(arr[i]>arr[j]){

//                 temp = arr[i];

//                 arr[i] = arr[j];

//                 arr[j] = temp;

//             }else
//             continue;
//         }
//         }
//         return arr;
//     }

// console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]


// // js 練習第22題

// function isPrime(num){

//     let prime = false;

//     if(num === 1 ){
//         return false;
//     }
//     if(num === 2){
//         return true;
//     }

//     for(let i=2; i<num ; i++){
//         if(num%i===0){

//             prime = false;

//             break;
            
//         }else
//         prime = true;       
//     }
//     return  prime;
// }
// console.log(isPrime(36)); // returns false
// console.log(isPrime(5)); // returns true
// console.log(isPrime(91)); // returns false
// console.log(isPrime(1000000)); // returns false


 // js 練習第23題

//  function  confirmEnding(str1,str2){

//     let sub = str1.substring(str1.length-str2.length);

//     if(sub === str2){
//         return true;
//     }else
//         return false;
//  }

//  console.log(confirmEnding("Bastian", "n")); // true
//  console.log(confirmEnding("Connor", "n")); // false
//  console.log(confirmEnding("Open sesame", "same")); // true

 // js 練習第24題

//  function findDuplicate(arr){

//     for(let i=0; i<arr.length-1; i++){
//         for(let j=i+1; j<arr.length;j++){

//             if(arr[i]===arr[j]){
//                 return true;
//                 break;
//             }
//         }
//     }
//     return false;
//  }

// console.log(findDuplicate([1, 3, 5, 7, 9, 3])); // returns true
// console.log(findDuplicate([])); // returns false
// console.log(findDuplicate([3, 4, 7, 7, 7, 10000, 0])); // returns false 

 // js 練習第25題

// function palindrome(str){

//     for(let i=0; i<str.length/2; i++){

//        if(str.charCodeAt(i) !== str.charCodeAt(str.length-1-i)&&str.charCodeAt(i)+32 !== str.charCodeAt(str.length-1-i)&&str.charCodeAt(i)-32!== str.charCodeAt(str.length-1-i)){

//             return false;
//     }
//     }
//     return true;
    
// }

// console.log(palindrome("bearaeb")); // true
// console.log(palindrome("WhAtever revetahw")); // true
// console.log(palindrome("Aloha, how are you today?")); // false

// js 練習第26題

// function factorPrime(num){

//     let strNum = "";

//     for(let i=2 ; i<=num; ){

//         if(num%i===0){

//             num = num/i;

//             strNum = strNum+i+" "+"x"+" "

//         }else
//          i++;
//     }
//     return strNum.slice(0,strNum.length-3);//or substring
// }

//  console.log(factorPrime(112)); 
 
 // returns "2 x 2 x 2 x 3 x 5"

// function intersection(arr1,arr2){

//     let c=[];

//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){

//             if(arr1[i]!==arr2[j]){
//                 continue;
//  }else{
//      let okay = false;
//      // 判斷c陣列有沒有重複的值
//     for(let k=0; k<c.length; k++){
//         if(arr1[i]===c[k]){
//             okay = true;    
//         }
//     }
//     if(okay===false){
//         c.push(arr1[i]);
//     }
// }
//     }
// }
// return  c;
// }

// console.log(intersection([3, 3, 3, 1, 3,100,2,4,6,10],[3,4,2,3,5,2,4,3,100,144])); // returns [3, 4]


// js 練習第27題

// function pyramid(num){

//     let str = "*";
//     let str2="";

//     if(num===1){

//         return console.log(str);

//     }

//     for(let i=0; i<num; i++){
//         str+="**";
//         str2=str.substring(0,str.length-2);
//         //str2=str.padStart(num,' ');
//         console.log(str2.padStart(num+i+1));
        
// }
  
// }

// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******

// js 練習第28題
// function inversePyramid(num){

//     let a = "";
//     let b = "";
    
//     for(let i=num; i>=1; i--){

//         b = a.padStart(i+3,"*");

//         console.log(b.substring(num-i).padStart(num+i));
//     }
// }

// inversePyramid(4);
// // *******
// //  *****
// //   ***
// //    *




// js 練習第29題

// function flatten(arr){

//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){

//             arr=arr.flat();
//         }
//     }
//     return arr;

// }


// let a = flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);

// console.log(a);

// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]

// js 練習第30題

// function fib(num){

//     let firstNum =0;
//     let secNum =1;
//     let sum = 0;

//     if(num===firstNum){
//         return firstNum;
//     }else if(num===secNum){
//         return secNum;
//     }

//     for(let i=2; i<=num; i++){

//         sum=(i-1)+(i-2);

//     }

//     return sum;

// }

// console.log(fib(4));