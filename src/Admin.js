import React, { useContext } from "react";
import ButtonMain from "./Buttons/ButtonMain";
import Container from "./Container";
import { Context } from "./Context";

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
