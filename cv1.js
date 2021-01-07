let a=5;
var b=27;
if (b>a){
  alert("This is the first architect!");
}else{
    alert("Something is wrong!");
}

class Architect{
    constructor(name,surname,age,id){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.id=id;
    }
}

const Architect1=new Architect("Elsa","Koshi",26, "1230567");

console.log(Architect1);

