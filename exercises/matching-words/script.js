const myStr = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

let myArr = myStr.toLowerCase().split(" ");

let newArr = [];

let sorted = myArr.sort();


for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
        newArr.unshift(sorted[i] + ' ');
    }
}

let finalStr = "";

for (let i = 0; i < newArr.length; i++) {
    if (!finalStr.includes(newArr[i])) {
        finalStr += newArr[i];
    }
}

let finalArr = finalStr.split(' ');

console.log(finalArr);
