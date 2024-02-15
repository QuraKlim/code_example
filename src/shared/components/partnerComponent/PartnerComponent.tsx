import styles from "./PartnerComponent.module.scss";
import Image from "next/image";

interface IPartherComponentsProps {
  src: string;
}

const PartnerComponent = ({ src }: IPartherComponentsProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={src} width={400} height={117} alt="slide-image" />
    </div>
  );
};

export default PartnerComponent;
