//first Task
let string = '';
let i = 20;

do{
    string += i + ', ';
    i += 0.5;
} while (i <= 30);
    
console.log(string)

//second Task
const vallueUAH = 27;

for (let i = 10; i <= 100; i += 10){
    console.log(vallueUAH * i + 'UAH ')
}

//third Task
let inputNumber = prompt('Input Number')

for (let i = 0; i <= 100; i++){
    let squareNumber = 0;
    squareNumber = i * i;
    if (squareNumber >= +inputNumber){
        console.log('end')
        break;
    }
    else{
        console.log(`${squareNumber} is square of ${i} and does not exceed ${inputNumber}`)
    }
}

//4-th Task
if (inputNumber <= 1){
    console.log('You input 1')
}
else{
    for (let i = 2; i <= Math.sqrt(inputNumber); i++){
        if(inputNumber % i === 0){
            console.log(`${inputNumber} is not simpl Number`)
        }
        else{
            console.log(`${inputNumber} is simpl Number`)
        }
    }    
}