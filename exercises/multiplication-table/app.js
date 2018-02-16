const multTable = () => {
    // declare table for end result
    const table = [];
    // declare top row as an array
    let oneThruTenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // loop through array the array length times
    for (let i = 0; i < oneThruTenArr.length; i++) {
        // display the top row the first time through the loop
        if (i === 0) {
            table.push(oneThruTenArr);
        // otherwise generate the next array in order
        } else {
            // declare an empty array
            let nextArr = [];
            // loop through that array filling it with calculated nums
            for (let j = 0; j < 10; j++) {
                nextArr.push(((j + 1) * (i + 1)) + ',');
            }
            // display the next array
            table.push(nextArr);
        }
    }
    return table;
}

console.log(multTable());
