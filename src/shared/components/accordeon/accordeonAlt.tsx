"use client";

import * as Accordion from "@radix-ui/react-accordion";
import cls from "./accordeon.module.scss";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Arrow from "@/shared/icons/arrow.svg";
import CiricleIconTurn from "../ciricleIcon/ciricleIconTurn";
import Link from "next/link";
import { AnimateReveal } from "../animate";

interface AccordeonAltItem {
  title: string;
  description: string;
  image: string;
  linkUrl: string;
}

interface AccordeonAltProps {
  fields: AccordeonAltItem[];
}

const AccordeonAlt = ({ fields }: AccordeonAltProps) => {
  const [currValue, setCurrentValue] = useState<number | null>(null);
  return (
    <AnimateReveal>
      <Accordion.Root
        type="single"
        collapsible
        className={"w-100 " + cls.alt}
        value={`item-${currValue}`}
        onMouseLeave={() => setCurrentValue(null)}
      >
        {fields.map((i, index) => (
          <Link href={i.linkUrl} key={index} className="link-no-decoration">
            <Accordion.Item
              value={"item-" + index}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setCurrentValue(index);
                }
              }}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className={
                    cls.alt + " trigger opened w-100 " + cls.accordeon_item
                  }
                >
                  <div className="w-100">
                    <div className={cls.accordeon_item_content}>
                      <div className={cls.accordeon_image_wrap}>
                        <Image
                          className={cls.accordeon_image}
                          src={i.image}
                          alt={cls.accordeon_image}
                          width={250}
                          height={150}
                        />
                      </div>
                      <div className={cls.accordeon_text}>
                        <p className="text big">{i.title}</p>
                        <Accordion.Content
                          className={cls.accordeon_content + " text light"}
                        >
                          {i.description}
                        </Accordion.Content>
                      </div>

                      <div className={"flex center " + cls.accordeon_trigger}>
                        <CiricleIconTurn
                          isHovered={index == currValue}
                          iconClassName={cls.icon}
                          wrapperClassName={cls.icon_wrapper}
                          image={Arrow}
                        />
                      </div>
                    </div>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
            </Accordion.Item>
          </Link>
        ))}
      </Accordion.Root>
    </AnimateReveal>
  );
};

export default AccordeonAlt;
