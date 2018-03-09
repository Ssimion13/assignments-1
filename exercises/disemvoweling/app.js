const disemvowel = str => {

    let vowels = "";
    let strArr = str.toLowerCase().split("");
    strArr = strArr.filter(letter => {
            if (letter !== "a" &&
                letter !== "e" &&
                letter !== "i" &&
                letter !== "o" &&
                letter !== "u" &&
                letter !== " ") {
                return letter;
            } else {
                if (letter !== " ") {
                    vowels += letter;
                }
            }
    })

        let newStr = strArr.join("");
        return {
            str: newStr,
            vowels: vowels
        }
    }

    console.log(disemvowel("Pickle Rick!"));
