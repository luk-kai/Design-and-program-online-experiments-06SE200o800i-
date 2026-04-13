let ageGroup;
let age = 25;

if(age<18){
   ageGroup = "Child";
}else{
    ageGroup = "Adult";
}

console.log("ageGroup:", ageGroup);

age = 17;

ageGroup = age<18?"child":"adult";

console.log("ageGroup:", ageGroup);

for(let i=0; i < 5; i++){
  console.log("i/number:", i+1);
}


const responseTimes = [350, 420, 510];
for (const time of responseTimes) {
console.log(`Response Time: ${time} ms`);
}

