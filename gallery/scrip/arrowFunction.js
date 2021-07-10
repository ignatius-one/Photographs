let normalFunction = function () {
    console.log('normal function has ben call');
}
normalFunction()


let meinfunctionarrow = () => {
    console.log('this fuction is arrow');    
}
// executed
meinfunctionarrow()

// another doing this code 

let meinother = () => console.log(`i'm short ansewer`);
// executed
meinother()

const mygreating = () => {
    return console.log('hello there');
}
mygreating()
// another sway more easy
// but this is just line code as if estructure if whent is jus line code
const myotherway = () => console.log('hello again');

// look exmaple 
if (8 < 9) { console.log('es mayor'); } else {console.log('es menor');}

const objectback = () => ({ name: 'juan', surname: 'torrez' })
console.log(objectback());

// with parametros s
const parametrosback = (message) => console.log(message);
parametrosback(`hello this use parametos `)

const functionmayparam = (nu1, nu2) => {
    let resultado = nu1 + nu2
    return `Result ${resultado}`
}

console.log(functionmayparam(7,8));