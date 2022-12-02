import  { useContext } from "react";
import { Context } from "./contexts/Context";

export default function Info() {
  const { info } = useContext(Context);
  console.log(info);
  if (info) {
    return (
      <>
        <div className="modal">
          <p>
           Хочу сделать массив постов с темой и ответом, нде можно будет добавлять по категориям
          </p>
        </div>
      </>
    );
  }
}
