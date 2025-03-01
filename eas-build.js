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

// Make sure we have the required EAS configuration
if (!appJson.expo.extra || !appJson.expo.extra.eas || !appJson.expo.extra.eas.projectId) {
  console.error('Error: Missing EAS projectId in app.json');
  process.exit(1);
}

console.log('Starting EAS build process...');
console.log('This will build your APK using EAS Build.');
console.log('ProjectId:', appJson.expo.extra.eas.projectId);

// Run the EAS build command
const buildCommand = 'npx eas build -p android --profile preview';

exec(buildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  
  console.log(`stdout: ${stdout}`);
  console.log('EAS build process initiated.');
  console.log('You can check the build status on the Expo website.');
}); 