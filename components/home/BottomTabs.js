import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/footerIcons/home.png"),
    inactive: require("../../assets/footerIcons/home-inactive.png"),
  },
  {
    name: "Search",
    active: require("../../assets/footerIcons/search.png"),
    inactive: require("../../assets/footerIcons/search-inactive.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/footerIcons/reels.png"),
    inactive: require("../../assets/footerIcons/reels-inactive.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/footerIcons/profile.jpg"),
    inactive: require("../../assets/footerIcons/profile-inactive.jpg"),
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "black",
    marginTop:20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 30,
    paddingTop: 10,
    backgroundColor:"black"
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: activeTab === "Profile" ? 2 : 0,
  }),
});
