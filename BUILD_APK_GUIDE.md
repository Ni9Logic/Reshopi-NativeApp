# Building an APK for Blip Market Place

This guide will help you build an APK file for your React Native Expo project using the classic build system.

## Prerequisites

1. An Expo account (create one at https://expo.dev/signup if you don't have one)
2. Node.js and npm installed on your machine
3. The Expo CLI installed locally in your project

## Steps to Build an APK

### 1. Login to Expo

First, make sure you're logged in to your Expo account:

```bash
npx expo login
```

### 2. Build the APK

You can build the APK in two ways:

#### Option 1: Using the build script

Run the build script we've created:

```bash
npm run build:apk
```

#### Option 2: Running the build command directly

```bash
npx expo build:android -t apk
```

### 3. Wait for the Build to Complete

The build process will take several minutes. Expo will build your app on their servers and provide you with a URL to download the APK when it's ready.

### 4. Download the APK

Once the build is complete, you'll receive a URL where you can download the APK file. You can also find your builds at https://expo.dev/builds after logging in.

## Troubleshooting

### Common Issues

1. **Missing Android package name**: Make sure your app.json has the correct Android package name configuration.

2. **Build fails**: Check the error message. Common issues include:
   - Missing assets
   - Configuration errors in app.json
   - Dependencies issues

3. **Expo CLI not found**: Make sure you're using the local Expo CLI with `npx expo` instead of the global `expo-cli`.

### Getting Help

If you encounter issues, check the Expo documentation at https://docs.expo.dev/build/setup/ or ask for help on the Expo forums.

## Alternative: Using EAS Build

If you prefer a more modern approach, consider using EAS Build instead of the classic build system. EAS Build offers more flexibility and control over the build process.

To learn more about EAS Build, visit: https://docs.expo.dev/build/introduction/ 