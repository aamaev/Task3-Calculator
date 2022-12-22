class Calculator{
    constructor(){
        this.value = 0;
    }
    executeCommand(command){
        this.value = command.execute(this.value);
    }
}

class AddCommand{
    constructor(valueToAdd){
        this.valueToAdd = valueToAdd; 
    }
    execute(currentValue){
        return currentValue + this.valueToAdd;
    }
}

class SubtractCommand{
    constructor(valueToSubtract){
        this.valueToSubtract = valueToSubtract; 
    }
    execute(currentValue){
        return currentValue - this.valueToSubtract;
    }
}

class MultiplyCommand{
    constructor(valueToMultiply){
        this.valueToMultiply = valueToMultiply; 
    }
    execute(currentValue){
        return currentValue * this.valueToMultiply;
    }
}

class DivisionCommand{
    constructor(valueToDivision){
        this.valueToDivision = valueToDivision; 
    }
    execute(currentValue){
        return currentValue / this.valueToDivision;
    }
}

class PercentCommand{
    constructor(valueToPercent){
        this.valueToPercent = valueToPercent; 
    }
    execute(currentValue){
        return currentValue / 100;
    }
}

class SquaredCommand{
    constructor(valueToSquared){
        this.valueToSquared = valueToSquared; 
    }
    execute(currentValue){
        return currentValue * currentValue;
    }
}

class CubicCommand{
    constructor(valueToCubed){
        this.valueToCubed = valueToCubed; 
    }
    execute(currentValue){
        return currentValue ** 3;
    }
}

class SQRootCommand{
    constructor(valueToSQRoot){
        this.valueToSQRoot = valueToSQRoot; 
    }
    execute(currentValue){
        return currentValue ** (0.5);
    }
}

class CBRootCommand{
    constructor(valueToCBRoot){
        this.valueToCBRoot = valueToCBRoot; 
    }
    execute(currentValue){
        return currentValue ** (1/3);
    }
}

class NRootCommand{
    constructor(valueToNRoot){
        this.valueToNRoot = valueToNRoot; 
    }
    execute(currentValue){
        return currentValue ** (1/this.valueToNRoot);
    }
}

class FactorialCommand{
    constructor(valueToFactorial){
        this.valueToFactorial = valueToFactorial; 
    }
    execute(currentValue){
        let res = 1;
        while (currentValue){
            res *= currentValue--;
        }
        return res;
    }
}

class PowerCommand{
    constructor(valueToPower){
        this.valueToPower = valueToPower; 
    }
    execute(currentValue){
        return currentValue ** this.valueToPower;
    } 
}

class PowerTenCommand{
    constructor(valueToPowerTen){
        this.valueToPowerTen = valueToPowerTen; 
    }
    execute(){
        return 10 ** this.valueToPowerTen;
    } 
}

class DivisionOneCommand{
    constructor(valueToDivisonOne){
        this.valueToDivisonOne = valueToDivisonOne; 
    }
    execute(){
        return 1/this.valueToDivisonOne;
    } 
}

export {
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
};