let watch = () => {
    let dateupdate = new Date()
    console.log (`${dateupdate.getHours()}:${dateupdate.getMinutes()}:${dateupdate.getSeconds()}`);
}
// executed ever second 
// setInterval(watch,1000)

// -----------------promises -------------
// estructure 
// pomise
// .then  is equal that ".then()"
// .catch  is equal that ".catch()"
// promise 

let meinpromise = new Promise((solved,denied) => {
    let exprecion = true
    if (exprecion) {
        solved ('yes is true')
    } else {
        denied('not is true')
    }
})
// meinpromise.then(
//     value => console.log(value),
//     error => console.log(error)
// )
meinpromise.then(
    value => console.log(value),
)
meinpromise.catch(
    error => console.log(error)

)

// settimeout with promise 


let otherpromise = new promise((sucesfull) => {
    console.log('the primise begin');
    setTimeout(() => sucesfull('HELLO WITH PROMISE AND SETTIMEOUT'), 3000)
    console.log('the result promise is delay 3seconds');
})

otherpromise.then(value=>(console.log(value)))