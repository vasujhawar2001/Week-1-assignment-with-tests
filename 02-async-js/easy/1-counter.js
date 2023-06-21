// With both the methods, setInterval and setTimeout

// let count = 1;
// setInterval(()=>{
//     console.clear();
//     console.log(count++);
// }, 1000);

let count2 = 1;
function timer(){
    console.log(count2);
    count2++;
    nextIncrement();
}
function nextIncrement(){
    setTimeout(timer,1000);
    setTimeout(()=> {
        console.clear();
    }, 2000);
}

nextIncrement();