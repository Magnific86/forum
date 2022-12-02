import  { useContext } from "react";
import { Context } from "../contexts/Context";
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
