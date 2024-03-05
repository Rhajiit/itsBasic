import { useContext, useEffect, useState } from "react";
import * as S from "./Profile.style";
import { ProfileContext } from "../../PostMessagePage";

/**
 *
 * @description Profile 컴포넌트는 프로필 이미지를 선택하는 컴포넌트입니다.
 */
const Profile = () => {
  const { profileInput, setProfileInput } = useContext(ProfileContext);
  const [imageList, setImageList] = useState();

  const getProfileImageList = async () => {
    fetch("https://rolling-api.vercel.app/profile-images/")
      .then((res) => res.json())
      .then((data) => {
        setImageList(data?.imageUrls);
        setProfileInput(data?.imageUrls[0]); // default
      });
  };

  useEffect(() => {
    getProfileImageList();
  }, []);

  return (
    <S.Container>
      <img className="selected-profile" src={profileInput} alt="프로필" />
      <div className="select-profile">
        <p className="text font-16-regular">프로필 이미지를 선택해주세요!</p>
        <div className="profile-container">
          {imageList?.slice(1).map((imgUrl, idx) => {
            return (
              <img
                key={idx}
                className="profile"
                src={imgUrl}
                alt="프로필 이미지"
                onClick={() => setProfileInput(imgUrl)}
              />
            );
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default Profile;
