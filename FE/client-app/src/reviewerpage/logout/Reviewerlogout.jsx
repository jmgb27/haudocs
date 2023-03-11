import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Reviewerlogout = async () => {
  try {
    await signOut(auth);
    window.location.href = "/Signin"; // Redirect to login page
  } catch (error) {
    console.error(error);
  }
};

export default Reviewerlogout;
