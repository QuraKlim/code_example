import styles from "./Certificates.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ISertificate {
  src: string;
  alt: string;
  srcToPdf: string;
  title?: string;
}

// "/images/main-page/certificates/pdf/1.pdf";
const Certificates = ({ src, alt, srcToPdf, title }: ISertificate) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img_wrapper}>
        <Link href={srcToPdf} target="_blank">
          <Image
            className={styles.cer_img}
            width={160}
            height={226}
            src={src}
            alt={alt}
          />
        </Link>
      </div>
      {title && <p className="text regular">{title}</p>}
    </div>
  );
};

export default Certificates;
