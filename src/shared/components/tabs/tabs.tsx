"use client";

import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import cls from "./tabs.module.scss";
import { debounce } from "@/shared/utils/debounce";
import { clsx } from "clsx";
import { AnimateReveal } from "../animate";

interface Tab {
  title: string;
  description: string;
  image: StaticImageData | string;
}

interface TabsProps {
  tabs: Tab[];
  header: string;
  isBigHeader?: boolean;
}

const Tabs = ({ header, tabs, isBigHeader = false }: TabsProps) => {
  const [choosenIndex, setChoosenIndex] = useState(0);
  const [prevChoosenIndex, setPrevChoosenIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1300);
  const [seen, setSeen] = useState(false);
  const section = useRef<HTMLDivElement>(null);
  const interval: any = useRef(null);

  //function changing tabs with interval
  const switcher = (isOnScreen: boolean) => {
    //if section is on screen, starts interval to turning tabs
    if (isOnScreen) {
      setSeen(true);
      const intervalFunc = setInterval(() => {
        setChoosenIndex((prev) => {
          setPrevChoosenIndex(prev);
          return prev == tabs.length - 1 ? 0 : prev + 1;
        });
      }, 5000);

      interval.current = intervalFunc;
    } //if section is out of screen, clearing interval
    else {
      setSeen(false);
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const removeInterval = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const reloadInterval = () => {
    removeInterval();
    switcher(true);
  };

  //function for observing for section
  const observeSection = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        switcher(entries[0].isIntersecting);
      },
      {
        root: document,
      }
    );
    observer.observe(section.current!);
  };

  const onTabMouseEnter = (e: any, currentIndex: number) => {
    const target = e.currentTarget as HTMLElement;
    if (
      !target.classList.contains(cls.hovered) &&
      currentIndex !== choosenIndex
    ) {
      target.classList.add(cls.hovered);
      target.classList.remove(cls.unhovered);
    }
  };

  const onTabMouseLeave = (e: any, currentIndex: number) => {
    const target = e.currentTarget as HTMLElement;
    if (
      target.classList.contains(cls.hovered) &&
      currentIndex !== choosenIndex
    ) {
      target.classList.remove(cls.hovered);
      target.classList.add(cls.unhovered);
    }
  };

  const resize = debounce(() => {
    setWindowWidth(window.innerWidth);
    removeInterval();
    if (window.innerWidth > 768) {
      switcher(true);
    } else {
      switcher(false);
    }
  }, 1000);

  useEffect(() => {
    if (typeof window !== "undefined") {
      //section has different views on different widths of screen, so changing width calls changing width
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 768) {
        observeSection();
      }

      window.addEventListener("resize", resize);
    }
    return () => {
      removeInterval();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <AnimateReveal>
      <div className={cls.tabs} ref={section}>
        <div className={cls.tabs_photo}>
          <Image
            src={tabs[prevChoosenIndex].image}
            className={cls.tabs_photo_prev}
            alt="tabs-photo"
            width={350}
            height={500}
            loading="eager"
          />
          <Image
            loading="eager"
            key={choosenIndex}
            src={tabs[choosenIndex].image}
            alt="tabs-photo"
            className={cls.tabs_photo_curr}
            width={350}
            height={500}
          />
        </div>
        {windowWidth > 768 ? (
          <div className={cls.tabs_wrapper}>
            <div
              className={clsx(
                cls.tabs_head,
                isBigHeader ? "text big_header" : ""
              )}
            >
              {header}
            </div>
            <div className={cls.tabs_content}>
              <div className={cls.tabs_headers_wrapper}>
                {tabs.map((i, index) => (
                  <div key={index} className="pointer">
                    <div
                      className={`text big relative ${cls.tabs_title} ${
                        index === choosenIndex ? cls.active : "light"
                      }`}
                      key={index}
                      onClick={() => {
                        setChoosenIndex((prev) => {
                          setPrevChoosenIndex(prev);
                          return index;
                        });
                        /* reloadInterval(); */
                        removeInterval();
                      }}
                      onMouseEnter={(e) => onTabMouseEnter(e, index)}
                      onMouseLeave={(e) => onTabMouseLeave(e, index)}
                    >
                      <p>{i.title}</p>
                      {seen && (
                        <div className={cls.tabs_title_underline}>
                          <div
                            className={cls.tabs_title_underline_progress}
                          ></div>
                          <div className={cls.tabs_title_underline_hover}></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`${cls.tabs_item} ${
                  Boolean(interval.current) ? cls.fade_anim : ""
                }`}
                key={choosenIndex}
              >
                <p>{tabs[choosenIndex].title}</p>
                <p className="text light">{tabs[choosenIndex].description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {tabs.map((i, index) => (
              <div className={cls.text_wrap} key={index}>
                <div className={cls.tabs_item}>
                  <p>
                    0{index + 1}. {i.title}
                  </p>
                  <p className="text light">{i.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimateReveal>
  );
};

export default Tabs;
