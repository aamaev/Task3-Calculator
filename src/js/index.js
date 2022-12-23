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
import { operationListener } from './functions/operationListener.js';
import { digitListener } from './functions/digitListener.js';
import { equalListener } from './functions/equalListener.js';
import { changeSignListener } from './functions/changeSignListener.js';
import { dotListener } from './functions/dotListener.js';
import { memoryListener } from './functions/memoryListener.js';

export const outputString = document.querySelector('.input');
export const history = document.querySelector('.history');

const operationButtons = document.querySelectorAll('.operation');
const digitButtons = document.querySelectorAll('.digit');
const equalButton = document.querySelector('.equals');
const changeSignButton = document.querySelector('.change-sign');
const dotButton = document.querySelector('.dot');
const clearButton = document.querySelector('.clear');
const memoryButtons = document.querySelectorAll('.memory');
const themeButton = document.querySelector('.theme');

let calcState = {
    firstOperand : '',
    secondOperand : '',
    result : null,
    operationName : '',
    lastOperation : '',
    dotCheck : false,
    errorCheck : false,
    memoryOperand : '',
    calc : new Calculator(),
    memory : new Calculator()
};

operationButtons.forEach(operationButton => {
    operationButton.addEventListener('click', (event) => {
        operationListener(event, calcState);
    });
});

digitButtons.forEach(digitButton => {
    digitButton.addEventListener('click', (event) => {
        digitListener(event, calcState);
    });
});

equalButton.addEventListener('click', (event) => {
    equalListener(event, calcState);
});

changeSignButton.addEventListener('click', (event) => {
    changeSignListener(event, calcState);
});

dotButton.addEventListener('click', (event) => {
    dotListener(event, calcState);
});

clearButton.addEventListener('click', () => {
    clearAll();
});

memoryButtons.forEach(memoryButton => {
    memoryButton.addEventListener('click', (event) => {
        memoryListener(event, calcState);
    });
});

themeButton.addEventListener('click', () => {
    changeTheme();
});

function changeTheme(){
    document.querySelector('.calc').classList.toggle('light');
    document.querySelector('.digit').classList.toggle('light');
    document.querySelector('.btn').classList.toggle('light');
    document.querySelector('.equals').classList.toggle('light');
}

export function mathOperation(){
    switch(calcState.lastOperation){
        case '+':
            calcState.calc.executeCommand(new AddCommand(+calcState.firstOperand)); break;
        case '-':
            calcState.calc.executeCommand(new SubtractCommand(+calcState.firstOperand)); break;
        case '*':
            calcState.calc.executeCommand(new MultiplyCommand(+calcState.firstOperand)); break;
        case '/':
            calcState.calc.executeCommand(new DivisionCommand(+calcState.firstOperand)); break;
        case '%':
            calcState.calc.executeCommand(new PercentCommand(+calcState.firstOperand)); break;            
        case '^2':
            calcState.calc.executeCommand(new SquaredCommand(+calcState.firstOperand)); break;
        case '^3':
            calcState.calc.executeCommand(new CubicCommand(+calcState.firstOperand)); break;
        case '^1/2':
            calcState.calc.executeCommand(new SQRootCommand(+calcState.firstOperand)); break;
        case '^1/3':
            calcState.calc.executeCommand(new CBRootCommand(+calcState.firstOperand)); break;
        case '^1/':
            calcState.calc.executeCommand(new NRootCommand(+calcState.firstOperand)); break;        
        case '!':
            calcState.calc.executeCommand(new FactorialCommand(+calcState.firstOperand)); break;     
        case '^':
            calcState.calc.executeCommand(new PowerCommand(+calcState.firstOperand)); break;  
        case '10^':
            calcState.calc.executeCommand(new PowerTenCommand(+calcState.firstOperand)); break;  
        case '1/':
            calcState.calc.executeCommand(new DivisionOneCommand(+calcState.firstOperand)); break;         
    }
    calcState.result = calcState.calc.value;
    return calcState.result;
}

export function clearOperation(operName = ''){
    if (!calcState.firstOperand) {
        calcState.firstOperand = outputString.textContent;
        outputString.textContent = '';
    } else {
        calcState.secondOperand = calcState.firstOperand;
        outputString.textContent = '';
    }
    calcState.firstOperand += ' ' + operName;
    calcState.secondOperand = calcState.firstOperand;
    history.textContent = calcState.firstOperand;
    calcState.firstOperand = '';
}

export function clearAll(){
    calcState = { 
        ...calcState,
        firstOperand : '',
        secondOperand : '',
        result : null,
        operationName : '',
        lastOperation : '',
        dotCheck : false,
        errorCheck : false,
        memoryOperand : '',
        calc : new Calculator(),
        memory : new Calculator()
    };
    outputString.textContent = '';
    history.textContent = '';
}





