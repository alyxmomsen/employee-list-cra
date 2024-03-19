import { useState } from "react";

import style from './style.module.css' ;

const demo = {
    "name": "Ferdinand Carney",
    "phone": "(640) 447-3254",
    "email": "in@aol.net",
    "address": "563-4648 Curabitur Street",
    "position_name": "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
    "department": "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
    "hire_date": "Dec 24, 2020"
}

export default function UserCard ({data = demo , onClick = f => f}) {

    return (
        <div>
            <div onClick={() => {onClick()}}>close</div>
            <h3>Имя: <span id="name">{data.name}</span></h3>
            <p>Email: <a href="mailto:in@aol.net" id="email">{data.email}</a></p>
            <p>Телефон: <span id="phone">{data.phone}</span></p>
            <p>Адрес: <span id="address">{data.address}</span></p>
            <p>Должность: <span id="position_name">{data.position_name}</span></p>
            <p>Отдел: <span id="department">{data.department}</span></p>
            <p>Дата приема на работу: <span id="hire_date">{data.hire_date}</span></p>
        </div>
    ) ;    
}


