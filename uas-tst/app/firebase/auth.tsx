import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config";

const auth = getAuth(app);

const create_user = async (email: string, password: string) => {
    const userinfo = await createUserWithEmailAndPassword(auth, email, password);
    return userinfo;
}

const sign_in = async (email: string, password: string) => {
    const success = signInWithEmailAndPassword(auth, email, password);
    return success;
}

const sign_out = async () => {
    await signOut(auth);
}

const get_user = () => {
    return auth.currentUser;
}

export { auth, create_user, sign_in, sign_out, get_user };