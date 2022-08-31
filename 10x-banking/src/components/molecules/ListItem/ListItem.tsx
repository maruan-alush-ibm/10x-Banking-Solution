import * as S from "./ListItem.styles";
import ProfilePicture from "../../atoms/ProfilePicture/ProfilePicture";
import { ListItemData } from "../../../common/interfaces";
import Details from "../Details/Details";

const ListItem = ({ user }: ListItemData) => {
  return (
    <S.Item to={`/profile/${user.id}`}>
      <S.AvatarParent>
        <ProfilePicture url={user.avatar} />
      </S.AvatarParent>
      <Details
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
      />
    </S.Item>
  );
};

export default ListItem;
