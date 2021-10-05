const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const lowerCaseWord = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if(Array.isArray(mixedArray)){
            const filteredArray = mixedArray.filter(value => typeof(value) === "string");
            const lowArr = filteredArray.map(value => value.toLowerCase());
            resolve(lowArr);
        }else{
            reject("Invalid Array")
        }
    });
}

lowerCaseWord(mixedArray)
.then(value => console.log(value))