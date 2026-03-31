/* this is…hello.js
    this is JS comment
*/

// Method 2 <- this is also JS comment

console.log("Hello, World 2!")

function eligibilityCheck(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment) {
    if (ageInput >= 18 && ageInput <= 35 && !hasParticipatedBefore && hasNormalVisionOrNot && !hasCognitiveImpairment) {
        console.log("Participant is eligible for the experiment.");
    } else {
        console.log("Participant is not eligible for the experiment!");
    }
}

 let ageInput = 25; // or 17                                         
    let hasParticipatedBefore = false; // or True
    let hasNormalVisionOrNot = true;
    let hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
eligibilityCheck(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

    ageInput = 17;                                         
    hasParticipatedBefore = false; // or True
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
    eligibilityCheck(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);

    ageInput = 25;                                         
    hasParticipatedBefore = true; 
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
    console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)
    // will this be eligible?
eligibilityCheck(ageInput, hasParticipatedBefore, hasNormalVisionOrNot, hasCognitiveImpairment);
