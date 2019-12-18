window.onload = function () {
    interval;                                                   //op window onload interval oproepen
}

let interval = setInterval(getChart, 1000);                    //30 seconden

async function getData() {                                      //functie getData
    const xs = [];                                              //voor x as chart
    const ys = [];                                              //voor y as chart
    const url = "data/heartbeat.json";                          //url voor json data
    const nrofbeats = 10;                                       //aantal hartslagen
    var total;                                                  //var die totaal zal vasthouden
    var average;                                                // "" die gemiddelde zal vasthouden
    $("#tablediv").css("visibility", "visible")                 //table visible maken met jquery
    
    $.getJSON(url, function (data) {                            //jquery ajax methode om json op te vragen
        for (i = 0; i < nrofbeats; i++) {                       //for loop die 10x zal overlopen
            var tr = $("<tr/>");                            
            tr.append("<td>" + (i + 1) + "</td>")
            tr.append("<td>" + (data[i]) + "</td>")             //teller en data aan table appenden
            $("#beatstable").append(tr)

            xs.push(i + 1);                                     
            ys.push(data[i]);                                   //teller en data in x en y as pushen 
        }
        total = data.reduce((a, b) => a + b, 0);                //totaal van array optellen
        average = Math.floor(total / nrofbeats);                //gemiddelde berekenen
        if(average < 50){
            $("#paverage").html("Average ratio: " 
            + average + " (low).");                             //in p steken
        }
        else if(average > 70){
            $("#paverage").html("Average ratio: " 
            + average + " (high).");                             //in p steken
        }
        else{
            $("#paverage").html("Average ratio: " 
            + average + " (normal).");                           //in p steken
        }
    });
    return { xs, ys };                                           //xs en ys terugsturen
}

async function getChart() {                                     //functie getChart 
    clearInterval(interval);                                    //interval stoppen met clearinterval

    const data = await getData();                               //wachten tot er data is om chart op te maken
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {                              //nieuwe chart aanmaken
        type: 'line',                                           //lijn chart
        data: {
            labels: data.xs,                                    //xs insteken
            datasets: [{
                label: 'Heartbeat ratio',                       //opties instellen
                data: data.ys,
                fill: false,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {                                              //nog meer opties instellen
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



