const ctx = document.getElementById('comparisonChart').getContext('2d');
const comparisonChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Housing Costs', 'Rent', 'Education Costs', 'Gas Prices', 'Average Income', 'Family Size'],
        datasets: [
            {
                label: '1970',
                data: [15000, 108, 500, 0.36, 9000, 3.5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: '2024',
                data: [513100, 1713, 12000, 3.9, 63000, 1.9],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                type: 'logarithmic'
            }
        }
    }
});
