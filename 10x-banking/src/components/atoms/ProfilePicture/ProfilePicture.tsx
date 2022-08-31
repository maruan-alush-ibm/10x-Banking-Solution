import { RoundedImage } from "./ProfilePicture.styles";

interface Props {
  url: string;
}
const ProfilePicture = ({ url }: Props) => {
  return <RoundedImage src={url} alt="Profile Picture" />;
};

export default ProfilePicture;
