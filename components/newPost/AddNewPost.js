import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PostUploader from "./PostUploader";

const AddNewPost = ({ navigation }) => (
  <View styles={styles.container}>
    <Header navigation={navigation} />
    <PostUploader navigation={navigation} />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../assets/newPost/back.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 18,
    
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});

export default AddNewPost;
