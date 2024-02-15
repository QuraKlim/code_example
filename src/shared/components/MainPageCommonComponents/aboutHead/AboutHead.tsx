"use cleint";

import Link from "next/link";
import styles from "./AboutHead.module.scss";
import IconComponent from "../../iconComponent/IconComponent";
import smallArrowIcon from "@/shared/icons/uil_arrow-left.svg";
import video from "@/public/images/main-page/about-us/video.jpg";
import Image from "next/image";
import { AnimateReveal } from "../../animate";
import { useState } from "react";
import Modal from "../../modal/modal";

const AboutHead = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setModalOpened(false);
  };

  const modalContent = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/ju3iJ2FzM-4?si=mLGAI1WURtEpUlmW"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  return (
    <>
      <AnimateReveal>
        <div className={styles.wrapper}>
          <div className={styles.info_wrapper}>
            <h1 className="text big_header">Поручите задачи профессионалам</h1>
            <div className={styles.link}>
              <Link className={styles.about_us_link} href={"/about"}>
                <p className="text big">О нас</p>
                <IconComponent src={smallArrowIcon} width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className={styles.video_wrap} onClick={() => setModalOpened(true)}>
            <Image
              className={styles.video}
              height={300}
              width={530}
              src={video.src}
              alt=""
            />
          </div>
        </div>
      </AnimateReveal>
      {modalOpened && <Modal content={modalContent} closeModal={closeModal} />}
    </>
  );
};

export default AboutHead;
