import React from "react";
import about from '../assets/about.jpg'


const About = () => {
  return (
    <div className="bg-slate-100 lg:py-32 p-8 lg:p-0">
    <div className="grid lg:grid-cols-2 gap-12 lg:mx-12 ">
      <div className="col-span-1">
        <img src={about} alt="about us" />
      </div>
        <div className="col-span-1 flex justify-center items-center">
          <div>
        <h2 className="pb-4 text-3xl font-bold">About Us</h2>
        <p className="lg:text-[15px] text-sm text-gray-800 w-5/6 leading-6 lg:leading-7">
          RSCol Generator Maintenance App is your ultimate solution for
          streamlined and proactive generator management. With real-time
          monitoring, proactive alerts, and an intuitive user-friendly
          dashboard, we empower you to maximize performance, extend lifespan,
          and minimize downtime. Our focus on user-centric design ensures
          accessibility for all, and with remote management capabilities, you
          can oversee your generators from anywhere. Trust in our commitment to
          reliability and security as we prioritize the integrity and
          confidentiality of your data. Join us on this journey to enhance the
          efficiency and peace of mind in managing your generator fleet with
          RSCol Generator Maintenance App.
            </p>
          </div>
      </div>
    </div>
    </div>
  );
};

export default About;
