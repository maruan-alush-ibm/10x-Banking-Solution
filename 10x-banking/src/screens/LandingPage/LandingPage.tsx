import { getUsers } from "../../queries/queries";
import ListItem from "../../components/molecules/ListItem/ListItem";
import { ItemData } from "../../common/interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import { newUserSchema } from "../../utils/schema";
import { createUser } from "../../queries/queries";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import * as S from "./LandingPage.styles";
import {
  StyledError,
  NamesEdit,
} from "../../components/atoms/ErrorText/ErrorText.styles";

export const LandingPage = () => {
  const [list, setList] = useState<ItemData[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data: ItemData[] = await getUsers();

      setList(data);
    };

    fetchData();

    if (location.state) {
      //Using state to show notification to user after an action such as edit/delete
      setOpen(true);
      window.history.replaceState({}, document.title);
    }
  }, [location, navigate]);

  if (!list) return <div>Loading</div>;
  return (
    <S.PageWrapper>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        {location.state === "success" ? (
          <Alert severity="success">Your action was successful!</Alert>
        ) : (
          <Alert severity="error">Your action was unsuccessful!</Alert>
        )}
      </Snackbar>

      <S.ListWrapper>
        {list.map((user: ItemData) => {
          return <ListItem key={user.id} user={user} />;
        })}
      </S.ListWrapper>

      <S.UserFormWrapper>
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
          }}
          validationSchema={newUserSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await createUser(values)
              .then(() => {
                resetForm();
                setSubmitting(false);
                return navigate("/", { state: "success" });
              })
              .catch(() => {
                resetForm();
                setSubmitting(false);
                return navigate("/", { state: "failure" });
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <S.DetailsGroup>
                <NamesEdit placeholder="Email" type="email" name="email" />
                <StyledError name="email" component="div" />
                <NamesEdit
                  placeholder="Username"
                  type="string"
                  name="username"
                />
                <StyledError name="username" component="div" />

                <NamesEdit
                  placeholder="Password"
                  type="password"
                  name="password"
                />
                <StyledError name="password" component="div" />
              </S.DetailsGroup>

              <S.ButtonGroup>
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
              </S.ButtonGroup>
            </Form>
          )}
        </Formik>
      </S.UserFormWrapper>
    </S.PageWrapper>
  );
};
