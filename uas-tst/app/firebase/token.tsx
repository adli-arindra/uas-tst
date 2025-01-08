import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs, where } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app); // Initialize Firestore

// Helper function to generate a random 64-base token (8 characters long)
const generateToken = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let token = '';
  for (let i = 0; i < 32; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

// Function to get the token from Firestore or generate and upload if it doesn't exist
const getTokenByEmail = async (email: string): Promise<string> => {
  const docRef = doc(db, "tokens", email); // Reference to the Firestore document
  const docSnap = await getDoc(docRef); // Get the document snapshot

  if (docSnap.exists()) {
    // If the document exists, return the existing token
    return docSnap.data().token;
  } else {
    // If the document doesn't exist, generate a new token and upload it to Firestore
    const newToken = generateToken();
    await setDoc(docRef, {
      email: email,
      token: newToken,
    });
    return newToken;
  }
};

const validateToken = async (token: string): Promise<boolean> => {
  const tokensCollection = collection(db, "tokens");

  const q = query(tokensCollection, where("token", "==", token));

  const querySnapshot = await getDocs(q);

  // If at least one document exists, the token is valid
  return !querySnapshot.empty;
};
export { getTokenByEmail, validateToken };