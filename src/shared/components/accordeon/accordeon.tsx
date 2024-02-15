"use client";

import * as Accordion from "@radix-ui/react-accordion";
import cls from "./accordeon.module.scss";
import { AnimateReveal } from "../animate";

interface AccordeonItem {
  header: string;
  content: string;
}

interface AccordeonProps {
  fields: AccordeonItem[];
}

const Accordeon = ({ fields }: AccordeonProps) => {
  return (
    <AnimateReveal>
      <Accordion.Root type="single" collapsible className="w-100">
        {fields.map((i, index) => (
          <Accordion.Item key={index} value={"item-" + index}>
            <Accordion.Header>
              <Accordion.Trigger
                className={"trigger opened w-100 " + cls.accordeon_item}
              >
                <div>
                  <div className="flex jcsb aic" style={{ padding: "50px 0" }}>
                    <p className={cls.numeration + " text big"}>0{index + 1}</p>
                    <div className={cls.accordeon_text}>
                      <p className="text big">{i.header}</p>
                      <Accordion.Content
                        className={cls.accordeon_content + " text light"}
                      >
                        {i.content}
                      </Accordion.Content>
                    </div>

                    <div className={"flex center " + cls.accordeon_trigger}>
                      <div className={"relative " + cls.accordeon_icon_wrapper}>
                        <div className={cls.minus}></div>
                        <div className={cls.plus}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </AnimateReveal>
  );
};

export default Accordeon;
