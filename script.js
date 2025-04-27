        function generateId() {
            const selectedType = document.getElementById('idType').value;
            let prefix = '';
            let randomString = '';

            if (selectedType === 'id1') {
                prefix = ''; // Prefix for 'Current' type ID
                randomString = Math.random().toString(36).substring(2, 15).toUpperCase(); // Simple alphanumeric ID
            } else if (selectedType === 'id2') {
                prefix = ''; // Prefix for 'Flower' type ID
                randomString = generateFlowerRandomString(); // Generate Flower-style ID with symbols
            }

            const uniqueId = prefix + randomString; // Combine the prefix with the random string

            document.getElementById('output').textContent = "Generated ID: " + uniqueId;
        }

        // Function to generate Flower-style random ID with uppercase letters, digits, and symbols
        function generateFlowerRandomString() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-!@$%^&*()_+=<>?';
            let result = '';
            for (let i = 0; i < 20; i++) {
                const randomIndex = Math.floor(Math.random() * chars.length);
                result += chars.charAt(randomIndex);
            }
            return result;
        }
