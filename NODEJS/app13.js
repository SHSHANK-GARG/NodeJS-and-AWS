var name = process.argv.slice(2).toString();

function say_hello(str){
    return str +" Hello, "+ str+"!";
}
console.log(say_hello(name));