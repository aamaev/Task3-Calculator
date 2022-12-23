import { outputString } from '../index.js';

export function changeSignListener(event, calcState){
    const value = event.target;
    if (!outputString.textContent) return;
    outputString.textContent *= -1;   
    calcState.firstOperand = outputString.textContent;  
    removeEventListener('click', changeSignListener);
}