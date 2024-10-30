const analyzsentence = (sentence)=>{
    //intialize counter
    let lenghtCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
//count the lenhgt of sentence
lenghtCounter = sentence.lenght;
//split the sentence into words
wordCounter = sentence.trim().split(" ");


const vowels = "abcifghABCIFGH"

for(let char of sentence){
    if(vowels.includes(char)){
        vowelCounter++;
    }
}

//outpout the resault
console.log("lenght of the sentence:",lenghtCounter)
console.log("number of words",wordCounter)
console.log("number of vowels",vowelCounter)

}

