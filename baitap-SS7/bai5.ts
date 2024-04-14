let variable1: any = 123;
let variable2: unknown = "Hello";
variable1 = "World"; 
variable2 = 456; 
let length1: number = (variable1 as string).length; 
let length2: number;
if (typeof variable2 === "string") {
    length2 = variable2.length; 
}