const deStringify = queryStr => {
    let objArr = queryStr.slice(queryStr.indexOf('?') + 1).split('&');
    let newObj = {};

        for (let property of objArr) {
            let keyValueArray = property.split("=");
            newObj[keyValueArray[0]] = keyValueArray[1];
        }

    return newObj;
}

const stringifyUrl = (endpointStr, queryObj) => {

    let objStr = "?";
    for (var key in queryObj) {
        objStr += key + ":" + queryObj[key] + "&";
        }

    return endpointStr + objStr.slice(0, -1);
}

let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
};
// console.log(stringifyUrl(endpoint, query));

console.log(deStringify("http://localhost:8080/monkeys?color=black&species=howler"));

//returns "http://localhost:8080/monkeys?color=black&species=howler"
