const loginButton = document.getElementById('loginButton');
        const loginButton2 = document.getElementById('loginButton2');
        const loginModal = document.getElementById('loginModal');
        const mainContent = document.getElementById('mainContent');
        
        // Open modal when login button is clicked    
        loginButton.addEventListener('click', function() {
            loginModal.style.display = 'flex';
            mainContent.classList.add('blur-background');
        });

        loginButton2.addEventListener('click', function() {
            loginModal.style.display = 'flex';
            mainContent.classList.add('blur-background');
        });
        
        // Allow closing the modal when clicking outside the login frame
        loginModal.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                closeModal();
            }
        });
        
        // Function to close the modal
        function closeModal() {
            loginModal.style.display = 'none';
            mainContent.classList.remove('blur-background');
        }
        
        // Add a way for the login page to close the modal when login is successful
        window.onmessage = function(event) {
            if (event.data === 'loginSuccess') {
                closeModal();
                // Handle successful login (e.g., refresh page, show user info)
            }
        };

        // Add this to the script in main.html
        window.onmessage = function(event) {
            if (event.data === 'loginSuccess') {
                closeModal();
                // Handle successful login (e.g., refresh page, show user info)
            } else if (event.data === 'closeModal') {
                closeModal();
            }
        };

