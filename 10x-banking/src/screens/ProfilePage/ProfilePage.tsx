import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "../../queries/queries";
import ProfilePicture from "../../components/atoms/ProfilePicture/ProfilePicture";
import { ItemData } from "../../common/interfaces";
import Details from "../../components/molecules/Details/Details";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import * as S from "./ProfilePage.styles";
import { deleteUser } from "../../queries/queries";

import { useEffect, useState } from "react";
export const ProfilePage = () => {
  const [user, setUser] = useState<ItemData>();
  const params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user: ItemData = await getUser(params.id);

      setUser(user);
    };

    fetchData();
  }, [params]);

  if (!user) return <div>Loading</div>;

  return (
    <S.PageWrapper>
      <S.DetailsGroup>
        <ProfilePicture url={user.avatar} />
        <Details
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
        />
      </S.DetailsGroup>

      <S.ButtonGroup>
        <Button
          data-cy="edit-button"
          color="secondary"
          size="large"
          variant="contained"
          endIcon={<EditIcon />}
          onClick={() => {
            return navigate(`/edit/${params.id}`);
          }}
        >
          Edit
        </Button>
        <Button
          data-cy="delete-button"
          color="error"
          endIcon={<DeleteIcon />}
          size="large"
          variant="contained"
          onClick={() => {
            deleteUser(params.id);
            return navigate("/", { state: "success" });
          }}
        >
          Delete
        </Button>
      </S.ButtonGroup>
    </S.PageWrapper>
  );
};
