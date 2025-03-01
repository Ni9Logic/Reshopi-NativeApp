const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the app.json has the correct configuration
const appJsonPath = path.join(__dirname, 'app.json');
const appJson = require(appJsonPath);

// Make sure we have the required Android configuration
if (!appJson.expo.android || !appJson.expo.android.package) {
  console.error('Error: Missing Android package name in app.json');
  process.exit(1);
}

console.log('Starting APK build process...');
console.log('This may take several minutes. Please be patient.');

// Run the expo build command using npx to use the local CLI
const buildCommand = 'npx expo build:android -t apk';

exec(buildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  
  console.log(`stdout: ${stdout}`);
  console.log('Build process completed. Check the Expo website for your APK download link.');
}); 