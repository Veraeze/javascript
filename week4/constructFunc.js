function Person(name, age, sex){

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setName = function (name){
        this.name = name
    }

    this.getAge = function (){
        return this.name;
    }
}