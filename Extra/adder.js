import inquirer from 'inquirer';
var sum = [
    {type:'input', name:'operands', message:'operands are '}
]

inquirer.prompt(sum).then(answers => {
    let numbers = answers.operands.split(' ');
    let num1 = parseFloat(numbers[0]);
    let num2 = parseFloat(numbers[1]);
    
    let result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
});