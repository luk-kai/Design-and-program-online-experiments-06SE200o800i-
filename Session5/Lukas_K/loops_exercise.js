/*
 Scenario: You have recorded time for 10 trials, as recordedTimes. However, recordedTimes includes not only the reaction time, but also a stimuli presentation time 200 ms.
 */

 const recordedTimes = [550, 490, 510, 890, 1450, 470, 940, 620, 930, 360];
        
 /* exercise 5.2.1 */
 
 // Using a for loop, to get the data only stores your reaction time
 // console.log each iterate index and each reactionTime value accordingly in the loop
 let reactionTimes = [];
 // add your code here
 
/* let index = 0;

for (const element of recordedTimes) {
    index += 1;
    const reactionTime = element - 200;
    reactionTimes.push(reactionTime);
    console.log(index, reactionTime);
    console.log(reactionTime);
}

console.log("reactionTimes: ",reactionTimes); */


 
 /* # Plus 1: can you think of more than one way of doing it? */
 
 for (let i = 0; i < recordedTimes.length; i++) {
    const reactionTime = recordedTimes[i] - 200;
    reactionTimes.push(reactionTime);    
    console.log(i+1);
    console.log(reactionTime);
 }
 
 
 /* exercise 5.2.2 */
 
 //Using a while loop: when the total reaction time exceeds a certain threshold (e.g., 2000 milliseconds), console.log the thisTrial. thisTrial will start from 1.
 
// add your code below

let totalTime = 0;
let thisTrial;
let j = 0


while (totalTime <= 2000){
    totalTime += reactionTimes[j];
    j++;
    thisTrial = j;
    console.log(j);
    console.log(totalTime);
}

 console.log(`Cumulative reaction time exceeded 2000 ms at trial ${thisTrial}.`);