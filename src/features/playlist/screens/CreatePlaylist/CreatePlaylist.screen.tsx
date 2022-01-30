/* eslint-disable react-native/no-inline-styles */
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import SafeAreaComp from "../../../../components/SafeArea/SafeAreaComp";
import { styles } from "../../styles/createPlaylist.styles";
import RNPickerSelect from "react-native-picker-select";
import { GenreContext } from "../../../../services/genre/genre.service";
import { PlaylistContext } from "../../../../services/playlists/playlist.service";
import { Ionicons } from "@expo/vector-icons";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { homeParamList } from "../../../../navigation/@types/navigation";
import { EvilIcons } from "@expo/vector-icons";

interface ISelectedGenre {
  name: string;
  picture: string;
  id: string;
}

type Props = any;

const CreatePlaylistScreen: React.FC<Props> = ({ navigation }) => {
  const isAndroid = Platform.OS === "android";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<ISelectedGenre | null>(
    null
  );
  const [type, setType] = useState("");

  const { isLoading, genres } = useContext(GenreContext);
  const { createPlayList, isProcessing } = useContext(PlaylistContext);

  //   console.log(isProcessing);
  const isValid = title && description && selectedGenre && type;
  //   console.log("genres", genres);

  const handleSubmit = () => {
    if (isValid) {
      createPlayList({
        name: title,
        genreId: selectedGenre?.id,
        isPublic: type === "public",
        imgURL: selectedGenre?.picture,
        navigation,
      });

      //   navigation.goBack();
    }
  };

  return (
    <SafeAreaComp showSearchBar={false}>
      <View style={styles.root}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={18} color="#FFFFFF" />
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <EvilIcons name="navicon" size={34} color="#2DCEEF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Create New Playlist</Text>
        <KeyboardAvoidingView behavior={!isAndroid ? "padding" : "height"}>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Title</Text>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              placeholder="playlist title"
              placeholderTextColor="#b6adad"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              placeholder="write a description"
              placeholderTextColor="#b6adad"
              multiline={true}
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Genre</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedGenre(value)}
              placeholder={{}}
              items={
                isLoading
                  ? [{ label: "loading genres...", value: "" }]
                  : !genres
                  ? [{ label: "", value: "" }]
                  : genres.map((genre) => {
                      return {
                        label: genre.name,
                        value: {
                          name: genre.name,
                          picture: genre.picture,
                          id: genre._id,
                        },
                      };
                    })
              }
            >
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                placeholder="Select Genre"
                placeholderTextColor="#b6adad"
                multiline={true}
                value={selectedGenre ? selectedGenre.name : ""}
              />
            </RNPickerSelect>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Playlist Type</Text>
            <RNPickerSelect
              onValueChange={(value) => setType(value)}
              placeholder={{}}
              items={[
                { label: "public", value: "public" },
                { label: "private", value: "private" },
              ]}
            >
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                placeholder="Select Playlist type"
                placeholderTextColor="#b6adad"
                multiline={true}
                value={type}
              />
            </RNPickerSelect>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: isValid ? "#2DCEEF" : "transparent",
              borderColor: isValid ? "#2DCEEF" : "#ffffff",
            }}
            activeOpacity={0.5}
            onPress={handleSubmit}
          >
            {isProcessing ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Create</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaComp>
  );
};

export default CreatePlaylistScreen;
