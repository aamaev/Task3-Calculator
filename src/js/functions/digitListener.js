import { clearAll } from '../index.js';
import { outputString } from '../index.js';

export function digitListener(event, calcState){
    const value = event.target;
    if (calcState.errorCheck) {
        clearAll();
    }
    calcState.firstOperand += value.textContent;
    outputString.textContent = calcState.firstOperand;
    removeEventListener('click', digitListener);
}