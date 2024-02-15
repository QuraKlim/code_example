import React from "react";
import { FirstArticle } from "../firstArticle/FirstArticle";
import { SecondArticle } from "../SecondArticle/SecondArticle";
import Calendar from "@/shared/components/Calendar/Calendar";
import Table from "@/app/guides/[slug]/components/table/table";
import ImageWithTitleWithText from "@/shared/components/imageWithTitleWithText/imageWithTitleWithText";
import ImageWithTitleWithTextSection from "@/app/guides/[slug]/components/imageWIthTitleWithText/imageWithTitleWithText";

interface IBlock {
  blocks: object[];
}

const getBlockComponent = ({ __typename, ...rest }, index) => {
  let Block;

  switch (__typename) {
    case "ComponentArticleSectionHeaderWithTexts":
      Block = FirstArticle;
      break;
    case "ComponentArticleSteps":
      Block = Calendar;
      break;
    case "ComponentSharedTitleDescrImage":
      Block = SecondArticle;
      break;
    case "ComponentGuideTable":
      Block = Table;
      break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks = [] }: IBlock) => {
  return <>{blocks.map(getBlockComponent)}</>;
};

export default BlockManager;
