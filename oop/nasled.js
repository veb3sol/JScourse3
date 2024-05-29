// Object.create
const protoForObj = {       //создаем прото для обьекта
    sayHello(){                 // в прото будет одна функция
        return 'Helloo'
    }
}

//const obj = Object.create(protoForObj) // создаем обьект с указанам прото
// obj.sayHello()  -- метод становится доступным потому что он в прото этого обьекта

// добавить свойства к создаваемому обьекту
const obj = Object.create(protoForObj, {
    firstName: {                //дескриптор, поэтому свойству передаем обьект
        value: 'Nika',
    }
})
// obj.firstName  -- появится в свойствах обьекта

// НАСЛЕДОВАНИЕ
// 2 вида - функциональное и прототипное

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
User.prototype.sayHi = function(){
    return `Hi! ${this.firstName} ${this.lastName}`
}
// Customer - унаследуется от User
function Customer(firstName, lastName, membership){
    // что бы унаследоваться - вызываем User и передаем туда this + параметры для User
    // User.call(this, firstName, lastName);
    // если аргументов много можно использовать apply
    User.apply(this, arguments)

    // сохраняем личные свойства кастомера
    this.membership = membership
}

// const customer = new Customer('Ivan', 'Petrov', 'basik')
// customer -- НЕ ИМЕЕЕТ МЕТОДОВ ПРОТО СВОЕГО РОДИТЕЛЯ (это функциональное наследование)

// что бы customer имел методы прото User
Customer.prototype = Object.create(User.prototype) // в прото кастомера записали обьект с прото Юзера  -- как бы тоже хуйня, и потерялся конструктор в прото

// указываем конструктор для кастомера
Customer.prototype.constuctor = Customer;

// после этих строчек можем добавить свои методы в прото кастомеру
Customer.prototype.getMembership = function(){
    return this.membership.toUpperCase();
}

const customer = new Customer('Ivan', 'Petrov', 'basik')

// customer.getMembership()  - в консоли выдаст 'BASIK' - доступны все методы для кастомера