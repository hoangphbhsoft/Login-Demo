/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import base64 from "base-64";

if (!global.btoa) {
  global.btoa = base64.encode;
}

if (!global.atob) {
  global.atob = base64.decode;
}

AppRegistry.registerComponent(appName, () => App);
