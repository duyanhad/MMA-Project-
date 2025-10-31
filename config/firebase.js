import { initializeApp, getApps } from "firebase/app"
import { getDatabase } from "firebase/database"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getStorage } from "firebase/storage"
import { Platform } from "react-native";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEUEGAypTExFYqOMSVP04CwmMmHqaV5jI",
  authDomain: "thogantoi.firebaseapp.com",
  databaseURL: "https://thogantoi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thogantoi",
  storageBucket: "thogantoi.firebasestorage.app",
  messagingSenderId: "2014302529",
  appId: "1:2014302529:web:bdbc78c8b1142ffe2bd1c0",
  measurementId: "G-R2HR9YPKC2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };
