// ES6 class

const myTor = 'getDisk'
class ProductES {
    // обьявлять свойства можно только в конструкторе или в других методах
    constructor(brand, price, discount){  //обьявляется когда принимает параметры клас
        this._brand = brand                 //не надо сюдда сунуть логику
        this.price = price
        this.discount = discount
    }

    // геттеры и сеттеры
    get brand(){
        // + логика
        return this._brand
    }

    set brand(newBrendName){
        this._brand = newBrendName  //для переименования названия бренда
    }

    getPriceWithDiscount(){
        return (this.price*(100-this.discount))/100
    }

    setPrice(newPrice){
        this.price = newPrice
    }

    // статический метод
    static plus(x, y){
        return x+y
    }

    // вычисляемые свойства - методы которые можно самим называть
    // предварительно создаем например переменную myTor, которая равна строке 'torik'
    [myTor](newDisk){
        this.discount = newDisk
    }
    // будет доступен метод м таким названием чему равна myTor
    // метод с подставным названием - в прото обьекта
}

// создание обьекта
const apple = new ProductES('apple', 150, 20)

// отличие от ES5 - невозможно вызвать ProduktES без new

// обьявленные методы автоматически запишутся в прото обьекта

//статические методы - вызываются без экземпляра класса, без его создания, не имеют доступ к this

// apple.plus(1,2) - не можем вызывать так статический метод, его нету в прото обьекта
// статический метод можно увидеть в конструкторе!!!
// вызов статического метода через название класса
const a = ProductES.plus(1,4)
console.log(a)      //5

// пример статического метода
console.log(Date.now()) // 1717058351234 - текущая дата в милиссеках
const d = new Date()
// d.new() - ошибка, вызов через обьект статического метода