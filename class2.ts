export class classDemo
{  
    username:string;
    password:string;
    ssn:number;

    constructor(ssn:number){
        console.log("i will be executed first!")
        this.ssn = ssn;
    }

    getUsername(username:string){
       
        return this.username=username;
    }

    setUsername(){
        this.username = "hello";
    }

    getSSN(){
        return this.ssn;
    }

}//class ends

// let u = new classDemo(123);

// u.setUsername();
// console.log(u.getUsername("Satish"));
// console.log(u.getSSN());