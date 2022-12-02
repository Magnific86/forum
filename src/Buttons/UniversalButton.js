import React, { useContext } from "react";
import { Context } from "../Context";
import ButtonMain from "./ButtonMain";

export default function UniversalButton() {
  const { admin, form } = useContext(Context);

  if (admin) {
    return <ButtonMain />;
  }
  if (form) {
   return  <ButtonMain />;
  }
}
