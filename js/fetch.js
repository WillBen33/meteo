// let tableau = [];
// fetch('https://randomuser.me/api/?results=500')
//     .then(data => data.json())
//     .then(resultats => {
//         console.log(resultats);
//         tableau = resultats.results;
//         console.log(tableau);
//     })

// Current day
let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let date = new Date();
let currDay = date.getDay();
document.getElementById("currDayDiv").innerHTML = days[currDay] + ' (Aujourd\'hui)';

// Round temperatures and add to the DOM
function roundTemp(data, div) {
    data = Math.round(data);
    document.getElementById(div).innerHTML = data;
}

// Instant weather conditions
fetch('http://api.openweathermap.org/data/2.5/weather?q=Bordeaux&units=metric&appid=1479aaf010d2d4467ffe43dab515f027&lang=fr')
    .then(data => data.json())
    .then(function (data) {
        // City
        document.getElementById("cityDiv").innerHTML = data.name;

        // Weather description
        document.getElementById("weatherDiv").innerHTML = data['weather'][0]['description'];

        // Current temp
        roundTemp(data.main.temp, "tempDiv");
        // roundTemp(data.main.temp, "tableTempNow");
        // Min temp
        roundTemp(data.main['temp_min'], "tempMin");
        // Max temp
        roundTemp(data.main['temp_max'], "tempMax");
    });

// Weather for 7 days
let tempArray = [];
fetch('http://api.openweathermap.org/data/2.5/forecast?q=Bordeaux&cnt=7&appid=1479aaf010d2d4467ffe43dab515f027&lang=fr&units=metric')
    .then(data => data.json())
    .then(data => {

        console.log(data);

        tempArray = data.list;

        console.log(tempArray.length);

        days.forEach(function(element){
            // let row = document.getElementById("dayWeek");
            // let colDays = document.createElement("tr");
            // colDays.innerHTML = element;
            // row.appendChild(colDays);
        });

        for (var i = currDay+1; i < days.length; i++){
            let dayCell = document.getElementById("day");
            let dayCellContent = document.createElement("tr");
            dayCellContent.innerHTML = days[i];
            dayCell.appendChild(dayCellContent);
            console.log(days[i]);
        }

        tempArray.forEach(function (element) {
            // let div = document.getElementById("tableTempNow");
            // let row = document.createElement("td");
            // row.innerHTML = Math.round(entry.main.temp);
            // div.appendChild(row);

            // let row = document.getElementById("dayWeek");
            // let colTemp = document.createElement("tr");
            // colTemp.innerHTML = Math.round(element.main.temp);
            // row.appendChild(colTemp);
        });

        // tempArray.forEach(function (entry) {
        //     console.log(entry.dt);
        // });
    });
