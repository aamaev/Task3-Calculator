import {
    AddCommand 
} from '../operations/operations.js';
import { mathOperation } from '../index.js';
import { clearAll } from '../index.js';
import { clearOperation } from '../index.js';
import { outputString } from '../index.js';

export function operationListener(event, calcState){
    const value = event.target;
    if (calcState.calc.value != 0 && calcState.firstOperand && !calcState.secondOperand){
        calcState.calc.value = 0;
    }
    if (calcState.errorCheck) {
        clearAll();
    } 
    calcState.operationName = value.textContent;
    if (!calcState.secondOperand){
        calcState.calc.executeCommand(new AddCommand(+calcState.firstOperand));
    } 
    else {
        if (calcState.firstOperand != ''){            
            calcState.firstOperand = mathOperation(calcState.lastOperation);
            outputString.textContent = calcState.calc.value;
            history.textContent = '';
        } else {
            outputString.textContent = calcState.calc.value; 
        }
    }
    clearOperation(calcState.operationName);
    calcState.lastOperation = calcState.operationName;
    calcState.dotCheck = false; 
    removeEventListener('click', operationListener);
}
