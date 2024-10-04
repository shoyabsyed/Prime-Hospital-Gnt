import BulletPoint from "../../../components/custom-components/BulletPoints";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { CardiothoracicTypes, CardiothoracicServices  } from "./data";

 const CardiothoracicPage = () => {
    return (
        <div>
            <InnerBanner imagePath="/Images/cardiothoracic.png" heading="Cardiothoracic Surgery" />
            <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
        At Andhra Prime Hospitals, our Cardiothoracic Surgery Department is dedicated to providing advanced 
        surgical care for patients with diseases and conditions affecting the heart, lungs, chest, and major blood vessels. Led by a team of highly skilled cardiothoracic surgeons and supported by advanced technology, 
        we offer a comprehensive range of surgical procedures to improve the health and quality of life of our patients.
        </p>
        
       <h1 className="text-xl md:text-2xl lg:text-3xl text-green-600 text-center underline font-bold">Our Services</h1>
        {CardiothoracicTypes.map((service, idx) => (
            <div key={idx} className="mt-4 ">
              <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
                <BulletPoint /> {service.title}
              </h2>
              <p className="text-black text-xl ">{service.description}</p>
            </div>
          ))}
           <h1 className="text-xl md:text-2xl lg:text-3xl text-green-600 underline text-center font-bold">Why Choose Us?</h1>
           {CardiothoracicServices.map((service, idx) => (
            <div key={idx} className="mt-4 ">
              <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
                <BulletPoint /> {service.title}
              </h2>
              <p className="text-black text-xl ">{service.description}</p>
            </div>
          ))}

          <p className="text-base md:text-lg lg:text-xl">At Andhra Prime Hospitals, we are committed to delivering exceptional cardiothoracic surgical care, helping our patients achieve better health and improved quality of life. Contact us today to 
            learn more about our services or to schedule a consultation with one of our specialists.</p>
        </section>
        </div>
    )
 }

 export default CardiothoracicPage;