// конструктор - обычная функция, но она используется с new
// new меняет поведение функции

// function Product(){
    
//     // 1 создается новый обьект
//     // 2 this становится ссылкой на этот обьект
//     // 3 возращается этот обьект, при этом return не указан
//     this.brand = 'Apple'
//     console.log(this)
// }

// const apple = new Product()  //если с new - вернет обьект, без - undefined
// console.log(apple)      // обьект со свойствами


// это все ES5  --- в ES6 уже есть конструкция класса -- но это просто сахар
// принимает свойства
function Product(brand, price, discont){
    this.brand = brand
    this.price = price
    this.discont = discont
    this.getPriceWithDiscont = function(){
        return (this.price*(100 - this.discont)/100)
    }
}

const samsung = new Product('Samsung', 100, 15) 
const apple = new Product('Apple', 200, 20) 
console.log(samsung)      // обьект Product 
console.log(apple)      // обьект Product 

console.log(apple.getPriceWithDiscont())  // цена appple с учетом скидки 

// проверить в консоли от этого ли класса создан экземпляр
// apple instanceof Product       ответ -> true
// [] instance Array        ответ -> true
