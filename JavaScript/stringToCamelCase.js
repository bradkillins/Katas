function toCamelCase(str){
    if(str.length < 1) return str;
    const strArr = str.split(/\_|\-/);
    let result = "";
    for (let i = 0; i < strArr.length; i++) {
        if(i == 0) result += strArr[i];
        else {
            let newWord = strArr[i].slice(0,1).toUpperCase() + strArr[i].slice(1);
            result += newWord;
        }     
    }
    return result;
}