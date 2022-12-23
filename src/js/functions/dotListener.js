import { outputString } from '../index.js';

export function dotListener(event, calcState){
    const value = event.target;
    if (!calcState.dotCheck){
        calcState.dotCheck = true;
        calcState.firstOperand += value.textContent;
        outputString.textContent = calcState.firstOperand;
    }
    removeEventListener('click', dotListener);
}