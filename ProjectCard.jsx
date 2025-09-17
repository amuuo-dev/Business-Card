import { View, Image, Text, StyleSheet } from "react-native";

const ProjectCard = ({ name, image }) => {
  return (
    <View>
      <Image source={image} style={styles.imageCard} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: { height: 150, aspectRatio: 16 / 9, borderRadius: 10 },
  text: {
    fontSize: 20,
    color: "dimegray",
    fontWeight: "semibold",
    marginTop: 10,
  },
});

export default ProjectCard;
