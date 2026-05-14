// ===== Data Storage =====
let consumers = [];
let bills = [];

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', function () {
    initializeVisualization();
    setupEventListeners();
    loadConsumers();
    setupHamburgerMenu();
    generateInitialData();
});

// ===== Generate Initial Sample Data =====
function generateInitialData() {
    // Add sample consumers if none exist
    if (consumers.length === 0) {
        consumers = [
            { id: 'RG001', name: 'Rajesh Kumar', email: 'rajesh@email.com', village: 'Sundarpur', type: 'Domestic', load: 2 },
            { id: 'RG002', name: 'Priya Sharma', email: 'priya@email.com', village: 'Gunjapur', type: 'Agricultural', load: 5 },
            { id: 'RG003', name: 'Arjun Singh', email: 'arjun@email.com', village: 'Kishan Nagar', type: 'Commercial', load: 3 }
        ];
    }
    updateConsumerStats();
    loadConsumers();
}

// ===== Visualization Functions =====
function initializeVisualization() {
    drawHeroChart();
    drawGenerationChart();
    drawLoadChart();
    drawFrequencyChart();
    drawVoltageChart();
    drawMainVisualization();
    drawHourlyChart();
    drawWeeklyChart();
    drawCategoryChart();
    drawSourcesChart();
    drawPeakChart();
    drawLossesChart();
    drawNetworkMap();
}

