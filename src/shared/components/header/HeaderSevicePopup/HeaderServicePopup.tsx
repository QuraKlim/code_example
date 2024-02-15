"use client";

import clsx from "clsx";
import ServiceListTypeSecond from "../../MainPageCommonComponents/serviceListTypeSecond/ServiceListTypeSecond";
import styles from "./HeaderServicePopup.module.scss";

export interface IHeaderServicePopupProps {
  textColor: string;
  setServiceMenuVisible: Function;
  serviceMenuVisibe: boolean;
}

export const HeaderServicePopup = ({
  serviceMenuVisibe,
  textColor,
  setServiceMenuVisible,
}) => {
  return (
    <div className={styles.service_triger} style={{ color: textColor }}>
      <div className={styles.link_wrapper}>
        <div
          onMouseOver={() => setServiceMenuVisible(true)}
          onMouseLeave={() => setServiceMenuVisible(false)}
          style={{ cursor: "pointer" }}
          className={clsx("text regular", styles.text_wrap)}
        >
          <span>{"Услуги"}</span>
          <div
            className={styles.underline}
            style={{ backgroundColor: textColor }}
          ></div>
          <div
            className={styles.services_wrap}
            style={{ height: serviceMenuVisibe ? "525px" : "0px" }}
          >
            <div className={styles.elements_wrap}>
              <ServiceListTypeSecond />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
