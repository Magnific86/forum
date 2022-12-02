import React, { useContext } from "react";
import { Context } from "./Context";

export default function Info() {
  const { info } = useContext(Context);
  console.log(info);
  if (info) {
    return (
      <>
        <div className="modal">
          <p>
            Lorem React Полный курс от А до Я. Рассмотрим основные концепции и
            разработаем функционал, который встречается в каждом приложении
          </p>
        </div>
      </>
    );
  }
}
