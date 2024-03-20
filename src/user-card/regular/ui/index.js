import { useState } from "react";

import style from "./style.module.css";

const demo = {
  name: "Ferdinand Carney",
  phone: "(640) 447-3254",
  email: "in@aol.net",
  address: "563-4648 Curabitur Street",
  position_name:
    "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
  department: "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
  hire_date: "Dec 24, 2020",
};

export default function UserCard({ data = demo, onClick = (f) => f }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className={style.wrapper}>
      <div className={style.caption}>
        <h2>
          <span id="name">{data.name}</span>
        </h2>
        <div
          onClick={(e) => {
            onClick();
          }}
        >
          close
        </div>
      </div>
      <div className={style.employeeInfo}>
        <div class={style.gridContainer}>
          <span>Телефон:</span>
          <span id="phone">{data.phone}</span>
          <span>Email:</span>
          <a href="mailto:in@aol.net" id="email">
            {data.email}
          </a>
          <span>Дата приема на работу:</span>
          <span id="hire_date">{data.hire_date}</span>
          <span>Должность:</span>
          <span id="position_name">{data.position_name}</span>
          <span>Отдел:</span>
          <span id="department">{data.department}</span>
        </div>
      </div>
      <div className={style.additionalInfo}>
        <div>Дополнительная информация:</div>
        <p>
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </div>
  );
}
