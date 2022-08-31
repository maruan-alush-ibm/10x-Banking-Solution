import { useParams } from "react-router-dom";
import { getUser } from "../../queries/queries";
import ProfilePicture from "../../components/atoms/ProfilePicture/ProfilePicture";
import { ItemData } from "../../common/interfaces";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import * as S from "./EditPage.styles";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { editUserSchema } from "../../utils/schema";
import { updateUser } from "../../queries/queries";
import { useNavigate } from "react-router-dom";
import {
  StyledError,
  NamesEdit,
} from "../../components/atoms/ErrorText/ErrorText.styles";

const EditPage = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState<ItemData>();
  const params = useParams();

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
      <Formik
        initialValues={{
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        }}
        validationSchema={editUserSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          await updateUser(user.id, values)
            .then(() => {
              resetForm();
              return navigate("/", { state: "success" });
            })
            .catch(() => {
              resetForm();
              return navigate("/", { state: "failure" });
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <ProfilePicture url={user.avatar} />

            <S.DetailsGroup>
              <NamesEdit type="string" name="first_name" />
              <StyledError name="first_name" component="div" />

              <NamesEdit type="string" name="last_name" />
              <StyledError name="last_name" component="div" />

              <NamesEdit type="email" name="email" />
              <StyledError name="email" component="div" />
            </S.DetailsGroup>

            <S.ButtonContainer>
              <Button
                data-cy="submit-button"
                color="success"
                size="medium"
                variant="contained"
                endIcon={<EditIcon />}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </S.ButtonContainer>
          </Form>
        )}
      </Formik>
    </S.PageWrapper>
  );
};

export default EditPage;
