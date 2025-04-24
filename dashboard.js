// const spinBtn = document.getElementById("spin-btn");
// const spinner = document.getElementById("spinner");
// const motivationText = document.getElementById("motivation");

// const motivators = [
//   "🚶‍♀️ Take a 2-min walk!",
//   "💧 Drink some water.",
//   "📦 Tidy up your desk.",
//   "🌱 Write 1 good thing about today.",
//   "🧘 Breathe deep for 10 seconds.",
//   "🧠 Remind yourself why you started.",
//   "💬 Compliment someone around you.",
//   "📵 Step away from screen for 2 mins."
// ];

// spinBtn.addEventListener("click", () => {
//   // Disable while spinning
//   spinBtn.disabled = true;
//   motivationText.classList.remove("fade-in");

//   // Start spin animation
//   spinner.style.animation = "spin 1s ease-in-out";

//   // After spin completes
//   setTimeout(() => {
//     spinner.style.animation = "none";
//     const pick = motivators[Math.floor(Math.random() * motivators.length)];
//     motivationText.textContent = pick;
//     motivationText.classList.add("fade-in");
//     spinBtn.disabled = false;
//   }, 1000);
// });


let taskbtn = document.querySelector("#taskbtn");
let tasks = document.querySelector("#tasks");

const motivators = [
  "10 Pushups or pullups",
  "2 mile Run",
  "1 minute plank now",
  "delete instagram",
  "No junk food for a week",
  "Get up at 4am tommorow",
  "Drink Water",
  "Meditate for 5 minutes"
];

taskbtn.addEventListener('click',()=>{
  const pick =motivators[Math.floor(Math.random()*motivators.length)];
  tasks.textContent=pick;
})

let bgChange =document.querySelector("#bgChange");
let buttons = document.querySelectorAll("button");
let hub = document.querySelector("#hub");
let isNight = true;

bgChange.addEventListener('click',()=>{
     if(isNight){
        document.body.style.backgroundImage = 'url("day.png")';
        bgChange.src="/svgs/moon.svg"
        buttons.forEach(button=>{
          button.style.backgroundColor = "white";
          button.style.color = "black";
          tasks.style.color = "black";
          hub.style.color = "black";
          
        });
      } else {
        document.body.style.backgroundImage = 'url("night.png")';
        bgChange.src="/svgs/sun.svg"
        buttons.forEach(button=>{
          button.style.backgroundColor = "black";
          button.style.color = "white";
          tasks.style.color = "white";
          hub.style.color = "white";


       });
     }
     isNight = !isNight;

});




