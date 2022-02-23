function greet() {        //function declaration
    console.log('hello world');
}

greet()

// passing parameters;
function greet1(name) {     //name is the input for tis fuction
    console.log('Hello ' + name);

}

greet1( 'jhon');    // argument to the greet function
greet1( 'marry')

// fuction can have multiple parameters 

function greet1(name,lastName) {     //name is the input for tis fuction
    console.log('Hello ' + name +' '+ lastName);

}

greet1( 'jhon','smith');    // argument to the greet function
greet1( 'marry', 'john')


// function to calculate a value

function squre(number) {
    return number*number;

}
squre(2);
console.log(squre(2));