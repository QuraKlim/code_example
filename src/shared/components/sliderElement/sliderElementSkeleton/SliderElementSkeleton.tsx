import Skeleton from "react-loading-skeleton";
import styles from "./SliderElementSkeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

const SliderElementSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img_wrap}>
        <Skeleton className={styles.img_skel} />
      </div>
      <div className={styles.description}>
        <Skeleton count={2} />
        <div className={styles.date}>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

export default SliderElementSkeleton;
