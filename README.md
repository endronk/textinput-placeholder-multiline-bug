## React Native TextInput Bug

### Description

A bug with `TextInput` when `multiline` is `true` and the `placeholder` is set after certain timeout.

This bug only happens on iOS.

### React Native Version

```
System:
    OS: macOS 11.0.1
    CPU: (8) x64 VirtualApple @ 2.50GHz processor
    Memory: 65.97 MB / 8.00 GB
    Shell: 5.8 - /bin/zsh
  Binaries:
    Node: 14.16.0 - ~/.nvm/versions/node/v14.16.0/bin/node
    Yarn: 1.22.10 - /usr/local/bin/yarn
    npm: 6.14.11 - ~/.nvm/versions/node/v14.16.0/bin/npm
    Watchman: 4.9.0 - /usr/local/bin/watchman
  Managers:
    CocoaPods: 1.10.1 - /usr/local/bin/pod
  SDKs:
    iOS SDK:
      Platforms: iOS 14.4, DriverKit 20.2, macOS 11.1, tvOS 14.3, watchOS 7.2
    Android SDK:
      API Levels: 26, 28, 29, 30
      Build Tools: 28.0.3, 29.0.2, 29.0.3, 30.0.3
      Android NDK: Not Found
  IDEs:
    Android Studio: 4.1 AI-201.8743.12.41.7042882
    Xcode: 12.4/12D4e - /usr/bin/xcodebuild
  Languages:
    Java: 1.8.0_242-release - /usr/bin/javac
  npmPackages:
    @react-native-community/cli: Not Found
    react: 17.0.1 => 17.0.1
    react-native: 0.64.1 => 0.64.1
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
```

### Steps To Reproduce

1. Create a `TextInput`, then set the `multiline` props to `true` and leave the `placeholder` value empty.
2. Set a timeout to run a function that will set the `placeholder` value to a certain text.
3. On time out, the placeholder will remain empty.
