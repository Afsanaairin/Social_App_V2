import { getStorage, ref, uploadBytes } from "firebase/storage";
import uuid from "react-native-uuid";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { InputField, InputWrapper } from "../utils/AddPostStyle";
import { set } from "react-native-reanimated";
import { windowHeight, windowWidth } from "../utils/Dimensions";
// import { storage, ref } from "../../firebase";

const PostScreen = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(Object.keys(image));

      // console.log(image);
    }
  };
  if (hasGalleryPermission === false) {
    return <Text> No acces to Int</Text>;
  }

  const submitImage = async () => {
    console.log("********************************");
    console.log(image);
    console.log(Object.keys(image));

    console.log("********************************");
    let newName = uuid.v4();
    console.log(newName);
    const storage = getStorage();
    const storageRef = ref(storage, newName);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      alert("Image uploaded to firebase storage");
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.postbutton} onPress={submitImage}>
        <Text numberOfLines={2}>Post</Text>
      </TouchableOpacity>
      <TextInput style={styles.txtbuttonStyle} placeholder="type here" />

      <TouchableOpacity style={styles.circle} onPress={pickImage}>
        <AntDesign name="plus" size={44} color="black" />
      </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 300, height: 200, marginBottom: 15 }}
        />
      )}
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#f52d56",
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  txtbuttonStyle: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  postbutton: {
    marginTop: 10,
    width: 70,
    height: windowHeight / 15,
    backgroundColor: "#f52d56",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
});
