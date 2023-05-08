function myfunc(a,b,operation){
    
    
    let result
    if (operation == '+') {
        result = a + b
    }
    else if (operation == '-') {
        result = a - b
    }
    else if (operation == '*') {
        result = a * b
    }
    else if(operation == '/') {
        result = a / b
    }
    else if (parseFloat(a) != a) {
        return "false"}
    else if (parseFloat(b) != b) {
            return "false"}
    return result
}
console.log(myfunc(l,9,'*'))
