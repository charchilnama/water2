// Example data for the chart
const waterUsageData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Water Usage (Liters)',
        data: [3000, 3500, 2800, 4000, 4500, 3800, 4200],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Chart configuration
const config = {
    type: 'line',
    data: waterUsageData,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
};

// Initialize the chart
const ctx = document.getElementById('waterUsageChart').getContext('2d');
new Chart(ctx, config);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
