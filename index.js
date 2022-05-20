 const questions = document.querySelectorAll(".question");
 const open = document.getElementById('open');
 const close = document.getElementById('close');
 const aside = document.querySelector(".aside");
 const about = document.querySelector(".about");
 const buttons = document.querySelectorAll(".display-btn");
 const content = document.querySelectorAll(".content");
 const aboutContent = document.querySelector(".about-content");
 const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const main = document.querySelector(".main");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const button = document.querySelector(".button");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

const futureDate = new Date(currentYear, currentMonth , currentDay+2, 11, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const currentTime = new Date().getTime();

    const d = futureTime - currentTime;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = Math.floor((d/oneDay));
    let hours = Math.floor((d % oneDay)/ oneHour);
    let minutes = Math.floor((d % oneHour) / oneMinute );
    let seconds = Math.floor((d % oneMinute)/ 1000);

    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item<10){
            return item = `0${item}`;

        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);

        
    });

    if(d<0){
        clearInterval(countdown);

        deadline.textContent = `This event has already been held`;
    }
    
}

let countdown = setInterval(getRemainingTime , 1000);

getRemainingTime();

 about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    if(id){
        buttons.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
            aboutContent.style.visibility = "visible";
        });

        content.forEach(function(articles){
            articles.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
        
    }
 });


 

 questions.forEach(function(question){
    const btns = question.querySelector(".question-btn");
    
    btns.addEventListener('click', ()=>{

        questions.forEach((item)=>{

            if(item != question){
                item.classList.remove('show-text');
            }

        });
        
        question.classList.toggle('show-text');


    });
 });

 open.addEventListener('click', function(){
    aside.classList.toggle('active');
 });

 close.addEventListener('click', ()=>{
    aside.classList.remove('active');
 });



 