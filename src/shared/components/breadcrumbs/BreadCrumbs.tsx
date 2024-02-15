import Link from "next/link";
import styles from "./BeadCrumbs.module.scss";
import clsx from "clsx";

interface IBreadCrumb {
  name: string;
  url: string;
}

export interface IBreadCrumbsProps {
  breadcrumbsArr: IBreadCrumb[];
}

const BreadCrumbs = ({ breadcrumbsArr }: IBreadCrumbsProps) => {
  return (
    <div className={styles.container}>
      {breadcrumbsArr?.map((el, index) => (
        <Link
          key={index}
          href={el.url}
          className={clsx(
            `${
              index === breadcrumbsArr.length - 1
                ? " text light"
                : " text regular"
            }  link`,
            index === breadcrumbsArr.length - 1
              ? styles.link_wrap_truncate
              : styles.link_wrap
          )}
        >
          {el.name}
          <p>{`${index === breadcrumbsArr.length - 1 ? "" : "/"}`}</p>
        </Link>
      ))}
    </div>
  );
};

export default BreadCrumbs;
