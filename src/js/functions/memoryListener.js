import { outputString } from '../index.js';
import {
    AddCommand, 
    SubtractCommand
} from '../operations/operations.js';

export function memoryListener(event, calcState){
    const value = event.target;
    if (value.classList.contains('MR')){
        if (!calcState.memory.value) return;
        if (calcState.firstOperand || calcState.secondOperand) clearOperation();
        outputString.textContent = calcState.memory.value;
        calcState.firstOperand = calcState.memory.value;
    }

    if (value.classList.contains('MC')){
        calcState.firstOperand = '';
        calcState.calc.value = 0;
        if (!calcState.memory.value) return;
        calcState.memory.value = 0;
        outputString.textContent = '';
        calcState.calc.value = 0;
    }

    if (value.classList.contains('M+')){
        calcState.firstOperand = '';
        calcState.calc.value = 0;
        calcState.memoryOperand = outputString.textContent;
        calcState.memory.executeCommand(new AddCommand(+calcState.memoryOperand));
        outputString.textContent = '';
        calcState.memoryOperand = ''; 
    }

    if (value.classList.contains('M-')){
        calcState.firstOperand = '';
        calcState.calc.value = 0;
        calcState.memoryOperand = outputString.textContent;
        calcState.memory.executeCommand(new SubtractCommand(+calcState.memoryOperand));
        outputString.textContent = ''; 
        calcState.memoryOperand = '';
    }

    removeEventListener('click', memoryListener);
}