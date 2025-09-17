import { StatusBar } from "expo-status-bar";
import ProjectCard from "./ProjectCard";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function App() {
  function handleButtonClicked() {
    Linking.openURL("mailto:yohducci20@gmail.com");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/vadim.png")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold " }}>
              Anthony Muuo
            </Text>
            <Text>Co-Founder of Fanatix Games</Text>

            <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
              <FontAwesome6 name="github" size={24} color="black" />
              <FontAwesome6 name="x-twitter" size={24} color="black" />
              <FontAwesome6 name="at" size={24} color="black" />
            </View>

            <Button title="Contact Me" onPress={() => handleButtonClicked()} />

            <Text
              style={{
                padding: 10,
                fontSize: 16,
                lineHeight: 20,
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 18 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Cards"
                image={require("./assets/projects/project1.jpeg")}
              />
              <ProjectCard
                name="Trello"
                image={require("./assets/projects/project2.jpeg")}
              />
              <ProjectCard
                name="Flappy Birds"
                image={require("./assets/projects/project3.jpeg")}
              />
              <ProjectCard
                name="To-Do App"
                image={require("./assets/projects/project4.jpeg")}
              />
            </ScrollView>

            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
