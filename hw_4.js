// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangleSquare(a, b) {
    return a*b
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleRadius(p=3.14, r) {
    return p*(r*r)
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilinderSquare(h=10, r=7, p=3.14) {
   console.log(2*p*r*r+h*2*p*r)
}





// - створити функцію яка приймає масив та виводить кожен його елемент

function arrIterator(arr) {
    for(let item of arr) {
        console.log(item)
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphCreator(text) {
    document.write(`<p>${text}</p>`);
}


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreator(liCount, li='leExample') {
    document.write(`<ul>`)
    for(let li of liCount) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву

function minNumber(arr) {
    return arr.sort((a, b) => a - b)[0]
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    return arr.reduce((a, b) => a + b)
}




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr = [0,1,2,3,4,5]

function swap(arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

