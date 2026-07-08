function createLineChart(id, color, data) {

    const ctx = document.getElementById(id);

    if (!ctx) return;

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",""],
            datasets: [{
                data: data,
                borderColor: color,
                backgroundColor: color + "20",
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: color
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            }
        }
    });

}

function createBarChart(id, color, data) {

    const ctx = document.getElementById(id);

    if (!ctx) return;

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct"
            ],

            datasets: [{

                data: data,

                backgroundColor: color,

                borderRadius: 6,

                barThickness: 10,

                maxBarThickness: 12

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                x: {

                    display: false

                },

                y: {

                    display: false,

                    beginAtZero: true

                }

            }

        }

    });

}

function createChart(id, color, data) {

    const ctx = document.getElementById(id);

    if (!ctx) return;

    new Chart(ctx, {

        type: 'line',

        data: {

            labels: [
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ],

            datasets: [

                {

                    data: data,

                    borderColor: color,

                    backgroundColor: color + "22",

                    fill: true,

                    tension: 0.4,

                    pointRadius: 3,

                    pointHoverRadius: 6,

                    pointBackgroundColor: color,

                    pointBorderColor: "#fff",

                    pointBorderWidth: 2

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    enabled: true

                }

            },

            scales: {

                x: {

                    display: false

                },

                y: {

                    display: false

                }

            }

        }

    });

} 

/* =========================
      CREATE CHARTS
========================= */

// createLineChart(
//     "energyChart",
//     "#22C55E",
//     [65,72,69,80,76,90,92]
// );

createBarChart(
    "maintenanceChart",
    "#4750f1",
    [12, 18, 10, 25, 16, 22, 14, 20, 17, 24]
);

createChart( "energyChart", "#22C55E", [65,72,69,80,76,90,92] );
 

createChart( "occupancyChart", "#3B82F6", [45,58,66,72,84,88,91] );

createChart( "securityChart", "#EF4444", [94,96,95,98,97,99,99] );