import { AnimateReveal } from "@/shared/components/animate";

const GoogleMap = () => {
  return (
    <AnimateReveal>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=37.553379%2C55.656453&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY1ODU0NBI70KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCd0LDRg9GH0L3Ri9C5INC_0YDQvtC10LfQtCwgMTAiCg2oNhZCFTWgXkI%2C&z=17.08"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 20, overflow: "hidden" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </AnimateReveal>
  );
};

export default GoogleMap;
