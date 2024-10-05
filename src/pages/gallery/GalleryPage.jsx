import { useEffect } from "react";
import InnerBanner from "../../components/InnerBanner/InnerBanner";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner heading="Gallery" />
    </div>
  );
};

export default GalleryPage;
