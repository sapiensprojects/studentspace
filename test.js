let time = 10000;

let one = new Promise(function(resolve, reject){
    setTimeout(() => resolve(time), time)
})

one.then(function(msg){
    console.log("1. ", msg);
    // return setTimeout(()=>{}, 10000);
})

one.then(function(msg){
    console.log("2. ", msg);
})

console.log(time);
time = 5000;