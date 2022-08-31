import * as S from "./Details.styles";

interface Props {
  first_name: string;
  last_name: string;
  email: string;
}

const Details = ({ first_name, last_name, email }: Props) => {
  return (
    <S.Details aria-label="Grouped details of the user">
      <S.NamesParent>
        <S.Names>
          {first_name} {last_name}
        </S.Names>
      </S.NamesParent>
      <S.NamesParent>
        <S.Email>{email}</S.Email>
      </S.NamesParent>
    </S.Details>
  );
};

export default Details;