// ===== Hero Chart =====
function drawHeroChart() {
    const canvas = document.getElementById('heroChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 300;

    // Draw animated wave
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 3;
    
    ctx.beginPath();
    for (let x = 0; x <= width; x += 10) {
        const y = height / 2 + Math.sin((x + Date.now() / 50) * 0.01) * 40;
        ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw info text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Real-Time Power Grid Status', width / 2, 40);
    ctx.font = '14px Arial';
    ctx.fillText('Live Data - System Operational', width / 2, 70);
}

// ===== Generation Chart =====
function drawGenerationChart() {
    const canvas = document.getElementById('generationChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 60;

    const data = [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2450];
    const maxVal = Math.max(...data);
    
    ctx.strokeStyle = '#FF6B35';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((val, i) => {
        const x = (i / data.length) * width;
        const y = height - (val / maxVal) * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Fill area under curve
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fillStyle = 'rgba(255, 107, 53, 0.1)';
    ctx.fill();
}

// ===== Load Chart =====
function drawLoadChart() {
    const canvas = document.getElementById('loadChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 60;

    const data = [500, 750, 950, 1100, 1250, 1400, 1550, 1700, 1800, 1850];
    const maxVal = 2000;
    
    ctx.strokeStyle = '#1B6CA8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((val, i) => {
        const x = (i / data.length) * width;
        const y = height - (val / maxVal) * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.fillStyle = 'rgba(27, 108, 168, 0.1)';
    ctx.fill();
}

// ===== Frequency Chart =====
function drawFrequencyChart() {
    const canvas = document.getElementById('frequencyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 60;

    const centerY = height / 2;
    const data = [49.8, 50.0, 50.1, 50.2, 50.15, 50.1, 50.05, 50.2];
    
    ctx.strokeStyle = '#06D6A0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((val, i) => {
        const x = (i / data.length) * width;
        const y = centerY - (val - 50) * 50;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw reference line
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
}

// ===== Voltage Chart =====
function drawVoltageChart() {
    const canvas = document.getElementById('voltageChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 60;

    const centerY = height / 2;
    const data = [228, 229, 230, 231, 230.5, 230, 229.8, 230.5];
    
    ctx.strokeStyle = '#F78C6B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((val, i) => {
        const x = (i / data.length) * width;
        const y = centerY - (val - 230) * 20;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw reference line
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
}

// ===== Main Visualization =====
function drawMainVisualization() {
    const canvas = document.getElementById('mainVisualization');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 400;

    // Draw power distribution network
    ctx.fillStyle = 'rgba(27, 108, 168, 0.1)';
    ctx.fillRect(0, 0, width, height);

    // Draw nodes
    const nodes = [
        { x: width * 0.1, y: height * 0.5, label: 'Main Power Plant', color: '#FF6B35', size: 15 },
        { x: width * 0.35, y: height * 0.3, label: 'Substation A', color: '#1B6CA8', size: 12 },
        { x: width * 0.35, y: height * 0.7, label: 'Substation B', color: '#1B6CA8', size: 12 },
        { x: width * 0.6, y: height * 0.25, label: 'Substation C', color: '#06D6A0', size: 12 },
        { x: width * 0.6, y: height * 0.5, label: 'Distribution', color: '#06D6A0', size: 12 },
        { x: width * 0.6, y: height * 0.75, label: 'Substation D', color: '#06D6A0', size: 12 },
        { x: width * 0.85, y: height * 0.2, label: 'Consumers A', color: '#F78C6B', size: 10 },
        { x: width * 0.85, y: height * 0.5, label: 'Consumers B', color: '#F78C6B', size: 10 },
        { x: width * 0.85, y: height * 0.8, label: 'Consumers C', color: '#F78C6B', size: 10 }
    ];

    // Draw connections
    ctx.strokeStyle = 'rgba(27, 108, 168, 0.3)';
    ctx.lineWidth = 2;
    nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
            if (i < j && Math.random() > 0.6) {
                ctx.beginPath();
                ctx.moveTo(node1.x, node1.y);
                ctx.lineTo(node2.x, node2.y);
                ctx.stroke();
            }
        });
    });

    // Draw nodes with labels
    nodes.forEach(node => {
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, 2 * Math.PI);
        ctx.fill();

        // Draw labels
        ctx.fillStyle = '#333';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.size + 15);
    });

    // Draw stats
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Distribution Network Status', 10, 20);
    ctx.font = '12px Arial';
    ctx.fillText('Total Power Generated: 2450 kWh', 10, 40);
    ctx.fillText('Active Substations: 4', 10, 55);
    ctx.fillText('Connected Consumers: 600+', 10, 70);
}

// ===== Hourly Consumption Chart =====
function drawHourlyChart() {
    const canvas = document.getElementById('hourlyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const hours = ['00', '04', '08', '12', '16', '20', '24'];
    const data = [400, 500, 800, 1200, 1100, 1800, 600];
    const maxVal = 2000;
    const barWidth = (width - 40) / data.length;

    // Draw bars
    ctx.fillStyle = 'rgba(255, 107, 53, 0.7)';
    data.forEach((val, i) => {
        const x = 20 + i * barWidth;
        const barHeight = (val / maxVal) * (height - 60);
        const y = height - 40 - barHeight;
        ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

        // Draw value
        ctx.fillStyle = '#333';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(val, x + barWidth / 2, y - 5);

        // Draw hour label
        ctx.fillText(hours[i], x + barWidth / 2, height - 15);
    });

    // Draw axis
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(20, height - 40);
    ctx.lineTo(width - 10, height - 40);
    ctx.stroke();
}

// ===== Weekly Chart =====
function drawWeeklyChart() {
    const canvas = document.getElementById('weeklyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [1800, 1900, 2100, 2000, 2200, 2400, 2100];
    const maxVal = 2500;

    // Draw line chart
    ctx.strokeStyle = '#1B6CA8';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((val, i) => {
        const x = (width / (data.length - 1)) * i;
        const y = height - 40 - (val / maxVal) * (height - 60);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Draw points
    ctx.fillStyle = '#1B6CA8';
    data.forEach((val, i) => {
        const x = (width / (data.length - 1)) * i;
        const y = height - 40 - (val / maxVal) * (height - 60);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    });

    // Draw labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    days.forEach((day, i) => {
        const x = (width / (data.length - 1)) * i;
        ctx.fillText(day, x, height - 15);
    });
}

// ===== Category Chart (Pie) =====
function drawCategoryChart() {
    const canvas = document.getElementById('categoryChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const categories = [
        { label: 'Domestic', value: 40, color: '#FF6B35' },
        { label: 'Agricultural', value: 35, color: '#1B6CA8' },
        { label: 'Commercial', value: 15, color: '#06D6A0' },
        { label: 'Industrial', value: 10, color: '#F78C6B' }
    ];

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    let currentAngle = -Math.PI / 2;

    categories.forEach((cat, i) => {
        const sliceAngle = (cat.value / 100) * 2 * Math.PI;

        // Draw slice
        ctx.fillStyle = cat.color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        // Draw label
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius + 30);
        const labelY = centerY + Math.sin(labelAngle) * (radius + 30);

        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${cat.label}`, labelX, labelY - 5);
        ctx.fillText(`${cat.value}%`, labelX, labelY + 10);

        currentAngle += sliceAngle;
    });
}

// ===== Energy Sources Chart =====
function drawSourcesChart() {
    const canvas = document.getElementById('sourcesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const sources = [
        { label: 'Hydro', value: 35, color: '#06D6A0' },
        { label: 'Thermal', value: 40, color: '#FF6B35' },
        { label: 'Solar', value: 15, color: '#F78C6B' },
        { label: 'Wind', value: 10, color: '#1B6CA8' }
    ];

    // Draw horizontal bars
    sources.forEach((source, i) => {
        const y = 40 + i * 50;
        const barWidth = (source.value / 100) * (width - 100);

        // Bar background
        ctx.fillStyle = '#e0e6ed';
        ctx.fillRect(50, y, width - 100, 30);

        // Bar fill
        ctx.fillStyle = source.color;
        ctx.fillRect(50, y, barWidth, 30);

        // Label
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(source.label, 45, y + 20);

        // Value
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${source.value}%`, barWidth + 55, y + 20);
    });
}

// ===== Peak Hours Chart =====
function drawPeakChart() {
    const canvas = document.getElementById('peakChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const peaks = [
        { time: '19:00-21:00', load: 2400 },
        { time: '12:00-14:00', load: 1800 },
        { time: '08:00-10:00', load: 1400 }
    ];

    const maxLoad = 2500;
    const barWidth = (width - 40) / peaks.length;

    // Draw bars
    peaks.forEach((peak, i) => {
        const x = 20 + i * barWidth;
        const barHeight = (peak.load / maxLoad) * (height - 60);
        const y = height - 40 - barHeight;

        // Bar gradient
        const gradient = ctx.createLinearGradient(0, y, 0, height - 40);
        gradient.addColorStop(0, '#FF6B35');
        gradient.addColorStop(1, '#FF8C42');
        ctx.fillStyle = gradient;
        ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

        // Value
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${peak.load}kW`, x + barWidth / 2, y - 5);

        // Label
        ctx.font = '11px Arial';
        ctx.fillText(peak.time, x + barWidth / 2, height - 15);
    });
}

// ===== Line Losses Chart =====
function drawLossesChart() {
    const canvas = document.getElementById('lossesChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 250;

    const losses = [
        { line: 'Line A', value: 2.5 },
        { line: 'Line B', value: 3.2 },
        { line: 'Line C', value: 1.8 },
        { line: 'Line D', value: 2.1 }
    ];

    const maxVal = 4;
    const barWidth = (width - 40) / losses.length;

    losses.forEach((loss, i) => {
        const x = 20 + i * barWidth;
        const barHeight = (loss.value / maxVal) * (height - 60);
        const y = height - 40 - barHeight;

        // Bar
        ctx.fillStyle = loss.value > 2.5 ? '#E63946' : '#06D6A0';
        ctx.fillRect(x + 5, y, barWidth - 10, barHeight);

        // Value
        ctx.fillStyle = '#333';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${loss.value}%`, x + barWidth / 2, y - 5);

        // Label
        ctx.font = '11px Arial';
        ctx.fillText(loss.line, x + barWidth / 2, height - 15);
    });
}

// ===== Network Map =====
function drawNetworkMap() {
    const canvas = document.getElementById('networkMap');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = 400;

    // Draw grid background
    ctx.strokeStyle = '#e0e6ed';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    for (let i = 0; i < height; i += 50) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }

    // Draw network components
    const components = [
        { x: width * 0.15, y: height * 0.4, type: 'Plant', color: '#FF6B35' },
        { x: width * 0.4, y: height * 0.2, type: 'Sub A', color: '#1B6CA8' },
        { x: width * 0.4, y: height * 0.6, type: 'Sub B', color: '#1B6CA8' },
        { x: width * 0.7, y: height * 0.4, type: 'Distribution', color: '#06D6A0' }
    ];

    // Draw connections
    ctx.strokeStyle = 'rgba(27, 108, 168, 0.4)';
    ctx.lineWidth = 2;
    for (let i = 0; i < components.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(components[i].x, components[i].y);
        ctx.lineTo(components[i + 1].x, components[i + 1].y);
        ctx.stroke();
    }

    // Draw components
    components.forEach(comp => {
        ctx.fillStyle = comp.color;
        ctx.fillRect(comp.x - 20, comp.y - 15, 40, 30);
        ctx.strokeStyle = comp.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(comp.x - 20, comp.y - 15, 40, 30);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(comp.type, comp.x, comp.y + 5);
    });
}

