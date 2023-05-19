import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

import { db } from "../firebase/config";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  where,
  query,
} from "firebase/firestore";

export const updateUser = async (user, name, photo) => {
  var updateName = (updatePhoto = false);
  if (name != user.displayName) {
    updateName = true;
  }

  if (photo != user.photoURL) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", photo, true);
      xhr.send(null);
    });

    const storage = getStorage();
    const imageRef = ref(storage, "ProfilePictures/" + user.uid);
    var url;
    const metadata = {
      contentType: "image/png",
    };
    await uploadBytes(imageRef, blob, metadata)
      .then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then((downloadURL) => {
          url = downloadURL;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    updatePhoto = true;
  }

  if (updatePhoto && updateName)
    updateConfig = { photoURL: url, displayName: name };
  else if (updatePhoto) updateConfig = { photoURL: url };
  else updateConfig = { displayName: name };
  await updateProfile(user, updateConfig);
};

export const changePhoto = async (oldPhoto) => {
  (async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Desculpe, você precisa permitir o acesso à galeria");
      }
    }
  })();

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (result.canceled) {
    return oldPhoto;
  }

  if (!result.canceled) {
    return result.assets[0].uri;
  }
};

export const getUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userStore = await getDoc(userRef);
  const data = userStore.data()
  return {
    bio: data.bio,
    friends: data.friends,
    username: data.username
  }
};

 export const updateBio = async (user, bio) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, { bio: bio }, { merge: true });
};


export const createFireStoreUser = async(user) =>{
  await setDoc(doc(db,"users",user.uid),
  {
    bio: `oi, meu nome é ${user.displayName} :D`,
    username: user.displayName,
    friends: []
  }
  )
}