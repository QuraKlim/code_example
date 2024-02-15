"use client";

import Image, { StaticImageData } from "next/image";
import cls from "./video.module.scss";
import { useEffect, useRef, useState } from "react";
import Modal from "../modal/modal";
import clsx from "clsx";

interface VideoProps {
  image: StaticImageData;
  cursor: StaticImageData;
}

interface MousePosition {
  x: number | string;
  y: number | string;
}

const Video = ({ image, cursor }: VideoProps) => {
  const [isMouseIn, setIsMouseIn] = useState(false);

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [modalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setModalOpened(false);
  };

  const section = useRef(null);

  const mouseMoveHandler = (e) => {
    setMousePosition({
      x: "calc(" + (e.clientX - 27) + "px - 1rem)",
      y: "calc(" + (e.clientY - 27) + "px - 1rem)",
    });
  };

  const observeSection = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.body.addEventListener("mousemove", mouseMoveHandler);
        } else {
          document.body.removeEventListener("mousemove", mouseMoveHandler);
        }
      },
      {
        root: document,
      }
    );
    observer.observe(section.current!);
  };

  useEffect(() => {
    observeSection();
    return () => {
      document.body.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

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
      <section
        onClick={() => {
          setModalOpened(true);
        }}
        onMouseLeave={() => {
          setIsMouseIn(false);
        }}
        onMouseEnter={() => setIsMouseIn(true)}
        ref={section}
      >
        <div className={cls.video_wrapper}>
          <div
            style={{
              background: `url(${image.src}) top center/cover`,
            }}
            className={cls.video + " w-100 h-100"}
          ></div>
          {isMouseIn && (
            <Image
              src={cursor.src}
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
              }}
              alt="cursor"
              width={90}
              height={90}
              className={cls.video_cursor}
            />
          )}
          <Image
            src={cursor.src}
            alt="play"
            width={62}
            height={62}
            className={clsx(cls.video_cursor, cls.mobile)}
          />
        </div>
      </section>
      {modalOpened && <Modal content={modalContent} closeModal={closeModal} />}
    </>
  );
};

export default Video;
