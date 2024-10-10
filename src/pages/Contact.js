import React from "react";
import PageHeading from "../common/PageHeading";

const ContactUs = () => {
  
  return (
    <div className="">
      <PageHeading home={"home"} pagename={"Contact Us"} />
      <div className="box">
        <img className="contacImg" src="https://www.khaticraft.com/cdn/shop/files/Set_161734069_2048px_lbfgt.png?v=1696399943&width=2048"/>
        <form className="form">
          <label>
            <h1 className="label">Name<sup></sup></h1>
            <input className="border p-2 inputt" type="text" required placeholder="Enter Your Name" />
          </label>
          <label>
            <h1 className="label">Phone Number</h1>
            <input className="border p-2 inputt" type="text" required placeholder="Enter Your Name" />
          </label>
          <label>
            <h1 className="label">Message</h1>
            <textarea className="area border h-[50px] p-2 inputt" type="text" required placeholder="Enter Your Name" />
          </label>
          <button className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
