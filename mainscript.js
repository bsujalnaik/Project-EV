function app() {
    return {
        // State Management
        mobileMenu: false,
        loginModalOpen: false,
        registerModalOpen: false,
        stations: [
            { id: 1, name: 'Downtown Charging Hub', address: '123 Main St', available_slots: 5 },
            { id: 2, name: 'Riverside Electric Station', address: '456 River Rd', available_slots: 3 },
            { id: 3, name: 'Tech Park Charging Point', address: '789 Innovation Ave', available_slots: 7 }
        ],
        booking: {
            station: null,
            vehicle_type: 'sedan',
            start_time: '',
            end_time: '',
            battery_percentage: 50
        },
        login: {
            email: '',
            password: ''
        },
        register: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        // Mobile Menu Functions
        toggleMobileMenu() {
            this.mobileMenu = !this.mobileMenu;
        },

        // Modal Management
        openLoginModal() {
            this.loginModalOpen = true;
            this.registerModalOpen = false;
            this.mobileMenu = false;
        },
        closeLoginModal() {
            this.loginModalOpen = false;
        },
        openRegisterModal() {
            this.registerModalOpen = true;
            this.loginModalOpen = false;
            this.mobileMenu = false;
        },
        closeRegisterModal() {
            this.registerModalOpen = false;
        },

        // Booking Functions
        selectStation(station) {
            this.booking.station = station.id;
            window.location.href = '#booking';
        },
        scrollToBooking() {
            window.location.href = '#booking';
        },
        updateBatteryPercentage(value) {
            this.booking.battery_percentage = parseInt(value);
        },
        validateBooking() {
            if (!this.booking.station) {
                alert('Please select a charging station');
                return false;
            }
            if (!this.booking.start_time) {
                alert('Please select a start time');
                return false;
            }
            if (!this.booking.end_time) {
                alert('Please select an end time');
                return false;
            }
            return true;
        },
        bookCharging() {
            if (this.validateBooking()) {
                // Here you would typically make an API call to your backend
                alert('Booking submitted! Confirmation details will be sent to your email.');
                // Reset form
                this.booking = {
                    station: null,
                    vehicle_type: 'sedan',
                    start_time: '',
                    end_time: '',
                    battery_percentage: 50
                };
            }
        },

        // Authentication Functions
        validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        handleLogin(e) {
            e.preventDefault();
            if (!this.validateEmail(this.login.email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (!this.login.password) {
                alert('Please enter your password');
                return;
            }
            // Here you would typically make an API call to your backend
            alert('Login successful!');
            this.closeLoginModal();
            // Reset form
            this.login = { email: '', password: '' };
        },
        handleRegister(e) {
            e.preventDefault();
            if (!this.register.name) {
                alert('Please enter your name');
                return;
            }
            if (!this.validateEmail(this.register.email)) {
                alert('Please enter a valid email address');
                return;
            }
            if (this.register.password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            if (this.register.password !== this.register.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            // Here you would typically make an API call to your backend
            alert(`Registered successfully! Welcome, ${this.register.name}.`);
            this.closeRegisterModal();
            this.openLoginModal();
            // Reset form
            this.register = { name: '', email: '', password: '', confirmPassword: '' };
        },

        // Initialization
        init() {
            // Add any initialization logic here
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeLoginModal();
                    this.closeRegisterModal();
                    this.mobileMenu = false;
                }
            });
        }
    };
}