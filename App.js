import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

function DisplayInsets() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Text>Some dummy component to use the hook to give me the insets</Text>
      <Text>
        since to use the hook the component should in a SafeAreaProvider
      </Text>
      <Text>
        The insets are: {insets.bottom} - {insets.top}
      </Text>
    </>
  );
}

export default function App() {
  function handleButtonClicked() {
    Linking.openURL("mailto:yohducci20@gmail.com");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "red" }}>
        <View
          style={{
            backgroundColor: "palegreen",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 50 }}>Title</Text>
          <DisplayInsets />
          <Text style={{ marginTop: "auto", fontSize: 50 }}>Footer</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // return (
  //   <ScrollView>
  //     <View style={styles.container}>
  //       <Image
  //         source={{
  //           uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
  //         }}
  //         style={{ width: "100%", aspectRatio: 16 / 9 }}
  //       />
  //       <Image
  //         source={require("./assets/vadim.png")}
  //         style={{
  //           width: 150,
  //           height: 150,
  //           borderRadius: 150,
  //           borderWidth: 5,
  //           borderColor: "white",
  //           marginTop: -75,
  //         }}
  //       />
  //       <Text style={{ fontSize: 30, fontWeight: "bold " }}>Anthony Muuo</Text>
  //       <Text>Co-Founder of Fanatix Games</Text>

  //       <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
  //         <FontAwesome6 name="github" size={24} color="black" />
  //         <FontAwesome6 name="x-twitter" size={24} color="black" />
  //         <FontAwesome6 name="at" size={24} color="black" />
  //       </View>

  //       <Button title="Contact Me" onPress={() => handleButtonClicked()} />

  //       <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
  //         aliquam sem et tortor consequat id porta nibh. Pellentesque nec nam
  //         aliquam sem. Placerat duis ultricies lacus sed. Non curabitur gravida
  //         arcu ac tortor dignissim convallis aenean. Amet nisl purus in mollis
  //         nunc. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.
  //         Sagittis orci a scelerisque purus semper eget duis at tellus. Sed
  //         libero enim sed faucibus turpis in eu mi bibendum. Duis at consectetur
  //         lorem donec massa sapien faucibus et molestie. At ultrices mi tempus
  //         imperdiet nulla malesuada pellentesque elit eget. Purus sit amet
  //         volutpat consequat mauris nunc congue nisi vitae. Urna condimentum
  //         mattis pellentesque id nibh tortor id. Consequat id porta nibh
  //         venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
  //         Mauris a diam maecenas sed enim ut sem. Volutpat commodo sed egestas
  //         egestas fringilla phasellus. Turpis egestas integer eget aliquet nibh
  //         praesent tristique magna sit. Congue mauris rhoncus aenean vel elit
  //         scelerisque. Tellus integer feugiat scelerisque varius morbi enim.
  //         Consectetur a erat nam at. Bibendum arcu vitae elementum curabitur
  //         vitae nunc. Sit amet consectetur adipiscing elit. Rhoncus mattis
  //         rhoncus urna neque viverra justo. Malesuada pellentesque elit eget
  //         gravida. Vitae nunc sed velit dignissim sodales ut eu sem integer.
  //       </Text>
  //       <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
  //         aliquam sem et tortor consequat id porta nibh. Pellentesque nec nam
  //         aliquam sem. Placerat duis ultricies lacus sed. Non curabitur gravida
  //         arcu ac tortor dignissim convallis aenean. Amet nisl purus in mollis
  //         nunc. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.
  //         Sagittis orci a scelerisque purus semper eget duis at tellus. Sed
  //         libero enim sed faucibus turpis in eu mi bibendum. Duis at consectetur
  //         lorem donec massa sapien faucibus et molestie. At ultrices mi tempus
  //         imperdiet nulla malesuada pellentesque elit eget. Purus sit amet
  //         volutpat consequat mauris nunc congue nisi vitae. Urna condimentum
  //         mattis pellentesque id nibh tortor id. Consequat id porta nibh
  //         venenatis. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
  //         Mauris a diam maecenas sed enim ut sem. Volutpat commodo sed egestas
  //         egestas fringilla phasellus. Turpis egestas integer eget aliquet nibh
  //         praesent tristique magna sit. Congue mauris rhoncus aenean vel elit
  //         scelerisque. Tellus integer feugiat scelerisque varius morbi enim.
  //         Consectetur a erat nam at. Bibendum arcu vitae elementum curabitur
  //         vitae nunc. Sit amet consectetur adipiscing elit. Rhoncus mattis
  //         rhoncus urna neque viverra justo. Malesuada pellentesque elit eget
  //         gravida. Vitae nunc sed velit dignissim sodales ut eu sem integer.
  //       </Text>

  //       <StatusBar style="light" />
  //     </View>
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
