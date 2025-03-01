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

console.log('Starting local build preparation...');
console.log('This will generate the native Android project files.');

// Run the expo prebuild command
const prebuildCommand = 'npx expo prebuild -p android';

exec(prebuildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  
  console.log(`stdout: ${stdout}`);
  console.log('Native project generation completed.');
  console.log('\nNext steps:');
  console.log('1. Open the android folder in Android Studio');
  console.log('2. Go to Build > Generate Signed Bundle / APK');
  console.log('3. Follow the prompts to create a signed APK');
  console.log('\nSee LOCAL_BUILD_GUIDE.md for detailed instructions.');
}); 