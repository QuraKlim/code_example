"use client";

import { ReactNode, useEffect, useMemo, useRef } from "react";

import styles from "./AnimateReveal.module.scss";
import { inView } from "framer-motion";
import clsx from "clsx";
import { Primitive } from "@radix-ui/react-primitive";

export interface AnimateRevealProps {
  refProp?: string;
  classNameProp?: string;
  force?: boolean;
  asChild?: boolean;
  children?: ReactNode;
  willChangeDisable?: boolean;
}

export function AnimateReveal({
  refProp = "ref",
  classNameProp = "className",
  force = false,
  asChild = true,
  willChangeDisable = false,
  children,
}: AnimateRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (force) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const onInView = (inView: boolean) => {
      element.classList.toggle(styles.show, inView);
      element.classList.toggle(styles.hide, !inView);
    };

    onInView(false);

    return inView(
      element,
      () => {
        onInView(true);
      },
      {
        amount: 0.15,
      }
    );
  }, [force]);

  const props = useMemo(
    () => ({
      [refProp]: ref,
      [classNameProp]: clsx(
        styles.root,
        willChangeDisable ? "" : styles.change_transform,
        force ? styles.show : styles.hide
      ),
    }),
    [refProp, classNameProp, force]
  );

  return (
    <Primitive.div {...props} asChild={asChild}>
      {children}
    </Primitive.div>
  );
}
