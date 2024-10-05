import React from 'react'
import InnerBanner from '../../components/InnerBanner/InnerBanner'
import AppointmentInfo from '../../components/appointment/AppointmentInfo'
import AppointmentContact from '../../components/contact/AppointmentContact'

function Hospital() {
    return (
        <div>
            <section>
                <InnerBanner imagePath='/Images/HospitalsBanner.jpg' heading='About Hospital' />
            </section>

            <div className='flex flex-col md:flex-row gap-8 items-center justify-center py-8 px-4 md:px-8'>
                <img className='w-full md:w-[400px]' src="/Images/PrimeHospitalsImg.png" alt="" />
                <div className='w-full md:w-[40rem]'>
                    <h2 className='font-bold text-4xl md:text-5xl text-green-600'>
                        Welcome to Andhra Prime Hospitals
                    </h2>
                    <p className='text-lg md:text-xl pt-4'>Andhra Prime Hospitals stands as a beacon of healthcare excellence, offering a comprehensive range of medical services with a commitment to patient-centered care. With over 7 years of experience, we have established ourselves as a trusted healthcare institution dedicated to serving the diverse medical needs of our community.</p>
                </div>
            </div>

            <div>
                <h3 className='text-center font-bold text-3xl pt-6'>Mission & Vision</h3>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-8 py-6'>
                <div className='w-full md:w-[30rem] text-center'>
                    <img className='mx-auto' width={90} src="/Images/OurvisionImg.png" alt="" />
                    <h3 className='font-bold text-2xl md:text-3xl py-6'>Our Mission</h3>
                    <p className='font-semibold'>Our mission is to provide world-class healthcare with a focus on patient comfort, safety, and personalized care. We strive to deliver the highest quality medical services through continuous innovation and a compassionate approach.</p>
                </div>

                <div className='w-full md:w-[30rem] text-center'>
                    <img className='mx-auto' width={90} src="/Images/VisionImg.png" alt="" />
                    <h3 className='font-bold text-2xl md:text-3xl py-6'>Our Vision</h3>
                    <p className='font-semibold'>To be a leading healthcare provider recognized for exceptional patient care, advanced medical facilities, and dedicated healthcare professionals. We aim to set the standard for excellence in healthcare, continually improving and innovating to meet the evolving needs of our patients and community.</p>
                </div>
            </div>

            <div className='py-6'>
                <h2 className='text-center font-bold text-3xl py-4'>Our Commitment to Excellence</h2>
                <p className='px-4 md:px-20 text-lg md:text-xl font-medium'>At Andhra Prime Hospitals, we are committed to continuous improvement and innovation in healthcare. We stay abreast of the latest medical research and technologies to provide the best possible care to our patients. Our dedicated team of doctors, nurses, and support staff work tirelessly to ensure that every patient receives personalized attention and the highest quality of care.</p>
            </div>

            <AppointmentInfo />

            <div className='py-6 flex flex-col items-center justify-center'>
                <div className='w-full md:w-[40rem] text-center'>
                    <h2 className='text-blue-700 font-semibold text-3xl md:text-4xl'>Why Choose Us?</h2>
                    <p className='text-lg md:text-xl pt-4'>We are one of the best health clinics in town, with over 25 certified and qualified doctors serving the community since 1998.</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row px-4 md:px-24 gap-8 items-center justify-center'>
                <div className='py-8'>
                    <div className='py-6'>
                        <h3 className='text-blue-700 font-semibold text-lg md:text-xl'>Experienced Professionals</h3>
                        <p>Our team consists of highly skilled and experienced healthcare professionals dedicated to your well-being.</p>
                    </div>

                    <div className='py-6'>
                        <h3 className='text-blue-700 font-semibold text-lg md:text-xl'>State-of-the-Art Facilities</h3>
                        <p>We boast modern infrastructure and advanced medical equipment to support accurate diagnosis and effective treatment.</p>
                    </div>
                </div>

                <div className='w-full md:w-[700px]'>
                    <img className='w-full' src="/Images/PrimeHospitalsImg.png" alt="" />
                </div>

                <div className='py-8'>
                    <div className='py-6'>
                        <h3 className='text-blue-700 font-semibold text-lg md:text-xl'>Experienced Professionals</h3>
                        <p>Our team consists of highly skilled and experienced healthcare professionals dedicated to your well-being.</p>
                    </div>

                    <div className='py-6'>
                        <h3 className='text-blue-700 font-semibold text-lg md:text-xl'>State-of-the-Art Facilities</h3>
                        <p>We boast modern infrastructure and advanced medical equipment to support accurate diagnosis and effective treatment.</p>
                    </div>
                </div>
            </div>

            <section className='px-4 md:px-48 text-center text-lg md:text-xl pb-4'>At Andhra Prime Hospitals, we are more than just a healthcare provider; we are your trusted partners in health. We are dedicated to improving your quality of life through exceptional medical care, compassionate service, and a commitment to excellence.</section>

            <AppointmentContact />
        </div>
    )
}

export default Hospital
