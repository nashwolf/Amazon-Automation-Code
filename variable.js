// // var laptop = "HP";
// // console.log(laptop);

// let str="How are you?"
// let reversed= str.split("").reverse().join("")
// console.log(reversed)

// let a= "How are you?"
// let reverse= ""

// for(let i=a.length -1; i>=0;i--){
//     reverse = reverse + a[i]; 
// }

// console.log(reverse)


// trying to reverse the stenence without changing the word position 

// let b= "New to class"
// let result= b.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// console.log(result)

// let b= "New to class"
// let result=""
// let word =""
// let reversedword= ""
 
// for(let i=0;i<=b.length;i++){
//     if(i===b.length || b[i]===" "){
//         for( let j=word.length-1; j>=0; j-- ){ 
//             reversedword+= word[j];
//         }

//     result+= reversedword+" ";
//     word= "";
//     reversedword= "";
//     }else{
//         word+= b[i]
//     }
// }
// console.log(result.trim());



// let b = "New to class";
// let result = "";
// let word = "";

// for (let i = 0; i <= b.length; i++) {

//     if (i === b.length || b[i] === " ") {

//         result += word + " ";

//         word = "";

//     } else {
//         word = b[i] + word;
//     }
// }

// console.log(result.trim());

// //if(i !=str.lenght){
// result += " "
// }instead of trim we can use this 


// let sentence = "Java is easy and Java is powerful and, Java is popular?";
// sentence= sentence.replace(/[^\w\s]/g,"")//regex
// let words = sentence.toLowerCase().split(" ");
// let visited = [];

// for (let i = 0; i < words.length; i++) {
//     let count = 1;

//     if (visited[i]) {
//         continue;
//     }

//     for (let j = i + 1; j < words.length; j++) {
//         if (words[i] === words[j]) {
//             count++;
//             visited[j] = true;
//         }
//     }

//     if (count > 1) {
//         console.log(words[i] + " occurs " + count + " times");
//     }
// }


// let str= "Cat dog, cat dog rat$, cat?"
// str=str.replace(/[^\w\s]/g,"")// regex
// let words= str.toLocaleLowerCase().split(" ");
// let count= {}

// for(let i=0; i<words.length;i++){//we can use for of here insted
//     let word=words[i];

//     if(count[word]){
//         count[word]++;
//     }else{
//         count[word]=1;
//     }
// }

// for(word in count){

//     if(count[word]>1){
//         console.log(word+"="+count[word])
//     }
// }


// for (let i=0; i<=100; i++){ ///was checking
//     if (i%1==0 & i%i ==0){
//         console.log(i);
//     }
// }

 


// //optimized version 
// for (let i=2;i<=100;i++){ //i 2-100
//     let isPrime= true;

//     for (j=2; j*j<i; j++){
//         if (i%j==0){ 
//             isPrime= false;
//             break
//         }
//     }

//     if (isPrime){
//         console.log(i)
//     }
// }

//sqrt version 
// for (let i=2;i<=100;i++){ //i 2-100
//     let isPrime= true;

//     for (j=2; j<i**0.5; j++){
//         if (i%j==0){ 
//             isPrime= false;
//             break
//         }
//     }

//     if (isPrime){
//         console.log(i)
//     }
// }

//math version 

// for (let i=2;i<=100;i++){ //i 2-100
//     let isPrime= true;

//     for (j=2; j<Math.sqrt(i); j++){
//         if (i%j==0){ 
//             isPrime= false;
//             break
//         }
//     }

//     if (isPrime){
//         console.log(i)
//     }
// }

// let a=[1,2,3,4,5,6,7,8,9,10,45,25,4,5,57,5,7,555,7,65]

// let asc= []

// for(i=0;i<a.length;i++){
//     for(j=0;j<=i;j++){
//         if(j<i){
//             console.log(a[j])
//             break;
//         }
//         }
// }

let a=[11,2,3,4,5,6,77,8,9,10,45,25,4,5,57,5,7,55,7,65]
for (let i = 0; i < a.length; i++) {

    for (let j = i + 1; j < a.length; j++) {

        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

    }
}
console.log(a)


//inbuilt method 

let a=[11,2,3,4,5,6,77,8,9,10,45,25,4,5,57,5,7,55,7,65]

a.sort((x, y) => y - x);

console.log(a);

// testing if I could upload this into repository 

let a="Hello"
console.log(a)
//making changes again 2