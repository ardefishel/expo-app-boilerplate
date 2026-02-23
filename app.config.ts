import { ConfigContext, ExpoConfig } from "expo/config";
import { AppConfig } from "./src/config/app.ts";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: AppConfig.name,
  slug: AppConfig.slug,
  version: AppConfig.version,
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: AppConfig.scheme,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: AppConfig.ios.bundleIdentifier,
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./src/assets/images/android-icon-foreground.png",
      backgroundImage: "./src/assets/images/android-icon-background.png",
      monochromeImage: "./src/assets/images/android-icon-monochrome.png",
    },
    edgeToEdgeEnabled: true,
    package: AppConfig.android.package,
  },
  web: {
    output: "static",
    favicon: "./src/assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./src/assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
});
