import {
  ActivityIndicator,
  Dimensions,
  NativeSyntheticEvent,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Svg, { G, Rect, Path, Defs, Circle, LinearGradient, Stop, ClipPath } from "react-native-svg";
import { RootStackParamList } from "../config/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  fakeLogin,
  selectUsername,
  selectPassword,
  selectStatus,
  selectIsAuthenticated,
  updatePassword,
  updateUsername,
} from "../redux/slices/authSlice";
import KeyboardSpacer from "../components/KeyboardSpacer";

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Login">>();

  const username = useAppSelector(selectUsername);
  const password = useAppSelector(selectPassword);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const onUsernameChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(updateUsername(e.nativeEvent.text));
  }, []);

  const onPasswordChange = useCallback((e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(updatePassword(e.nativeEvent.text));
  }, []);

  const onLoginPress = useCallback(async () => {
    dispatch(fakeLogin({ username, password }));
  }, [username, password]);

  useEffect(() => {
    if (isAuthenticated) navigation.replace("Home", {});
  }, [isAuthenticated, navigation]);

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center", width: "100%", paddingVertical: 20 }}>
          <Svg width={51} height={51} viewBox="0 0 51 51" fill="none">
            <Circle cx={25.175} cy={25.175} r={25.175} fill="#343542" />
            <G clipPath="url(#clip0_4_86)">
              <Path
                d="M25.175 9.44c8.69 0 15.734 7.045 15.734 15.735s-7.044 15.734-15.734 15.734c-8.69 0-15.734-7.044-15.734-15.734 0-3.957 1.473-7.66 4.004-10.49h-.857a2.098 2.098 0 01-2.096-1.993l-.002-.104c0-1.124.883-2.041 1.993-2.096l.104-.002h6.294c1.124 0 2.041.883 2.096 1.993l.002.104v6.294a2.098 2.098 0 01-4.193.105l-.003-.105v-1.627a11.513 11.513 0 00-3.147 7.921c0 6.373 5.166 11.539 11.539 11.539 6.372 0 11.539-5.166 11.539-11.539 0-6.373-5.166-11.539-11.539-11.539a2.098 2.098 0 110-4.195z"
                fill="url(#paint0_linear_4_86)"
              />
              <Path d="M25.175 29.37a4.196 4.196 0 100-8.39 4.196 4.196 0 000 8.39z" fill="url(#paint1_linear_4_86)" />
            </G>
            <Defs>
              <LinearGradient
                id="paint0_linear_4_86"
                x1={40.9094}
                y1={25.175}
                x2={9.44061}
                y2={20.3861}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#5DF4CA" />
                <Stop offset={1} stopColor="#A9ECFD" />
              </LinearGradient>
              <LinearGradient
                id="paint1_linear_4_86"
                x1={25.175}
                y1={20.9792}
                x2={25.175}
                y2={29.3709}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#57C1EA" />
                <Stop offset={1} stopColor="#60AADA" />
              </LinearGradient>
              <ClipPath id="clip0_4_86">
                <Path fill="#fff" transform="translate(9.44 9.44)" d="M0 0H31.4688V31.4688H0z" />
              </ClipPath>
            </Defs>
          </Svg>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "900" }}>UpNow</Text>
            <Text style={{ color: "#2D8CFF" }}>Digital Hypotherapy</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#2D8CFF", width: windowWidth, height: 1 }} />
        <View style={{ backgroundColor: "#FFFFFF1a", width: windowWidth, height: 5, marginBottom: 20 }} />
        <Text
          style={{
            color: "#fff",
            textAlign: "left",
            width: "100%",
            marginBottom: 20,
            fontWeight: "900",
            fontSize: 24,
          }}>
          Log In
        </Text>
        <View style={styles.textInputContainer}>
          <View style={styles.textInputIcon}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4.633 8.053c-1.186-.824-.582-2.63.879-2.63h12.796c1.46 0 2.065 1.806.88 2.63l-6.244 4.338c-.618.43-1.45.43-2.068 0L4.633 8.053z"
                fill="#A4BCC1"
              />
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.945 9.84v6.832c0 .944.792 1.709 1.77 1.709h12.39c.977 0 1.77-.765 1.77-1.709V9.84l-6.626 4.57c-.792.58-1.887.58-2.678 0L3.945 9.84z"
                fill="#A4BCC1"
              />
            </Svg>
          </View>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            placeholder="Username"
            placeholderTextColor="#828187"
            onChange={onUsernameChange}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.textInputIcon}>
            <Svg width={13} height={15} viewBox="0 0 13 15" fill="none">
              <Path
                d="M6.335 15H1.08c-.646 0-1.066-.383-1.077-.99-.007-.362-.002-.724-.002-1.086V7.122c-.006-.22.05-.436.164-.629a.88.88 0 01.875-.443c.141.011.177-.036.177-.165 0-.49-.015-.982.02-1.474.093-1.264.64-2.326 1.641-3.184C3.984.284 5.31-.083 6.781.016c2.323.155 4.181 1.722 4.608 3.846.09.445.082.893.08 1.342 0 .225.008.45-.004.674-.008.14.028.185.19.182.541-.01.885.247 1 .74.027.128.04.26.036.391.002 2.22.002 4.438 0 6.657 0 .307-.051.598-.272.845a.879.879 0 01-.69.307c-1.798-.002-3.596-.002-5.394 0zm.012-8.952c.925 0 1.85-.003 2.776.003.155 0 .215-.028.209-.186-.014-.355-.002-.712-.005-1.068a2.837 2.837 0 00-.074-.683c-.395-1.545-2.02-2.457-3.678-2.061a2.99 2.99 0 00-1.481.855 2.65 2.65 0 00-.702 1.484c-.061.497-.009.996-.031 1.494-.006.127.032.166.174.164.937-.005 1.874-.002 2.812-.002zm-1.003 5.515c0 .329-.003.658 0 .987.003.28.2.457.502.456l.92-.005c.425-.001.582-.147.583-.547v-1.792a.348.348 0 01.093-.254c.296-.329.38-.707.252-1.12-.187-.602-.72-.924-1.48-.897-.99.035-1.618 1.082-1.077 1.853.173.246.22.476.209.744-.008.192-.002.383-.002.575z"
                fill="#A4BCC1"
              />
            </Svg>
          </View>
          <TextInput
            style={styles.textInput}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            placeholder="Password"
            placeholderTextColor="#828187"
            onChange={onPasswordChange}
          />
        </View>
        <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 30 }}>
          <Text style={{ color: "#fff" }}>Forget password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onLoginPress}
          disabled={status === "pending"}
          style={{
            backgroundColor: "#FF9B9C",
            borderRadius: windowHeight,
            width: "100%",
            alignItems: "center",
            marginBottom: 30,
            padding: 15,
          }}>
          {status === "pending" && (
            <ActivityIndicator
              size="small"
              color="#000"
              style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
            />
          )}
          <Text style={{ color: status === "pending" ? "transparent" : "#fff", fontSize: 18, fontWeight: "800" }}>
            Log In
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <Text style={{ color: "#fff", fontSize: 15, marginRight: 5 }}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: "700", color: "#FF5889" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
          <View style={{ backgroundColor: "#00000033", height: 1, width: "30%" }} />
          <Text style={{ color: "#fff", fontSize: 15, marginHorizontal: 10 }}>Or Log in with</Text>
          <View style={{ backgroundColor: "#00000033", height: 1, width: "30%" }} />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#3F60B2",
            borderRadius: windowHeight,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginBottom: 20,
            padding: 15,
          }}>
          <Svg width={26} height={28} viewBox="0 0 26 28" fill="none">
            <G filter="url(#filter0_b_4_76)">
              <Rect width={26} height={26.3298} rx={13} transform="matrix(-1 0 0 1 26 0)" fill="#fff" />
            </G>
            <Path
              d="M9 28h3.704v-9.343H15.8l.468-3.634h-3.564v-2.33c0-1.05.29-1.766 1.782-1.766h1.908V7.664a26.924 26.924 0 00-2.768-.141c-2.755 0-4.625 1.702-4.625 4.812v2.688H5.89v3.634h3.11V28z"
              fill="#3F60B2"
            />
            <Defs></Defs>
          </Svg>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "500",
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
            }}>
            Log in with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#131416",
            borderRadius: windowHeight,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: 15,
            marginBottom: 20,
          }}>
          <Svg width={18} height={21} viewBox="0 0 18 21" fill="none">
            <Path
              d="M14.736 20.135c-1.138 1.104-2.394.932-3.59.412-1.273-.532-2.436-.565-3.78 0-1.673.722-2.561.512-3.57-.412-5.69-5.858-4.85-14.781 1.618-15.117 1.568.084 2.666.867 3.59.932 1.373-.279 2.687-1.079 4.157-.974 1.766.143 3.086.84 3.968 2.093-3.632 2.184-2.771 6.971.565 8.315-.668 1.753-1.524 3.485-2.96 4.766l.002-.015zM8.878 4.955C8.708 2.352 10.818.21 13.245 0c.334 3.002-2.73 5.249-4.367 4.955z"
              fill="#fff"
            />
          </Svg>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "500",
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
            }}>
            Log in with Apple
          </Text>
        </TouchableOpacity>
        <KeyboardSpacer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textInputContainer: {
    backgroundColor: "#00000033",
    borderRadius: windowHeight,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  textInputIcon: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    flex: 5,
    paddingVertical: 15,
    paddingRight: 15,
    color: "white",
  },
});
