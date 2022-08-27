
const fristHand = document.querySelector('.second');
const secoundHand = document.querySelector('.miniute');
const hoursHand = document.querySelector('.hours');


function setTime(){
    const getDate = new Date();
    
    const getsecound = getDate.getSeconds();
    const getsecoundTime = ((getsecound / 60) * 360) + 90;
    fristHand.style.transform = `rotate(${getsecoundTime}deg)`
    
    const getMiniute = getDate.getMinutes();
    const getMiniuteTime = ((getMiniute / 60) * 360) + 90;
    secoundHand.style.transform = `rotate(${getMiniuteTime}deg)`;


    const getourHours = getDate.getHours();
    const getHoursTime = ((getourHours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${getHoursTime}deg)`;
    console.log(getHoursTime)
}

setInterval(setTime, 1000)