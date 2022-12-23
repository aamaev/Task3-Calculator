import { clearAll } from '../index.js';
import { outputString } from '../index.js';
import { clearOperation } from '../index.js';
import { mathOperation } from '../index.js';
import { history } from '../index.js';
import { divisionByZero } from '../errorMessages/errorMessages';

export function equalListener(event, calcState){
    const value = event.target;
    if (calcState.errorCheck) {
        clearAll();
    }
    if (!calcState.firstOperand && !calcState.secondOperand) return;
    calcState.calc.value = mathOperation();
    clearOperation();
    if (isFinite(calcState.calc.value)) {
        outputString.textContent = calcState.calc.value;
    } else {
        outputString.textContent = divisionByZero;
        calcState.errorCheck = true;
    }
    history.textContent = '';
    calcState.firstOperand = '';
    calcState.secondOperand = '';
    calcState.dotCheck = false;
    removeEventListener('click', equalListener);
}