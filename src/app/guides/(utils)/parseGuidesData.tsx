import { GetGuidesPageQueryQuery } from "@/data/generated/graphql";
import SliderElement from "@/shared/components/sliderElement/SliderElement";

export default function parseGuidesData(data: GetGuidesPageQueryQuery) {
  const guidesArr = data.guides.data.map((guide) => {
    const date = new Date(guide.attributes.createdAt).toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });
    const str = date.split(" ");
    str[1] = str[1].charAt(0).toUpperCase() + str[1].substring(1);
    const parsedDate = str.join(" ");

    return (
      <SliderElement
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${guide.attributes.big_image.big_image.data.attributes.url}`}
        articleTitle={guide.attributes.header.header}
        date={parsedDate}
        href={`/guides/${guide.attributes.slug}`}
      />
    );
  });

  const tags = data.guideTags.data.map((i) => i.attributes.tag);
  const guidesTotal = data.guides.meta.pagination.total;

  return { guidesArr, tags, guidesTotal, refetch: false };
}
