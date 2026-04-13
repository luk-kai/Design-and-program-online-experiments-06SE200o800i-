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

const trial = { id: 1, responseTime: 350, correct: true };
console.log(trial.id);
console.log(trial["id"]);// this is another way to get value of id
for (const key in trial) {
console.log(`${key}: ${trial[key]}`);
}

let i = 0; // Initialize the counter
while (i < 5) {
console.log(`Number: ${i}`);
i++; // Increment the counter
}

i = 0;
do {
console.log(`Number: ${i}`);
console.log(i);
i++;
console.log(i);
}while(i < 5)