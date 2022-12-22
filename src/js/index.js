import {
    Calculator, 
    AddCommand, 
    SubtractCommand, 
    MultiplyCommand, 
    DivisionCommand, 
    PercentCommand, 
    SquaredCommand, 
    CubicCommand, 
    CBRootCommand, 
    SQRootCommand, 
    NRootCommand,
    FactorialCommand, 
    PowerCommand, 
    PowerTenCommand, 
    DivisionOneCommand
} from './operations/operations.js';
import '/src/css/calculator.css';

const btns = document.querySelector('.buttons'),
      outputString = document.querySelector('.input'), 
      history = document.querySelector('.history');
   
let firstOperand = '';
let secondOperand = '';
let result = null;
let operationName = '';
let lastOperation = '';
let dotCheck = false;
let errorCheck = false;
let memoryOperand = '';
let calc = new Calculator();
let memory = new Calculator();

function clearAll(){
    firstOperand = '';
    secondOperand = '';
    result = null;
    operationName = '';
    lastOperation = '';
    dotCheck = false;
    errorCheck = false;
    calc = new Calculator();
    memory = new Calculator();
    outputString.textContent = '';
    history.textContent = '';
}

btns.addEventListener('click', (event) => {
    const value = event.target;
    
    if (value.classList.contains('digit')){
        if (errorCheck) {
            clearAll();
        }
        firstOperand += value.textContent;
        outputString.textContent = firstOperand;
    }

    if (value.classList.contains('change-sign')){
        if (!outputString.textContent) return;
        outputString.textContent *= -1;   
        firstOperand = outputString.textContent;  
    }

    if (value.classList.contains('dot') && !dotCheck){
        dotCheck = true;
        firstOperand += value.textContent;
        outputString.textContent = firstOperand;
    }

    if (value.classList.contains('operation')){
        if (calc.value != 0 && firstOperand && !secondOperand){
            calc.value = 0;
        }
        if (errorCheck) {
            clearAll();
        }
        operationName = value.textContent;
        if (!secondOperand){
            calc.executeCommand(new AddCommand(+firstOperand));
        } else {
            firstOperand = mathOperation(lastOperation);
            outputString.textContent = calc.value;
            history.textContent = '';
        }
        clearOperation(operationName);
        lastOperation = operationName;
        console.log("calc value: "+ calc.value);
        dotCheck = false;
    }

    if (value.classList.contains('clear')){
        clearAll();
    }

    if (value.classList.contains('equals')){
        if (errorCheck) {
            clearAll();
        }
        if (!firstOperand && !secondOperand) return;
        calc.value = mathOperation();
        clearOperation();
        if (isFinite(calc.value)) {
            outputString.textContent = calc.value;
        } else {
            outputString.textContent = 'Error, division by zero';
            errorCheck = true;
        }
        history.textContent = '';
        firstOperand = '';
        secondOperand = '';
        dotCheck = false;
    }

    if (value.classList.contains('MR')){
        if (!memory.value) return;
        if (firstOperand || secondOperand) clearOperation();
        outputString.textContent = memory.value;
        firstOperand = memory.value;
    }

    if (value.classList.contains('MC')){
        firstOperand = '';
        calc.value = 0;
        if (!memory.value) return;
        memory.value = 0;
        outputString.textContent = '';
        calc.value = 0;
    }

    if (value.classList.contains('M+')){
        firstOperand = '';
        calc.value = 0;
        memoryOperand = outputString.textContent;
        memory.executeCommand(new AddCommand(+memoryOperand));
        outputString.textContent = '';
        memoryOperand = ''; 
    }

    if (value.classList.contains('M-')){
        firstOperand = '';
        calc.value = 0;
        memoryOperand = outputString.textContent;
        memory.executeCommand(new SubtractCommand(+memoryOperand));
        outputString.textContent = ''; 
        memoryOperand = '';
    }

    if (value.classList.contains('theme')){
        document.querySelector('.calc').classList.toggle('light');
        document.querySelector('.digit').classList.toggle('light');
        document.querySelector('.btn').classList.toggle('light');
        document.querySelector('.equals').classList.toggle('light');
    }
   
});

function clearOperation(operName = ''){
    if (!firstOperand) {
        firstOperand = outputString.textContent;
        outputString.textContent = '';
    } else {
        secondOperand = firstOperand;
        outputString.textContent = '';
    }
    firstOperand += ' ' + operName;
    secondOperand = firstOperand;
    history.textContent = firstOperand;
    firstOperand = '';
}

function mathOperation(){
    switch(lastOperation){
        case '+':
            calc.executeCommand(new AddCommand(+firstOperand)); break;
        case '-':
            calc.executeCommand(new SubtractCommand(+firstOperand)); break;
        case '*':
            calc.executeCommand(new MultiplyCommand(+firstOperand)); break;
        case '/':
            calc.executeCommand(new DivisionCommand(+firstOperand)); break;
        case '%':
            calc.executeCommand(new PercentCommand(+firstOperand)); break;            
        case '^2':
            calc.executeCommand(new SquaredCommand(+firstOperand)); break;
        case '^3':
            calc.executeCommand(new CubicCommand(+firstOperand)); break;
        case '^1/2':
            calc.executeCommand(new SQRootCommand(+firstOperand)); break;
        case '^1/3':
            calc.executeCommand(new CBRootCommand(+firstOperand)); break;
        case '^1/':
            calc.executeCommand(new NRootCommand(+firstOperand)); break;        
        case '!':
            calc.executeCommand(new FactorialCommand(+firstOperand)); break;     
        case '^':
            calc.executeCommand(new PowerCommand(+firstOperand)); break;  
        case '10^':
            calc.executeCommand(new PowerTenCommand(+firstOperand)); break;  
        case '1/':
            calc.executeCommand(new DivisionOneCommand(+firstOperand)); break;         
    }
    result = calc.value;
    return result;
}





