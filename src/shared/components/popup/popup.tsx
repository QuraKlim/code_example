"use client";

import { ChangeEvent, FormEventHandler, ReactNode, useState } from "react";
import Modal from "../modal/modal";
import cls from "@/app/contacts/components/form/form.module.scss";
import style from "./popup.module.scss";
import Button, { ButtonType } from "../button/button";
import InputMask from "react-input-mask";

const PopupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const onChangeValue = (e: ChangeEvent) => {
    const key = e.target.getAttribute("id");
    if (key) {
      if (key in errors) {
        setErrors({ ...errors, [key]: false });
      }
      setFormData({
        ...formData,
        [key]: (e.target as HTMLInputElement).value,
      });
    }
  };

  const validation = () => {
    const errorObj = { ...errors };
    if (formData.name.length < 2) {
      errorObj.name = true;
      setErrors({ ...errors, name: true });
    }
    if (!formData.phone.match(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/)) {
      errorObj.phone = true;
    }
    setErrors(errorObj);
    return Object.values(errorObj).every((i) => i === false);
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (validation()) {
      console.log("submit");
    }
  };
  return (
    <form className={style.form_wrapper} onSubmit={onFormSubmit}>
      <p className="text big">
        Заполните форму, и мы свяжемся с Вами в ближайшее время!
      </p>
      <Button type={ButtonType.SUBMIT} text="Отправить заявку" />
      <div className={`${cls.form} ${style.form}`}>
        <div className={cls.input_block}>
          <label htmlFor="name">Имя</label>
          <div className={cls.input_wrap}>
            <input
              placeholder="Введите имя"
              required
              onChange={onChangeValue}
              id="name"
              type="name"
            />
            <div className={cls.background}></div>
          </div>
          {errors.name && <div className={cls.error}>Слишком короткое имя</div>}
        </div>
        <div className={cls.input_block}>
          <label htmlFor="phone"> Телефон</label>
          <div className={cls.input_wrap}>
            <InputMask
              id="phone"
              onChange={onChangeValue}
              mask="+7(999)999-99-99"
              placeholder="+7(999) 999-99-99"
              required
            />
            <div className={cls.background}></div>
          </div>
          {errors.phone && (
            <div className={cls.error}>Неверный формат телефона</div>
          )}
        </div>
      </div>
    </form>
  );
};

interface PopupProps {
  children: ReactNode;
}

const Popup = ({ children }: PopupProps) => {
  const [opened, setOpened] = useState(false);

  const closeModal = () => {
    setOpened(false);
  };

  return (
    <>
      <div className={style.popup_wrapper} onClick={() => setOpened(true)}>
        {children}
      </div>
      {opened ? (
        <Modal isPopup={true} content={<PopupForm />} closeModal={closeModal} />
      ) : null}
    </>
  );
};

export default Popup;
