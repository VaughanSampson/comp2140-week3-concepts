// EXAMPLE GENERATED BY CHATGPT

// Import the fs module
import fs from 'fs/promises';
// Using import instead of require given ES6 module (look it up if confused!)

// File path
const filePath = 'data.txt';

// Function to save data to a file
async function saveData(data) {
  try {
    await fs.writeFile(filePath, data, 'utf8');
    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Function to load data from a file
async function loadData() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('Data loaded:', data);
  } catch (error) {
    console.error('Error loading data:', error);
  } 
}

// Example usage
(async () => {
  // Load data from the file
  await loadData();
  // Save data to the file
  await saveData('Hello, world!');

})();