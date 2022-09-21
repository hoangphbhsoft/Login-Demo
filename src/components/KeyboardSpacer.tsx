import { Dimensions, Keyboard, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

const KeyboardSpacer = () => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", e => {
      setKeyboardSpace(Dimensions.get("window").height - e.endCoordinates.screenY);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", e => {
      setKeyboardSpace(0);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return <View style={{ height: keyboardSpace }} />;
};

export default KeyboardSpacer;
