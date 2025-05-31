function setRemainder(message,delay,repeat = false){
    if(repeat){
        let intervalid = setInterval(()=>{
            console.log(`Remainder:${message}" triggered after ${delay} seconds`);
        },delay);
        return intervalid;
    }else{
        let timeoutid = setTimeout(()=>{
            console.log(`Remainder:${message}" triggered after ${delay} seconds`);
        },delay);
        return timeoutid;
    }
}

function stopRemainder(timeoutid){
    clearInterval(timeoutid);
    console.log("Remainder stopped");
}

function setRemainderAsync(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Remainder:${message}" triggered after ${delay} seconds`);
        },delay);
    });
}

setRemainder("Submit Assignment", 1500);

const timerId = setRemainder("Submit Assignment", 1500);
("Stretch your legs", 2000, true);
setTimeout(() => stopRemainder(timerId), 7000);

setRemainderAsync("Call Mom", 2500).then(console.log);
