function CheckString(string) {
    if (typeof string == "string") {
        console.log("Good job!")
    } else return console.log("Error! Check type");

}

CheckString(22);