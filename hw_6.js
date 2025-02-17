// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

let newNums = nums.map((num) => {
    return num.toString()
})

console.log(newNums);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNumbers(arr, direction) {
    arr.sort((a, b) => direction === 'descending' ? b - a : a - b)
}


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


coursesAndDurationArray.filter((duration) => duration.monthDuration > 5);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

const newElements = coursesAndDurationArray.map((element, index) => {
    return {
        id: index + 1,
        title: element.title,
        monthDuration: element.monthDuration,
    }
})





































