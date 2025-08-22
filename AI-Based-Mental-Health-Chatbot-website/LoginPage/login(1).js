        // State-city mapping data
        const citiesByState = {
            "AL": ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"],
            "AK": ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"],
            "AZ": ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"],
            "AR": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"],
            "CA": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
            "CO": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
            "CT": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"]
            // More states and cities would be added here for a complete implementation
        };

        // DOM elements
        const stateSelect = document.getElementById('state');
        const citySelect = document.getElementById('city');
        const loginForm = document.getElementById('loginForm');

        // Event listener for state selection change
        stateSelect.addEventListener('change', function() {
            const selectedState = this.value;
            
            // Clear and disable city dropdown by default
            citySelect.innerHTML = '';
            citySelect.disabled = true;
            
            if (selectedState) {
                // Enable city dropdown if state is selected
                citySelect.disabled = false;
                
                // Add default option
                addOption(citySelect, '', 'Select City');
                
                // Add cities for selected state
                const cities = citiesByState[selectedState] || [];
                cities.forEach(city => {
                    addOption(citySelect, city, city);
                });
            } else {
                // If no state selected, show default message
                addOption(citySelect, '', 'Select State First');
            }
        });

        // Helper function to add options to select elements
        function addOption(selectElement, value, text) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            selectElement.appendChild(option);
        }

        // Form submission handler
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const state = stateSelect.value;
            const city = citySelect.value;
            
            // Form validation logic would go here
            
            // Show success message (in a real app, you would send this data to a server)
            alert(`Thank you, ${name}! Your account has been created successfully.`);
            
            // Optional: reset form after submission
            this.reset();
            citySelect.innerHTML = '';
            addOption(citySelect, '', 'Select State First');
            citySelect.disabled = true;
        });