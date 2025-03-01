# Building an APK with EAS Build

This guide will help you build an APK file for your React Native Expo project using EAS Build, which is the recommended approach for building Expo apps.

## Prerequisites

1. An Expo account (create one at https://expo.dev/signup if you don't have one)
2. Node.js and npm installed on your machine
3. EAS CLI installed: `npm install -g eas-cli`

## Steps to Build an APK

### 1. Login to EAS

First, make sure you're logged in to your Expo account:

```bash
eas login
```

### 2. Configure your project

Your project already has an `eas.json` file with the following configuration:

```json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

This configuration includes a `preview` profile that builds an APK file.

### 3. Build the APK

Run the following command to build an APK using the preview profile:

```bash
eas build -p android --profile preview
```

### 4. Wait for the Build to Complete

The build process will take several minutes. EAS will build your app on their servers and provide you with a URL to download the APK when it's ready.

### 5. Download the APK

Once the build is complete, you'll receive a URL where you can download the APK file. You can also find your builds at https://expo.dev/builds after logging in.

## Troubleshooting

### Common Issues

1. **Missing Android package name**: Make sure your app.json has the correct Android package name configuration.

2. **Build fails**: Check the error message. Common issues include:
   - Missing assets
   - Configuration errors in app.json
   - Dependencies issues

3. **EAS CLI not found**: Make sure you've installed the EAS CLI globally with `npm install -g eas-cli`.

### Getting Help

If you encounter issues, check the EAS documentation at https://docs.expo.dev/build/introduction/ or ask for help on the Expo forums.

## Building Locally (Advanced)

If you need to build the APK locally without using Expo's servers, you'll need to:

1. Install Android Studio and the Android SDK
2. Run `npx expo prebuild` to generate native code
3. Open the Android project in Android Studio
4. Build the APK using Android Studio

This approach is more complex and requires more setup, but gives you complete control over the build process. 