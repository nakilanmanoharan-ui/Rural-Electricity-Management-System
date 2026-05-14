# ⚡ PowerHub - Rural Electricity Management System

A comprehensive web-based electricity management system designed for rural areas to efficiently manage power distribution, consumer billing, and grid monitoring with advanced real-time visualizations.

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Visualizations](#visualizations)
- [API & Functions](#api--functions)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### 1. **Live Dashboard**
   - Real-time power generation monitoring
   - Current load tracking
   - Grid frequency monitoring (50 Hz standard)
   - Voltage monitoring and alerts
   - Status indicators with pulse animation
   - Mini metric charts for each parameter

### 2. **Consumer Management**
   - Register new rural consumers
   - Categorize by type (Domestic, Commercial, Agricultural, Industrial)
   - Track sanctioned load and consumption
   - Manage consumer contact information
   - View consumer statistics by category
   - Delete consumer records

### 3. **Billing System**
   - Automated bill generation
   - Unit-based calculation with custom rates
   - Monthly billing tracking
   - Revenue analytics
   - Collection rate monitoring
   - Payment history

### 4. **Grid Status & Monitoring**
   - Monitor 4+ substations
   - Track 6+ feeders
   - Real-time voltage and load status
   - System stability indicators
   - Network distribution map
   - Equipment health status

### 5. **Advanced Analytics**
   - 24-hour consumption patterns
   - Weekly load distribution
   - Consumer category breakdown (pie chart)
   - Energy sources distribution
   - Peak hours analysis
   - Transmission line losses tracking
   - System insights and alerts

### 6. **Network Visualization**
   - Distribution network topology
   - Power flow visualization
   - Substation connectivity map
   - Real-time component status
   - Network node representation

### 7. **Responsive Design**
   - Mobile-friendly interface
   - Tablet optimization
   - Desktop full experience
   - Works across all screen sizes

## 🛠 Technologies Used

### Frontend:
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox & Grid
  - Custom properties (CSS variables)
  - Gradients and animations
  - Responsive media queries
  
- **JavaScript (Vanilla/ES6+)**
  - Canvas API for advanced visualizations
  - DOM manipulation
  - Event handling
  - Dynamic data management
  - Local data storage

### No Dependencies Required:
- Pure vanilla JavaScript (no frameworks)
- HTML5 Canvas for all charts
- CSS3 for styling
- Works offline

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required
- No internet connection needed (after loading)

### Steps

1. **Clone or Download the repository:**
   ```bash
   git clone https://github.com/yourusername/Rural-Electricity-Management-System.git
   cd Rural-Electricity-Management-System
   ```

2. **Open the application:**
   - Double-click `index.html` to open in default browser
   - OR right-click → Open with → Choose browser
   - OR drag `index.html` to your browser window

3. **No additional setup needed!**
   - All code is self-contained
   - Works immediately upon opening

## 🚀 Usage

### Dashboard Monitoring
1. Open the application
2. View real-time metrics on **Dashboard** section:
   - Total power generated (kWh)
   - Current load (kW)
   - Grid frequency (Hz)
   - Line voltage (V)
3. Check grid health status indicators
4. View power distribution network map

### Adding Consumers
1. Navigate to **Consumers** section
2. Fill in the registration form:
   - Consumer Name
   - Consumer ID (unique identifier)
   - Email address
   - Village name
   - Consumer Type (Domestic/Commercial/Agricultural/Industrial)
   - Sanctioned Load (in kW)
3. Click **Register Consumer**
4. View all consumers in the list below

### Generating Bills
1. Go to **Billing** section
2. Select a registered consumer from dropdown
3. Enter:
   - Billing month
   - Units consumed (kWh)
   - Rate per unit (₹)
4. Click **Generate Bill**
5. View generated bills in history

### Analyzing Grid Status
1. Check **Grid Status** section
2. Monitor 4 substations:
   - Substation A, B, C, D
   - View voltage, load, consumer count
   - Check load status bars
3. View feeder status (6 feeders)
4. Check system health indicators

### Viewing Analytics
1. Visit **Analytics** section
2. Explore 6 different visualizations:
   - 24-hour consumption pattern
   - Weekly load distribution
   - Consumer category breakdown
   - Energy sources distribution
   - Peak hours analysis
   - Transmission losses
3. Read system insights and alerts

## 📁 Project Structure

```
Rural-Electricity-Management-System/
├── index.html          # Main application file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

### File Details

**index.html** (1000+ lines)
- Semantic HTML5 structure
- 10 main sections with navigation
- Canvas elements for visualizations
- Forms for data input
- Responsive layout structure

**styles.css** (1200+ lines)
- Professional color scheme
- CSS Grid & Flexbox layouts
- Animations and transitions
- Responsive design
- Custom scrollbars
- Glassmorphism effects

**script.js** (1000+ lines)
- 12 different chart visualizations
- Consumer management system
- Billing calculations
- Form handling
- Data validation
- Event listeners
- Canvas drawing functions

## 📊 Visualizations

### Chart Types Implemented:

1. **Hero Chart** - Animated wave pattern
2. **Metric Mini Charts** - Generation, Load, Frequency, Voltage
3. **Main Distribution Network** - Network topology with nodes
4. **Hourly Consumption** - Bar chart (24 hours)
5. **Weekly Load Distribution** - Line chart with points
6. **Consumer Category** - Pie chart breakdown
7. **Energy Sources** - Horizontal bar chart
8. **Peak Hours Analysis** - Gradient bar chart
9. **Transmission Losses** - Color-coded bars
10. **System Network Map** - Grid topology visualization

All charts use HTML5 Canvas API for high performance.

## 🔧 API & Functions

### Data Management
```javascript
consumers[]          // Array of registered consumers
bills[]              // Array of generated bills
```

### Core Functions

**Consumer Functions:**
- `addConsumer()` - Register new consumer
- `deleteConsumer(index)` - Remove consumer
- `loadConsumers()` - Display consumer list
- `updateConsumerStats()` - Update statistics
- `updateBillConsumerDropdown()` - Refresh billing dropdown

**Billing Functions:**
- `generateBill()` - Create new bill
- `displayBills()` - Show billing history

**Visualization Functions:**
- `initializeVisualization()` - Initialize all charts
- `drawHeroChart()` - Animated hero visualization
- `drawMainVisualization()` - Network topology
- `drawHourlyChart()` - 24-hour consumption
- `drawWeeklyChart()` - Weekly distribution
- `drawCategoryChart()` - Pie chart
- `drawSourcesChart()` - Energy sources
- `drawPeakChart()` - Peak hours
- `drawLossesChart()` - Line losses
- `drawNetworkMap()` - System map
- `redrawDynamicCharts()` - Auto-refresh charts

**Utility Functions:**
- `scrollToSection(id)` - Smooth navigation
- `showNotification(message)` - Toast alerts
- `formatDate(date)` - Date formatting

## 🎯 Key Metrics Displayed

### Dashboard:
- **Total Generated**: 2450 kWh
- **Current Load**: 1850 kW
- **Frequency**: 50.2 Hz
- **Voltage**: 230.5 V

### Health Indicators:
- System Stability: 85%
- Transmission Efficiency: 92%
- Infrastructure Health: 78%
- System Uptime: 95%

### Substation Status:
- Load distribution across 4 substations
- Real-time voltage monitoring
- Consumer count per substation
- Load capacity indicators

## 📱 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome  | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari  | ✅ Full | Latest |
| Edge    | ✅ Full | Latest |
| IE      | ❌ No   | N/A |

## 🔒 Data Management

- All data stored locally in browser memory
- No external API calls required
- Data persists during session
- Ready for localStorage integration
- No sensitive data transmitted

## 🎨 Color Scheme

```css
Primary Color:    #FF6B35 (Orange - Power)
Secondary Color:  #004E89 (Dark Blue - Authority)
Accent Color:     #1B6CA8 (Blue - Trust)
Success Color:    #06D6A0 (Green - Good)
Warning Color:    #F78C6B (Light Orange - Caution)
Danger Color:     #E63946 (Red - Alert)
```

## 🚀 Performance Optimizations

- Canvas rendering for fast drawing
- Minimal DOM manipulation
- Efficient event delegation
- Smooth animations with CSS
- Auto-refresh every 30 seconds
- Responsive grid layouts
- Optimized image delivery

## 🔄 Auto-Features

- **Pulsing Status Indicators** - Show system status
- **Auto-refresh Charts** - Every 30 seconds
- **Toast Notifications** - Action confirmations
- **Smooth Scrolling** - Navigation animations
- **Hover Effects** - Interactive feedback

## 🛣️ Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database storage (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Real-time data via WebSocket
- [ ] Mobile app version (React Native)
- [ ] Advanced reporting (PDF export)
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] SMS/Email notifications
- [ ] AI-based load prediction
- [ ] Solar integration module
- [ ] Maintenance scheduling

## 🐛 Known Issues

None currently reported. Please submit issues via GitHub.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

### Coding Standards:
- Use ES6+ JavaScript
- Meaningful variable/function names
- Add comments for complex logic
- Follow existing code style
- Test across browsers

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📞 Contact & Support

- **Email:** support@powerhub.gov.in
- **Emergency Helpline:** 1800-POWER-01
- **GitHub Issues:** [Report Issues](https://github.com/yourusername/Rural-Electricity-Management-System/issues)
- **Website:** [PowerHub Official](https://powerhub.gov.in)

## 👥 Authors

- **Nakilan Manoharan** - Initial Development
- **Contributors:** Community members

## 🙏 Acknowledgments

- Inspired by real-world rural electricity challenges
- Built for farmers and rural communities
- Designed with accessibility in mind
- Community feedback welcome

## 📊 Statistics

- **Lines of Code**: 2500+
- **HTML Elements**: 100+
- **CSS Rules**: 200+
- **JavaScript Functions**: 40+
- **Chart Types**: 10+
- **Sections**: 10
- **Responsive Breakpoints**: 3

## 🏆 System Requirements

**Minimum:**
- 2GB RAM
- 1024x768 resolution
- Internet for first load
- Modern browser

**Recommended:**
- 4GB+ RAM
- 1920x1080+ resolution
- Latest browser version
- 5Mbps internet

## 📈 Scalability

The system can be extended to:
- Handle 10,000+ consumers
- Monitor 100+ substations
- Process real-time data streams
- Multiple administrator accounts
- Multiple rural areas/districts

## 🔐 Security Considerations

- No sensitive data storage
- No external API exposure
- Client-side processing only
- Ready for HTTPS deployment
- Can integrate with OAuth2

---

**Made with ⚡ for Rural Electrification**

Last Updated: May 14, 2026  
Version: 1.0.0

