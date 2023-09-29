import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadString, getBlob } from "firebase/storage";
import { onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

export function createOrUpdateDoc(arrFirestorePath, dataToUpload){

  try{
    setDoc(doc(db, ...arrFirestorePath), dataToUpload)
  } catch (e){
    alert(e.message)
  }
}


export function logOut(){
  signOut(auth).then(() => {
  }).catch((error) => {
  });
}
const metadata = {
  contentType: 'image/jpeg, image/png'
};

export function uploadImageToStorage(pathStr,readImg){
  const imageRef = ref(storage, pathStr)

  uploadString(imageRef, readImg, 'data_url').then((snapshot) => {
    console.log('Uploaded a data url string!');
  });
  
}

export async function login({email, password}){
  let userCredential;
  try{
    userCredential = await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    alert(e)
  }
    
  return userCredential;
}

export async function createUser({email, password}){

  let userCredential;
  try {
    userCredential= await createUserWithEmailAndPassword(auth, email, password)
  } catch (e){
    alert(e);
  }
   return userCredential; 

}

const firebaseConfig = {
  apiKey: "AIzaSyDWPhNAkmQTqLAKfw5bpcbKAtzLL22xeD4",
  authDomain: "opensea-clone-2e200.firebaseapp.com",
  projectId: "opensea-clone-2e200",
  storageBucket: "opensea-clone-2e200.appspot.com",
  messagingSenderId: "780616897826",
  appId: "1:780616897826:web:38d965cc44b8662ec0417b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export const auth = getAuth();

export async function getDataFromStorage(arrPath) {
  const storageRef = ref(storage, arrPath);

  try {
    const srcValue = await getDownloadURL(storageRef);
    return srcValue
  } catch(err){
    console.log("No such url!")
  }

}

export async function getDataFromFirestore(arrPath) {
  const docRef = doc(db, ...arrPath);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }

}

export async function getFirestoreDocs(arrPath) {
  const docsCollection = collection(db, ...arrPath);
  const allDocs = await getDocs(docsCollection);
  return allDocs;
}
