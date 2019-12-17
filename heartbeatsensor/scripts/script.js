window.onload = function () {
    interval;
}

let interval = setInterval(getChart, 30000);

async function getData() {
    const xs = [];
    const ys = [];
    const url = "data/heartbeat.json";
    const nrofbeats = 10;
    var total;
    var average;
    $("#tablediv").css("visibility", "visible")
    $("#heart").css("visibility", "visible")

    $.getJSON(url, function (data) {
        for (i = 0; i < nrofbeats; i++) {
            var tr = $("<tr/>");
            tr.append("<td>" + (i + 1) + "</td>")
            tr.append("<td>" + (data[i]) + "</td>")
            $("#beatstable").append(tr)

            xs.push(i + 1);
            ys.push(data[i]);
        }
        total = data.reduce((a, b) => a + b, 0);
        average = Math.floor(total / nrofbeats);
        $("#paverage").html("Average ratio: " + average);
    });
    return { xs, ys };
}

async function getChart() {
    clearInterval(interval);

    const data = await getData();
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Heartbeat ratio',
                data: data.ys,
                fill: false,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
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



