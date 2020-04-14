import {classDemo} from './class2';


export interface vehicle
{
    colour:string;
    engine:string;
    camera?:boolean;
}

let u = new classDemo(123);

u.setUsername();
console.log(u.getUsername("Satish"));
console.log(u.getSSN());

function validate(value:string):string{
    // console.log(value);
    return value+" Kumar";
}

validate("Hey Satish!!");
console.log(validate("Hey Satish"));

function validateCar(car:vehicle)
{

}

let bmw = 
{
    color : "red",
    engine:100,
    camera:true,
}

// console.log(obj.color);
// console.log(obj.engine);

console.log(bmw.color);
console.log(bmw.engine);