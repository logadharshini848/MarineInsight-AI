function login() {

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username !== "" && password !== ""){

document.getElementById("message").innerHTML =
"✅ Login Successful";

}else{

document.getElementById("message").innerHTML =
"⚠️ Enter Username and Password";

}

}

function saveData(){

let species =
document.getElementById("species").value;

let location =
document.getElementById("location").value;

let population =
document.getElementById("population").value;

let temperature =
document.getElementById("temperature").value;

let date =
document.getElementById("date").value;

if(
species === "" ||
location === "" ||
population === "" ||
temperature === "" ||
date === ""
){

document.getElementById("saveMessage").innerHTML =
"⚠️ Fill all fields";

return;

}

let table =
document.getElementById("recordsTable");

table.innerHTML += `
<tr>
<td>${species}</td>
<td>${location}</td>
<td>${population}</td>
</tr>
`;

let marineData = {
species,
location,
population,
temperature,
date
};

localStorage.setItem(
"marineRecord",
JSON.stringify(marineData)
);

document.getElementById("saveMessage").innerHTML =
"✅ Record Saved Successfully";

document.getElementById("species").value = "";
document.getElementById("location").value = "";
document.getElementById("population").value = "";
document.getElementById("temperature").value = "";
document.getElementById("date").value = "";

}
function searchRecords() {

let input =
document.getElementById("searchInput").value.toUpperCase();

let table =
document.getElementById("recordsTable");

let rows = table.getElementsByTagName("tr");

for(let i = 0; i < rows.length; i++){

let firstCell =
rows[i].getElementsByTagName("td")[0];

if(firstCell){

let text =
firstCell.textContent || firstCell.innerText;

rows[i].style.display =
text.toUpperCase().indexOf(input) > -1
? ""
: "none";

}

}

}
function analyzeOcean(){

let status = [
"Healthy Ecosystem ✅",
"Moderate Pollution ⚠️",
"High Biodiversity 🌿",
"Low Fish Population 🐟",
"Water Quality Excellent 💧"
];

let random =
Math.floor(Math.random()*status.length);

document.getElementById("healthStatus").innerHTML =
status[random];

}
function updateWeather(){

let temp = Math.floor(Math.random()*8)+25;
let humidity = Math.floor(Math.random()*20)+70;
let wave = (Math.random()*2+1).toFixed(1);
let wind = Math.floor(Math.random()*15)+10;

document.getElementById("temp").innerHTML =
temp + "°C";

document.getElementById("humidity").innerHTML =
humidity + "%";

document.getElementById("wave").innerHTML =
wave + " m";

document.getElementById("wind").innerHTML =
wind + " km/h";

}
function generateRecommendation(){

let tips = [

"Increase monitoring near coral reef areas 🪸",

"Reduce fishing activity this week 🐟",

"Water quality is suitable for marine life 🌊",

"Collect more biodiversity samples 📋",

"AI predicts healthy marine ecosystem ✅",

"Monitor water temperature every 6 hours 🌡"

];

let random = Math.floor(Math.random()*tips.length);

document.getElementById("recommendation").innerHTML = tips[random];

}
function submitFeedback(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let feedback =
document.getElementById("feedback").value;

if(name==="" || email==="" || feedback===""){

document.getElementById("feedbackMessage").innerHTML =
"⚠️ Please fill in all fields.";

return;

}

document.getElementById("feedbackMessage").innerHTML =
"✅ Thank you! Your feedback has been submitted.";

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("feedback").value="";

}
function toggleTheme(){

document.body.classList.toggle("dark-mode");

let btn = document.getElementById("themeBtn");

if(document.body.classList.contains("dark-mode")){

btn.innerHTML = "☀️ Light Mode";

}else{

btn.innerHTML = "🌙 Dark Mode";

}

}
function updateClock(){

let now = new Date();

document.getElementById("liveClock"). innerHTML =
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();
