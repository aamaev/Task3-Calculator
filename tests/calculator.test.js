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
} from '../src/js/operations/operations.js';



test('Creating calculator object, for successful creating should return 0', () => {
    let calc = new Calculator();
    expect(calc.value).toBe(0);
});

test('Additing test, 0 + 5 should return 5', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(5));
    expect(calc.value).toBe(5);
});

test('Subtract test, 5 - 2 should return 3', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(5));
    calc.executeCommand(new SubtractCommand(2));
    expect(calc.value).toBe(3);
});

test('Multiply test, 3 * 5 should return 15', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(3));
    calc.executeCommand(new MultiplyCommand(5));
    expect(calc.value).toBe(15);
});

test('Division test, 15 / 5 should return 3', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(15));
    calc.executeCommand(new DivisionCommand(5));
    expect(calc.value).toBe(3);
});

test('Percent test, percent of 3 should return 0.03', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(3));
    calc.executeCommand(new PercentCommand());
    expect(calc.value).toBeCloseTo(0.03);
});

test('Square test, square of 4 should return 16', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(4));
    calc.executeCommand(new SquaredCommand());
    expect(calc.value).toBe(16);
});

test('Cube test, cube of 4 should return 64', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(4));
    calc.executeCommand(new CubicCommand());
    expect(calc.value).toBe(64);
});

test('Square root test, square root of 25 should return 5', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(25));
    calc.executeCommand(new SQRootCommand());
    expect(calc.value).toBeCloseTo(5);
});

test('Cube root test, cube root of 125 should return 5', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(125));
    calc.executeCommand(new CBRootCommand());
    expect(calc.value).toBeCloseTo(5);
});

test('Factorial test, factorial of 8 should return 40320', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(8));
    calc.executeCommand(new FactorialCommand());
    expect(calc.value).toBe(40320);
});

test('Power test, 8 to the 2 power should return 64', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(8));
    calc.executeCommand(new PowerCommand(2));
    expect(calc.value).toBe(64);
});

test('N root test, 4 root of 625 should return 5', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(625));
    calc.executeCommand(new NRootCommand(4));
    expect(calc.value).toBe(5);
});

test('Power ten test, 10 to the 3 power should return 1000', () => {
    let calc = new Calculator();
    calc.executeCommand(new AddCommand(10));
    calc.executeCommand(new PowerTenCommand(3));
    expect(calc.value).toBe(1000);
});

test('Division one test, 1 / 10 should return 0.1', () => {
    let calc = new Calculator();
    calc.executeCommand(new DivisionOneCommand(10));
    expect(calc.value).toBe(0.1);
});









