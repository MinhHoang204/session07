function printType<T>(arg: T): void {
    console.log(typeof arg);
}

printType("Hello"); // in ra "string"
printType(123); // in ra "number"
printType(true); // in ra "boolean"