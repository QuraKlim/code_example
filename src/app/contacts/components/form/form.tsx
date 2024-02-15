"use client";

import { ChangeEvent, FormEventHandler, useState } from "react";
import cls from "./form.module.scss";
import Button, { ButtonType } from "@/shared/components/button/button";
import InputMask from "react-input-mask";
import { AnimateReveal } from "@/shared/components/animate";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: false,
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
        [key]: (e.target as HTMLInputElement | HTMLTextAreaElement).value,
      });
    }
  };

  const validation = () => {
    const errorObj = { ...errors };
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorObj.email = true;
      setErrors({ ...errors, email: true });
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
    <section className={"container " + cls.form_section}>
      <AnimateReveal>
        <form className={cls.content} onSubmit={onFormSubmit}>
          <div className={"text big " + cls.header}>
            Есть вопросы, предложения или комментарии? Заполните форму, и мы
            постараемся быстро дать ответ.
          </div>
          <div className={cls.form}>
            <div className={cls.input_block}>
              <label htmlFor="email">E-mail</label>
              <div className={cls.input_wrap}>
                <input
                  required
                  onChange={onChangeValue}
                  id="email"
                  type="email"
                />
                <div className={cls.background}></div>
              </div>
              {errors.email && (
                <div className={cls.error}>
                  Неверный формат электронной почты
                </div>
              )}
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
            <div className={cls.input_block}>
              <label htmlFor="message">Сообщение</label>
              <div className={cls.input_wrap}>
                <textarea
                  minLength={5}
                  required
                  onChange={onChangeValue}
                  rows={
                    formData.message.split("\n").length > 6
                      ? formData.message.split("\n").length
                      : 6
                  }
                  id="message"
                />
                <div className={cls.background}></div>
              </div>
            </div>
          </div>
          <div className={cls.button}>
            <Button type={ButtonType.SUBMIT} text="Отправить сообщение" />
          </div>
        </form>
      </AnimateReveal>
    </section>
  );
};

export default Form;
