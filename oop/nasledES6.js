// класс от которого будем наследоваться
class UserES {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    } 

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// наследуемся
class Customer extends UserES{
    constructor(firstName, lastName, membership){
        super(firstName, lastName)                  // передаем все что должен принимать родитель
        this.membership = membership                // определяем свой свойства
    }

    // такой же метод как у родителя
    // 
    getFullName(){
        // вызвать такой же метод родителя
        console.log(super.getFullName())
        return ` это метод customer ${this.firstName} ${this.lastName}`
    }
}

// создаем обьект
const cust = new Customer('Billy', 'Boy', 'basik')
console.log(cust)

console.log(cust.getFullName()) //вызывается метод из класса Customer - в прото
//метод класса UserES - в прототипе прототипа