// ===== Consumer Management =====
function setupEventListeners() {
    const consumerForm = document.getElementById('consumerForm');
    if (consumerForm) {
        consumerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            addConsumer();
        });
    }

    const billForm = document.getElementById('billForm');
    if (billForm) {
        billForm.addEventListener('submit', function (e) {
            e.preventDefault();
            generateBill();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            handleContactForm();
        });
    }
}

function addConsumer() {
    const name = document.getElementById('consumerName').value;
    const id = document.getElementById('consumerId').value;
    const email = document.getElementById('consumerEmail').value;
    const village = document.getElementById('village').value;
    const type = document.getElementById('consumerType').value;
    const load = parseFloat(document.getElementById('sanctionedLoad').value);

    if (name && id && email && village && type && load) {
        consumers.push({ name, id, email, village, type, load });
        document.getElementById('consumerForm').reset();
        loadConsumers();
        updateConsumerStats();
        updateBillConsumerDropdown();
        showNotification('Consumer registered successfully!');
    }
}

function loadConsumers() {
    const consumersList = document.getElementById('consumersList');
    consumersList.innerHTML = '';

    consumers.forEach((consumer, index) => {
        const consumerItem = document.createElement('div');
        consumerItem.className = 'consumer-item';
        consumerItem.innerHTML = `
            <h4>${consumer.name}</h4>
            <small><strong>ID:</strong> ${consumer.id}</small>
            <small><strong>Type:</strong> ${consumer.type}</small>
            <small><strong>Village:</strong> ${consumer.village}</small>
            <small><strong>Load:</strong> ${consumer.load} kW</small>
            <button class="btn btn-secondary" style="margin-top: 0.5rem; width: 100%; font-size: 0.8rem;" onclick="deleteConsumer(${index})">Remove</button>
        `;
        consumersList.appendChild(consumerItem);
    });
}

