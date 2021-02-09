export class ClassDemo
{

//properties, methods, constuctor
username: string;
password: string;
hno:number;
constructor(hno:number){
    this.hno=hno;
}
    


getUsername()
{
return this.username;
}
setUsername(username:string){
    this.username=username;
}
getHno(){
    return this.hallticketno;
}
}

// let cd= new ClassDemo(123);
// cd.setUsername("Rahul");
// cd.setUsername;
// console.log(cd.getUsername());
// console.log(cd.getHno());
