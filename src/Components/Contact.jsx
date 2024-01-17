import React from "react";
import Form from "./Form";
import Direct from "./Direct";
const Contact = () => {
  return (
    <div className="bg-slate-50 py-10">
    <div className="container px-6 lg:py-16 lg:mx-auto  grid lg:grid-cols-2 gap-14 lg:gap-28">
      <Form />
      <Direct />
    </div>
    </div>
  );
};

export default Contact;
