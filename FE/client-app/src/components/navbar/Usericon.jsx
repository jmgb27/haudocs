import React from "react";
import Navbar from "./Navbar";

const Usericon = () => {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    // fetch the image URL and update the state
    const storageRef = ref(storage, "images/profile_picture.jpg");
    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Navbar imageUrlProp={imageUrl} />
    </div>
  );
};

export default Usericon;
