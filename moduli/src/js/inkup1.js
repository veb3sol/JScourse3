
// что бы скрыть доступ к переменной извне
// function User(name){
//     let userName = name
//     return {
//         getName(){
//             return userName
//         },
//         setName(name){
//             userName = name
//         }
//     }
// }

// const denis = new User('Denis')
// console.log(denis)  // получаем обьект с методами getName setName

// console.log(denis.getName())   // Denis

// denis.getName = function(){
//     return 'Upsssss'
// }

// console.log(denis.getName())  // Upsss - ПРОБЛЕМА - мы можем легко переопределить ф-ю

// решение проблемы - что бы мы не могли переопределять методы класса
// function User(name){
//     let userName = name
//     return Object.freeze({
//         getName(){
//             return userName
//         },
//         setName(name){
//             userName = name
//         }
//         })
// }

// // Object.freeze - не позволяет изменять свойства и методы
// const liza = new User('Liza') //Liza
// console.log(liza.getName())
// liza.getName = function(){
//     return 'Oooooo...'
// }
// console.log(liza.getName()) //Liza - остался старый метод

// защита свойств через символ
function User(name){
    const symbol = Symbol()     //уникальный индификатор
    return {
        [symbol]:name,
        getName(){
            return this[symbol]
         },
         setName(name){
            this[symbol] = name
         }

    }
}
