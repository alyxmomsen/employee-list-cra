import { useState } from "react";

import style from "./../input-box/style.module.css";

import image from "./../images/magnifying-glass-illustrator.png";

export default function InputBox({ getDataCallBack, setUsersCallBack }) {
  const [inputed, setInputed] = useState("");

  return (
    <div className={style.wrapper}>
      <img src={image} alt="alt description" width={24} height={24} />
      <input
        onKeyUp={(e) =>
          getDataCallBack(inputed).then((data) => setUsersCallBack(data))
        }
        onChange={(e) => {
          setInputed(e.currentTarget.value);
        }}
        type="text"
        value={inputed}
      />
    </div>
  );
}
