const data = {
    risks: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        values: [12, 19, 15, 25, 22, 30]
    },
    incidents: {
        labels: ['DDoS', 'Фишинг', 'Вредоносное ПО', 'Утечка данных'],
        values: [30, 25, 25, 20]
    }
};

// Добавляем новые данные
const strategyData = {
    compliance: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        values: [75, 82, 85, 89]
    },
    budget: {
        labels: ['Инфраструктура', 'Персонал', 'Инструменты', 'Консалтинг'],
        values: [40, 25, 20, 15]
    }
};

// Добавляем новые данные
const securityData = {
    training: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        values: [65, 72, 78, 85]
    },
    incidents: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        values: [15, 12, 8, 5, 7, 4]
    },
    effectiveness: {
        labels: ['Сеть', 'Endpoint', 'Cloud', 'Email', 'Web'],
        values: [95, 92, 88, 94, 91]
    }
};

// График рисков
const riskCtx = document.getElementById('riskChart').getContext('2d');
new Chart(riskCtx, {
    type: 'line',
    data: {
        labels: data.risks.labels,
        datasets: [{
            label: 'Динамика рисков',
            data: data.risks.values,
            borderColor: '#3498db',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Динамика киберрисков'
            }
        }
    }
});

// Круговая диаграмма инцидентов
const incidentsCtx = document.getElementById('incidentsPieChart').getContext('2d');
new Chart(incidentsCtx, {
    type: 'pie',
    data: {
        labels: data.incidents.labels,
        datasets: [{
            data: data.incidents.values,
            backgroundColor: [
                '#e74c3c',
                '#2ecc71',
                '#f1c40f',
                '#9b59b6'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Распределение инцидентов'
            }
        }
    }
});

// График compliance
const complianceCtx = document.getElementById('complianceChart').getContext('2d');
new Chart(complianceCtx, {
    type: 'bar',
    data: {
        labels: strategyData.compliance.labels,
        datasets: [{
            label: 'Уровень соответствия',
            data: strategyData.compliance.values,
            backgroundColor: '#2ecc71'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Динамика compliance'
            }
        }
    }
});

// График распределения бюджета
const budgetCtx = document.getElementById('budgetChart').getContext('2d');
new Chart(budgetCtx, {
    type: 'doughnut',
    data: {
        labels: strategyData.budget.labels,
        datasets: [{
            data: strategyData.budget.values,
            backgroundColor: [
                '#3498db',
                '#e74c3c',
                '#f1c40f',
                '#9b59b6'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Распределение бюджета'
            }
        }
    }
});

// Добавляем новый график эффективности защиты
const effectivenessCtx = document.getElementById('effectivenessChart').getContext('2d');
new Chart(effectivenessCtx, {
    type: 'radar',
    data: {
        labels: securityData.effectiveness.labels,
        datasets: [{
            label: 'Эффективность защиты',
            data: securityData.effectiveness.values,
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: '#3498db',
            pointBackgroundColor: '#3498db'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Эффективность по направлениям'
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});