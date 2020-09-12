import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Link } from "@material-ui/core/";

const Table = ({}) => {
  const admin = true;
  const columns = [
    "Вид работ",
    "Объект",
    "Начало работ",
    "Окончание работ",
    "Начало работ",
  ];
  const [state, setState] = useState({
    columns: [
      { title: "Вид работ", field: "typeWork" },
      { title: "Объект", field: "object" },
      { title: "Начало работ", field: "beginningOfWork", type: "date" },
      { title: "Окончание работ", field: "completionOfWork", type: "date" },
      { title: "Начало тендера", field: "beginningOfTenders", type: "date" },
      {
        title: "Окончание тендера",
        field: "completionOfTenders",
        type: "date",
      },
      { title: "Стоимость работ", field: "costOfWork", type: "numeric" },
      {
        title: "Ссылка на документы",
        field: "link",
        render: rowData => (
          <Link href={rowData.link} target="_blank" rel="noreferrer">
          Скачать
        </Link>
        ),
      },
    ],
    data: [
      {
        typeWork: "Отделочные работы",
        object: "Солнечный город Супер ЖД 1 корп 4",
        beginningOfWork: "20.09.2020",
        completionOfWork: "30.09.2020",
        beginningOfTenders: "10.10.2020",
        completionOfTenders: "25.10.2020",
        costOfWork: 630000,
        link: "https://vk.com/kirill_1131",
      },
      {
        typeWork: "Монолитные работы",
        object: "Светлая Долина ЖД 1-15 корп 2",
        beginningOfWork: "20.09.2020",
        completionOfWork: "30.09.2020",
        beginningOfTenders: "10.10.2020",
        completionOfTenders: "25.10.2020",
        costOfWork: 990000,
        link: "https://vk.com/andreevth",
      },
    ],
  });

  return (
    <div
      style={{
        padding: "30px 20px",
      }}
    >
      <MaterialTable
        title="ТЕКУЩИЕ И ПЛАНИРУЕМЫЕ ТЕНДЕРЫ ПО СМР"
        columns={state.columns}
        data={state.data}
        editable={
          admin
            ? {
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }
            : null
        }
      />
    </div>
  );
};
export { Table };
