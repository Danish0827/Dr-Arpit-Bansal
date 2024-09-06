"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import ContactForm from "../Contact/ContactForm";

const About = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const SkeletonLoader = () => {
    return (
      <div className="space-y-4 p-7">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <section className="about  py-20" id="about">
        <div className="container mx-auto grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex justify-center item-center mb-10">
            <div className="relative lg:-ml-20 -ml-8">
              <img
                src="https://yt3.googleusercontent.com/FEb5JG7G4NrYMTNsjT11WAIrlJTqT-zcCpQEEaqNtUuIENDcE1s7YWaJVUFhiTYwVPSKlCChZK0=s900-c-k-c0x00ffffff-no-rj"
                alt="Profile"
                className="md:w-96 w-80 border-4 border-white rounded-lg shadow-lg m-auto relative z-20 scale-x-[-1]"
              />
              <div className="absolute w-80 md:w-96 h-[380px] md:h-[450px] bg-gray-300 -top-8 -right-8 rounded-lg border-b-4 border-[#171f56]"></div>
              <div className="absolute w-16 h-16 bg-[#171f56] -top-4 -right-4 rounded-lg"></div>
            </div>
          </div>

          <div className="lg:pl-8 px-3">
            <h2 className="text-3xl font-bold text-left mb-2 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#171f58]">
                About Dr. Arpit Bansal
              </span>
              <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
            </h2>
            <span className="text-xl mt-0 lg:mt-2 mb-2">
              MBBS, MS - General Surgery
            </span>
            <p className="text-base text-gray-800 my-4 text-justify">
              Laparoscopic Surgeon,General Surgeon,Bariatric Surgeon, Special
              Interest in Surgical Oncology 15 Years Experience Overall (10
              years as specialist)
            </p>
            <p className="text-base text-gray-800 my-4 text-justify">
              Dr Arpit Bansal, an Advanced Laparoscopy and Cancer Surgeon, has
              mastered an art, which many struggle to understand. A man of
              varied interests, he has created a fine balance between his
              profession and passion. According to Dr Arpit Bansal, with time
              management and focus, one can excel in both fields. His journey
              stands testament to his extraordinary talent and unyielding
              determination.
            </p>
            <div className="hidden md:flex gap-4">
              <a
                onClick={showLoading}
                className="flex items-center bg-gradient-to-r from-[#171f58] to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
              >
                <i className="ri-send-plane-line mr-2"></i> Book Appointment
              </a>
              {/* <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-black text-black py-2 px-4 rounded-lg hover:border-[#171f56] hover:text-[#171f56] transition"
              >
                <i className="ri-linkedin-box-line"></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className="md:pt-10 px-3 md:px-16 lg:px-24">
          <p className="text-base text-gray-800 mb-4 text-justify">
            Dr Arpit Bansal always wanted to be a doctor, owing to his
            empathetic nature. Dr Bansal is the Director of the 200-bedded NABH
            Accredited Multi-Specialty Jeevan Jyoti Hospital in Prayagraj, Uttar
            Pradesh. With his Fellowship from UK, he is future-ready for Robotic
            surgeries. Dr Arpit Bansal has trained under some of the finest
            surgeons in India, and emerged as an iconic figure in the field of
            medicine.
          </p>
          <p className="text-base text-gray-800 mb-4 text-justify">
            Dr Bansal is also among the biggest names in wildlife bird
            photography, in India locally, and in the world, globally. Out of
            the 1349 species of birds found in the country, Dr Bansal has
            already captured 1145 through his dynamic lense. There are only 25
            bird photographers who have done that. This feat places him at the
            6th position on the world famous website www.Ebird.org.{" "}
          </p>

          <p className="text-base text-gray-800 mb-4 text-justify">
            As a healthcare professional, Dr. Arpit Bansal is always keen on
            cure, rather than treating a symptom. Interested in changing
            lifestyle as a medicine, he launched his online social media
            presence, via Instagram and YouTube in 2023. Already at 68K organic
            followers, his reach is growing rapidly with his videos putting
            health information out there, for humans to benefit from. His
            engagement with his followers is enviable :)
          </p>

          <p className="text-base text-gray-800 mb-4 text-justify">
            Dr. Arpit Bansal conducts Cancer Awareness Programmes, especially in
            schools and colleges to enlighten youth about the importance of the
            Cervical Cancer Vaccine. Dr Arpit Bansal remained a proactive voice
            in the fight against COVID-19. He devotes time to motivational
            speeches, talks on environment, nature and wildlife conservation,
            and encourages students to make choices that benefit Mother Earth.
          </p>

          <p className="text-base text-gray-800 mb-4 text-justify">
            So captivated with the Blue Mind Movement by Dr Wallace J Nichols,
            he took up the 100 day challenge to be in, on, near, or under water,
            and decided to launch the Blue Mind India chapter. To be in your
            Blue Mind, to be in your moment, joyfully, is the source of living
            healthy, happy and successfully.
          </p>

          <p className="text-base text-gray-800 mb-4 text-justify">
            Being a TEDX speaker, a doctor interested in prevention and cure,
            meditative by nature, it is no wonder then that he is involved with
            longevity, ageing healthily, and stem cell research. The latest
            feather in his cap being the 9th IASRM Longevity Revolution
            Conference, New Delhi, where he was the opening speaker. His talk on
            hydration and ageing focussed on the importance of structured water
            for living to your highest potential, as a human being.
          </p>
          <p className="text-base text-gray-800 mb-4 text-justify">
            An active runner, a tree saver, an underwater meditation and water
            enthusiast, a healthcare professional, Dr Arpit Bansal has his Blue
            Mind On, 24/7. Leading by example in his profession and his
            passions.
          </p>
          <p className="text-base text-gray-800 mb-4 text-justify">
            His future goals include expanding his work in longevity, functional
            medicine, robotic surgeries and stem cell regenerative medicine. As
            also to spread the importance of GUT HEALTH and BLUE MIND to the
            youth and masses through his channel. He is determined to age
            healthily, age energetically and to be his best as a human being,
            living on planet earth, for the time he is here.
          </p>
          <div className="flex md:hidden  gap-4">
            <a
              onClick={showLoading}
              className="flex items-center bg-gradient-to-r from-[#171f58] to-blue-500 text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
            >
              <i className="ri-send-plane-line mr-2"></i> Book Appointment
            </a>
            {/* <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-2 border-black text-black py-2 px-4 rounded-lg hover:border-[#171f56] hover:text-[#171f56] transition"
              >
                <i className="ri-linkedin-box-line"></i>
              </a> */}
          </div>
        </div>
        <Modal
          centered
          footer={false}
          open={open}
          onCancel={() => setOpen(false)}
        >
          {loading ? <SkeletonLoader /> : <ContactForm />}
        </Modal>
      </section>
    </>
  );
};

export default About;
