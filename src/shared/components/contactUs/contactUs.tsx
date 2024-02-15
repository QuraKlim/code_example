"use client";

import { AnimateReveal } from "../animate";
import Button, { ButtonColor, TextColor } from "../button/button";
import Popup from "../popup/popup";
import cls from "./contactUs.module.scss";

const ContactUs = () => {
  return (
    <AnimateReveal willChangeDisable={true}>
      <div className={cls.contact}>
        <div className="container">
          <div>
            <p className="text big_header bold">Остались вопросы?</p>
            <p className="text big_header bold">Давайте обсудим вместе!</p>
          </div>
          <div className={cls.contact_separate} />
          <div className={cls.contact_bottom}>
            <Popup>
              <Button
                text="Стать клиентом"
                color={ButtonColor.DARK}
                textColor={TextColor.BLACK}
                whiteTextOnMobile={true}
              />
            </Popup>
            <div className={"text big " + cls.contact_info}>
              <a href="tel:+74951200108">+7 (495) 120 01-08</a>
              <a href="mailto:info@megavolt-group.com">
                info@megavolt-group.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimateReveal>
  );
};

export default ContactUs;
