import { Button, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { logout, selectIsAuthenticated, selectUsername } from "../redux/slices/authSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config/types";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  const username = useAppSelector(selectUsername);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  const onLogoutPress = useCallback(() => {
    dispatch(logout());
  }, [dispatch, logout]);

  useEffect(() => {
    if (!isAuthenticated) navigation.replace("Login", {});
  }, [isAuthenticated, navigation]);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text>Hello, {username}</Text>
      <Button title="Logout" onPress={onLogoutPress} color="#000" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
