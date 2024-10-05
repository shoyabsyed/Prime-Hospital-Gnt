import { useEffect } from "react";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import ContactForm from "../../components/contact/ContactForm";
import Location from "../../components/contact/Location";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner
        heading="Contact"
        imagePath="Images/contactInnerBanner.png"
      />
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full md:w-[70rem]">
          <ContactForm />
        </div>
        <Location />
      </section>
    </div>
  );
};

export default ContactPage;
