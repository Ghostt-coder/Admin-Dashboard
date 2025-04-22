const spinBtn = document.getElementById("spin-btn");
const spinner = document.getElementById("spinner");
const motivationText = document.getElementById("motivation");

const motivators = [
  "🚶‍♀️ Take a 2-min walk!",
  "💧 Drink some water.",
  "📦 Tidy up your desk.",
  "🌱 Write 1 good thing about today.",
  "🧘 Breathe deep for 10 seconds.",
  "🧠 Remind yourself why you started.",
  "💬 Compliment someone around you.",
  "📵 Step away from screen for 2 mins."
];

spinBtn.addEventListener("click", () => {
  // Disable while spinning
  spinBtn.disabled = true;
  motivationText.classList.remove("fade-in");

  // Start spin animation
  spinner.style.animation = "spin 1s ease-in-out";

  // After spin completes
  setTimeout(() => {
    spinner.style.animation = "none";
    const pick = motivators[Math.floor(Math.random() * motivators.length)];
    motivationText.textContent = pick;
    motivationText.classList.add("fade-in");
    spinBtn.disabled = false;
  }, 1000);
});