function deleteConsumer(index) {
    if (confirm('Remove this consumer?')) {
        consumers.splice(index, 1);
        loadConsumers();
        updateConsumerStats();
        updateBillConsumerDropdown();
        showNotification('Consumer removed successfully!');
    }
}

function updateConsumerStats() {
    document.getElementById('totalConsumers').textContent = consumers.length;
    document.getElementById('domesticCount').textContent = consumers.filter(c => c.type === 'Domestic').length;
    document.getElementById('commercialCount').textContent = consumers.filter(c => c.type === 'Commercial').length;
    document.getElementById('agriculturalCount').textContent = consumers.filter(c => c.type === 'Agricultural').length;
    document.getElementById('industrialCount').textContent = consumers.filter(c => c.type === 'Industrial').length;
}

// ===== Billing Management =====
function updateBillConsumerDropdown() {
    const select = document.getElementById('billConsumer');
    select.innerHTML = '<option value="">Select Consumer</option>';
    consumers.forEach(consumer => {
        const option = document.createElement('option');
        option.value = consumer.name;
        option.textContent = `${consumer.name} (${consumer.id})`;
        select.appendChild(option);
    });
}

function generateBill() {
    const consumerName = document.getElementById('billConsumer').value;
    const month = document.getElementById('billMonth').value;
    const units = parseFloat(document.getElementById('unitsConsumed').value);
    const rate = parseFloat(document.getElementById('unitRate').value);

    if (consumerName && month && units && rate) {
        const consumer = consumers.find(c => c.name === consumerName);
        if (consumer) {
            const totalAmount = units * rate;
            bills.push({
                consumer: consumerName,
                month,
                units,
                rate,
                totalAmount,
                date: new Date().toLocaleDateString()
            });

            document.getElementById('billForm').reset();
            displayBills();
            showNotification('Bill generated successfully!');
        }
    }
}

function displayBills() {
    const billsList = document.getElementById('billsList');
    billsList.innerHTML = '';

    bills.forEach((bill, index) => {
        const billItem = document.createElement('div');
        billItem.className = 'bill-item';
        billItem.innerHTML = `
            <h4>${bill.consumer}</h4>
            <small><strong>Month:</strong> ${bill.month}</small>
            <small><strong>Units:</strong> ${bill.units} kWh @ ₹${bill.rate}/unit</small>
            <small><strong>Amount:</strong> ₹${bill.totalAmount.toFixed(2)}</small>
            <small><strong>Date:</strong> ${bill.date}</small>
        `;
        billsList.appendChild(billItem);
    });
}

function handleContactForm() {
    showNotification('Thank you! Your message has been submitted successfully.');
    document.getElementById('contactForm').reset();
}

// ===== Utility Functions =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #06D6A0, #27AE60);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== Hamburger Menu =====
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '60px';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.flexDirection = 'column';
            navMenu.style.backgroundColor = '#1a1a2e';
            navMenu.style.gap = '0';
            navMenu.style.zIndex = '99';
        });

        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.style.display = 'none';
            });
        });
    }
}

// ===== Add CSS Animations =====
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Auto-refresh visualization every 30 seconds =====
setInterval(() => {
    redrawDynamicCharts();
}, 30000);

function redrawDynamicCharts() {
    drawGenerationChart();
    drawLoadChart();
    drawFrequencyChart();
    drawVoltageChart();
}
