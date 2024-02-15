"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./FilterCategories.module.scss";
import { useState } from "react";

interface FilterCategoriesProps {
  filters?: string[];
  setPickedParametrs?: (pickedFilters: string[]) => void;
}

export const FilterCategories = ({
  filters = ["Фильтры"],
  setPickedParametrs,
}: FilterCategoriesProps) => {
  const [state, setState] = useState(Array(filters.length).fill(false));
  const changeBtnColor = (index: number) => {
    const tmp = [...state];
    tmp[index] = !tmp[index];
    setState(tmp);
    setPickedParametrs(filters.filter((i, index) => tmp[index]));
  };
  return (
    <div className={styles.filter}>
      {filters && filters.length ? (
        filters.map((f, index) => (
          <button
            key={index}
            onClick={() => changeBtnColor(index)}
            className={state[index] ? styles.filter_btn_y : styles.filter_btn}
          >
            <p className="text regular">{f}</p>
          </button>
        ))
      ) : (
        <Skeleton className={styles.filter_btn} />
      )}
    </div>
  );
};
