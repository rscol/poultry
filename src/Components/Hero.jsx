import React from "react";
import Button from "./Button";
import gen from "../assets/gen.jpg";

const Hero = () => {
  return (
    <div className="container my-10 lg:my-0 mx-4 mb-16 lg:mx-12 grid lg:grid-cols-2 gap-16">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-6">
          <h2 className="lg:text-6xl text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Generator Maintainance App
          </h2>
          <div>
            <p className="text-md font-medium text-green-600">
              Welcome to Generator Maintenance App!
            </p>
            <p className="text-sm text-gray-500">
              your all-in-one solution for efficient and reliable generator
              management. Our application is designed to streamline the
              monitoring and maintenance of your generators, ensuring optimal
              performance and minimizing downtime.
            </p>
          </div>
          <div>
            <Button text="Login " variant="primary" to="/SignInForm"/>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={gen}
          alt="gen"
          width={340}
          height={50}
          className="lg:w-full h-[80vh]"
        />
      </div>
    </div>
  );
};

export default Hero;
