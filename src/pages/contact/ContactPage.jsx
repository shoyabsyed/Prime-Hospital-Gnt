import InnerBanner from "../../components/InnerBanner/InnerBanner";
import ContactForm from "../../components/contact/ContactForm";
import Location from "../../components/contact/Location";

const ContactPage = () => {
  return (
    <div>
      <InnerBanner
        heading="Contact"
        imagePath="Images/contactInnerBanner.png"
      />
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full md:w-[60rem]">
          <ContactForm />
        </div>
        <Location />
      </section>
    </div>
  );
};

export default ContactPage;
