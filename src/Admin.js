import  { useContext } from "react";
import Container from "./Container";
import { Context } from "./contexts/Context";

export default function Admin() {
  const { admin } = useContext(Context);

  if (admin) {
    return (
      <Container>
        <div>Админка</div>
        <p>Здесь можно будет удалять ненужные посты</p>
      </Container>
    );
  }
}
