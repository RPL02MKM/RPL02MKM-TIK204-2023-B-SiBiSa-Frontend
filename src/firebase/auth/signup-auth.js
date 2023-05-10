import firebase_app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signupAuth(
  email,
  password,
  passwordConfirm,
  username
) {
  let result = null,
    error = null;

  if (password !== passwordConfirm) {
    error = new Error("Password and password confirmation do not match");
    return { result, error };
  }

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, { displayName: username });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
