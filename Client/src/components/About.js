import React from "react";
import images from "../image/About/univer.jpg";
import Acadmic from "../image/About/Acadmic.jpg";
import { Link } from "react-router-dom";

import campusn from "../image/About/campusn.jpg";

export default function About() {
  return (
    <div className="">
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={images}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                History
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                Indian Institute of Information Technology, Lucknow (IIIT
                Lucknow) is one of the 20 IIITs being set up by the Central
                Government in Public Private Partnership (PPP) mode. IIIT
                Lucknow admitted its first batch of B. Tech. in Information
                Technology with an intake of 50 students w.e.f. the academic
                session 2015-16. It currently offers all the amenities ,academic
                and non-academic to its students that can help them flourish and
                serve the nation with all their apprehension in the various
                fields of technology. The admission is made through central
                counselling of candidates who qualify in JEE (Mains).{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Academics
              </h1>

              <p className="mb-8 leading-relaxed text-justify">
                IIIT Lucknow offers rigorous academic programs that blend
                theoretical knowledge with practical application. The institute
                provides undergraduate, postgraduate, and doctoral programs with
                a strong emphasis on Computer Science, Artificial Intelligence,
                Data Science, and Information Security. IIIT Lucknow's academic
                environment is enriched by its distinguished faculty, who are
                experts in their respective fields, bringing a wealth of
                experience from both academia and industry. The curriculum is
                carefully designed to meet the evolving demands of the IT
                industry, incorporating the latest advancements in technology
                and research. Students at IIIT Lucknow benefit from a robust
                research culture, with opportunities to engage in innovative
                projects and collaborate with leading organizations. The
                institute also emphasizes holistic development through various
                co-curricular and extra-curricular activities, ensuring students
                are well-prepared for the challenges of the global workforce.
                With state-of-the-art infrastructure and a vibrant campus life,
                IIIT Lucknow stands as a premier institution shaping the future
                of IT professionals in India.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={Acadmic}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded "
                alt="hero"
                src={campusn}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font w-[100%] text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Campus life
              </h1>
              <p className="mb-8 leading-relaxed text-justify">
                Campus life at IIIT Lucknow is vibrant and dynamic, offering
                students a well-rounded experience beyond academics. The campus
                hosts a variety of clubs and societies, fostering interests in
                coding, robotics, literature, and arts. Students actively
                participate in cultural festivals, technical workshops,
                hackathons, and sports, creating a balanced environment for
                personal and professional growth. The modern infrastructure,
                including well-equipped labs, hostels, and recreational
                facilities, ensures a comfortable living and learning
                experience. The close-knit community and collaborative
                atmosphere on campus help students build lasting friendships and
                develop essential life skills.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
