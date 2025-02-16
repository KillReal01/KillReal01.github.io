document.addEventListener('DOMContentLoaded', () => {
    // График динамики рисков
    const riskTrendsCtx = document.getElementById('riskTrendsChart').getContext('2d');
    new Chart(riskTrendsCtx, {
        type: 'line',
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
            datasets: [
                {
                    label: 'Критические',
                    data: [10, 12, 8, 15, 12, 12],
                    borderColor: '#dc2626',
                    tension: 0.4
                },
                {
                    label: 'Средние',
                    data: [25, 28, 32, 30, 28, 28],
                    borderColor: '#f59e0b',
                    tension: 0.4
                },
                {
                    label: 'Низкие',
                    data: [40, 38, 45, 42, 45, 45],
                    borderColor: '#16a34a',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Динамика рисков за 6 месяцев'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // График распределения рисков по активам
    const riskAssetsCtx = document.getElementById('riskAssetsChart').getContext('2d');
    new Chart(riskAssetsCtx, {
        type: 'bar',
        data: {
            labels: ['Сервера', 'Сеть', 'Приложения', 'БД', 'Endpoints', 'Cloud'],
            datasets: [{
                label: 'Количество рисков',
                data: [25, 18, 30, 22, 15, 20],
                backgroundColor: [
                    '#3b82f6',
                    '#10b981',
                    '#f59e0b',
                    '#6366f1',
                    '#ec4899',
                    '#8b5cf6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Распределение рисков по типам активов'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}); 