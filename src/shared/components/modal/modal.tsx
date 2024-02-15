import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import cls from "./modal.module.scss";
import CiricleIcon from "../ciricleIcon/ciricleIcon";
import Close from "@/shared/icons/close-crosse.svg";
import { useLenis } from "@studio-freight/react-lenis";

interface ModalProps {
  closeModal: () => void;
  content: ReactNode | JSX.Element;
  isPopup?: boolean;
}

const Modal = ({ closeModal, content, isPopup = false }: ModalProps) => {
  const modalWrapper = useRef(null);

  const closeOnWrapper = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget, e.target, modalWrapper.current);
    if (!modalWrapper.current.contains(e.target)) {
      closeModal();
    }
  };

  const onEscapeTap = (e: KeyboardEvent) => {
    if (e.key == "Escape") {
      closeModal();
    }
  };

  const lenis = useLenis();

  useEffect(() => {
    const html = document.querySelector("html");
    lenis.options.smoothWheel = false;
    html.style.marginRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
    html.style.overflow = "hidden";
    document.addEventListener("keydown", onEscapeTap);

    return () => {
      if (lenis) {
        lenis.options.smoothWheel = true;
      }
      html.style.marginRight = "0px";
      html.style.overflow = "unset";
      document.removeEventListener("keydown", onEscapeTap);
    };
  }, []);

  return (
    <div
      className={`${cls.modal_container} ${isPopup ? cls.popup : ""}`}
      onClick={closeOnWrapper}
    >
      <div className="container max-h-100 overflow-hideen">
        <div className={cls.modal_wrapper} ref={modalWrapper}>
          {content}
          <div onClick={closeModal} className={cls.close_button}>
            <CiricleIcon
              image={Close}
              wrapperClassName={cls.icon_wrapper}
              iconClassName={cls.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
