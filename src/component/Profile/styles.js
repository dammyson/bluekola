const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const primary = '#01cca1';

export default {
  headercontainer: {
 
  },
  contentcontainer: {
    flex: 2,
  },
  profileInfoContainer: {
    backgroundColor: 'white',
    paddingTop: 25,
    paddingBottom: 25
  },
  profileUser: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 5
  },
  profileUserInfo: {
    alignSelf: "center",
    opacity: 0.8,
    fontWeight: "bold",
    color: "#FFF"
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  
  },
  profileInfo: {
    alignSelf: "center",
    paddingTop: 5,
    paddingBottom: 10
  },
  linkTabs: {
    backgroundColor: "#fff"
  },
  linkTabs_header: {
    padding: 15,
    alignSelf: "center"
  },
  linkTabs_tabCounts: {
    fontSize: 22,
    fontWeight: "bold",
    color: primary,
    alignSelf: "center",
    paddingBottom: Platform.OS === "android" ? 3 : 0
  },
  linkTabs_tabName: {
    color: "#444",
    fontWeight: "bold",
    fontSize: deviceWidth < 330 ? 13 : 15
  },
  newsImage: {
    width: 100,
    height: 120
  },
  
};
