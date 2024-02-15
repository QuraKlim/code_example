import React, { Fragment } from "react";
import cls from "./table.module.scss";
import { AnimateReveal } from "@/shared/components/animate";

interface Columns {
  order: number;
  column_1: string;
  column_2: string;
}

interface TableProps {
  data: Columns[];
  column_1_name: string;
  column_2_name: string;
}

const Table = ({ data, column_1_name, column_2_name }: TableProps) => {
  return (
    <section className={"container " + cls.table_section}>
      <AnimateReveal>
        <div className={cls.table}>
          <p className={"text light " + cls.first_row}>№</p>
          <p className={"text light " + cls.first_row}>{column_1_name}</p>
          <p className={"text light " + cls.first_row}>{column_2_name}</p>
          {data.map((i, index) => {
            let classes = `text big `;
            if (index == data.length) {
              classes += cls.last_row;
            }
            return (
              <Fragment key={index}>
                <p className={classes}>{i.order}</p>
                <p className={classes}>{i.column_1}</p>
                <p className={classes}>{i.column_2}</p>
              </Fragment>
            );
          })}
        </div>
      </AnimateReveal>
    </section>
  );
};

export default Table;
