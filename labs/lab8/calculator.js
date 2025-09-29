import inquirer from 'inquirer';

const args = process.argv.slice(2);

async function checkNumberInput() {
    
    // เห็น log error ใช้คำว่า 'Please enter two numbers' เลยลองใส่เงื่อนไขเช็คความยาว array ที่รับมาด้วย
    const arrayLength = args.length;
    if (arrayLength >= 3) {
        console.error('Please enter two numbers');
        process.exit(1);
    }
        

    const a = args[0]; 
    const b = args[1];       

   const num1 = parseFloat(a);
   const num2 = parseFloat(b);

    if ( num1 === null || num1 === undefined || !isFinite(num1)) {
        console.error('Please enter two numbers');
        process.exit(1);
    }

    if (num2 === null || num2 === undefined || !isFinite(num2)) {
        console.error('Please enter two numbers');
        process.exit(1);
    }

    return [num1, num2];
 
}

async function checkNumbersAndOperation() {

    const {op} = await inquirer.prompt([
        { type: 'input', name: 'op', message: 'add | subtract :' }
    ]);

    const checkOper = String(op).trim().toLowerCase();
    if (checkOper !== 'add' && checkOper !== 'subtract') {
        console.error('Unknown operator');
        process.exit(1);
    }

    return  checkOper ;
}
        

const nums = await checkNumberInput();
const op = await checkNumbersAndOperation();
const result = op === 'add' ? nums[0] + nums[1] : nums[0] - nums[1];
console.log(`${nums[0]} ${op === 'add' ? '+' : '-'} ${nums[1]} = ${result}`);