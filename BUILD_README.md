# Building APK for Blip Market Place

This document provides an overview of the different methods available for building an APK for your React Native Expo project.

## Available Build Methods

### 1. Classic Build System (Expo's servers)

This method uses Expo's classic build system to build your APK on Expo's servers.

```bash
npm run build:apk
```

For detailed instructions, see [BUILD_APK_GUIDE.md](./BUILD_APK_GUIDE.md).

### 2. EAS Build (Recommended)

This method uses Expo's newer EAS Build system, which offers more flexibility and control.

```bash
eas build -p android --profile preview
```

For detailed instructions, see [EAS_BUILD_GUIDE.md](./EAS_BUILD_GUIDE.md).

### 3. Local Build with Android Studio

This method gives you complete control by generating native code and building locally with Android Studio.

```bash
npm run build:local
```

For detailed instructions, see [LOCAL_BUILD_GUIDE.md](./LOCAL_BUILD_GUIDE.md).

## Which Method Should I Choose?

- **EAS Build** is recommended for most users as it provides a good balance of ease of use and flexibility.
- **Classic Build** is simpler but has fewer options and is being phased out by Expo.
- **Local Build** gives you complete control but requires more setup and knowledge of Android development.

## Prerequisites for All Methods

1. An Expo account (for methods 1 and 2)
2. Node.js and npm installed
3. Android Studio and SDK (for method 3 only)

## Getting Help

If you encounter issues with any of the build methods, check the respective guide for troubleshooting tips or refer to the [Expo documentation](https://docs.expo.dev/). 