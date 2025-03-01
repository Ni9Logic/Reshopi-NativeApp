# Building an APK Completely Locally

This guide will help you build an APK file for your React Native Expo project completely locally using Android Studio, without relying on Expo's build servers.

## Prerequisites

1. Node.js and npm installed on your machine
2. Android Studio installed (https://developer.android.com/studio)
3. Android SDK installed and configured
4. Java Development Kit (JDK) 11 or newer

## Steps to Build an APK Locally

### 1. Install Required Packages

```bash
npm install -g expo-cli
npm install
```

### 2. Generate Native Code

Run the following command to generate the native Android project:

```bash
npx expo prebuild -p android
```

This will create an `android` directory in your project with all the necessary native code.

### 3. Open the Project in Android Studio

Open Android Studio and select "Open an existing Android Studio project". Navigate to your project directory and select the `android` folder.

### 4. Configure Signing

1. In Android Studio, go to `Build > Generate Signed Bundle / APK`
2. Select `APK`
3. Create a new keystore or use an existing one
   - To create a new keystore:
     - Fill in the required fields (Key store path, password, key alias, etc.)
     - Remember to save your keystore file and passwords securely
4. Select a destination folder for your APK

### 5. Build the APK

1. Select the build variant (usually `release`)
2. Click `Finish` to build the APK

### 6. Locate the APK

The APK will be generated in the location you specified, typically in:
`android/app/build/outputs/apk/release/app-release.apk`

## Troubleshooting

### Common Issues

1. **Gradle sync failed**: Make sure you have the correct Android SDK installed and configured.

2. **Build fails**: Check the error message in Android Studio. Common issues include:
   - Missing dependencies
   - Incorrect configuration
   - SDK version issues

3. **Signing issues**: Make sure your keystore information is correct.

### Additional Resources

- Android Studio documentation: https://developer.android.com/studio/publish/app-signing
- React Native documentation: https://reactnative.dev/docs/signed-apk-android

## Note

This approach gives you complete control over the build process but requires more setup and knowledge of Android development. If you encounter issues, consider using EAS Build or the classic build system as described in the other guides. 