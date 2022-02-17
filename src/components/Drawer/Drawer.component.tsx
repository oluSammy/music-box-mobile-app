import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SafeAreaComp from "../SafeArea/SafeAreaComp";
// import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { styles } from "./drawer.styles";
import {
  Ionicons,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";

import { AuthContext } from "../../services/authentication/auth.service";

import { Avatar } from "../Avatar/Avatar.component";
import { AntDesign } from "@expo/vector-icons";

// import { Octicons } from "@expo/vector-icons";

type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

const CustomDrawer: React.FC<Props> = ({ navigation }) => {
  const { setUser, user } = useContext(AuthContext);

  return (
    <SafeAreaComp showSearchBar={false}>
      <View style={styles.root}>
        <Avatar />
        {user && (
          <Text
            style={styles.drawerNameText}
          >{`${user.data.data.firstName} ${user.data.data.lastName}`}</Text>
        )}

        {user && (
          <Text style={styles.drawerEmailText}>{user.data.data.email}</Text>
        )}

        <View style={styles.line} />
        <View style={styles.navList}>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <Feather
              name="music"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />
            <Text style={styles.navItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Library")}
          >
            <Ionicons
              name="library-outline"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />

            <Text style={styles.navItemText}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign
              name="search1"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />

            <Text style={styles.navItemText}>Search</Text>
          </TouchableOpacity>
          {/* <AntDesign name="search1" size={size} color={color} /> */}
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Browse")}
          >
            <Entypo
              name="folder-music"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />
            <Text style={styles.navItemText}>Browse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CreatePlaylist")}
          >
            <MaterialCommunityIcons
              name="playlist-music-outline"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />
            <Text style={styles.navItemText}>Create Playlist</Text>
            {/* <FontAwesome name="dot-circle-o" size={18} color="#2DCEEF" /> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <EvilIcons
              name="user"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />
            <Text style={styles.navItemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            activeOpacity={0.8}
            onPress={() => setUser(null)}
          >
            <SimpleLineIcons
              name="logout"
              size={24}
              color="#2DCEEF"
              style={styles.navIcon}
            />

            <Text style={styles.navItemText}>Log Out</Text>
            {/* <FontAwesome name="dot-circle-o" size={18} color="#2DCEEF" /> */}
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.copyright}>&copy; 2022</Text> */}
      </View>
    </SafeAreaComp>
  );
};

export default CustomDrawer;
