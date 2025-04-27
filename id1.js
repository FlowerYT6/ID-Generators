function generateId() {
const selectedType = document.getElementById('idType').value;
let prefix = '';
let randomString = '';
if (selectedType === 'id1') {
prefix = ''; // Prefix for 'Current' type ID
randomString = Math.random().toString(36).substring(2, 15).toUpperCase()
