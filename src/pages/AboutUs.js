import React from "react";
import PageHeading from "../common/PageHeading";
import { Link } from "react-router-dom";
import { arriveItems } from "../data/Data";
import { FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />

      <div className="w-10/12 m-auto">
        <div>
          <div className=" m-auto ">
            <div className="flex items-center mt-10 aboutBOx">
              <div className="">
                <h1 className="font-semibold text-4xl">Miniture</h1>
                <p className="my-4">
                  In 2023, we started Urban Ladder with a vision - to make a
                  million homes beautiful. Back then, our catalogue featured
                  just 35 designs. Yet, when our customers shared photographs of
                  their homes, we saw they were remarkably distinct. The same
                  table, the same chair was used differently by different
                  people. This told us something. People want their homes to be
                  unique. We also realized that people are a lot happier
                  creating things than they are buying things. We are a
                  creative, imaginative, expressive species. And our homes are
                  just one of the many canvases we have at our disposal.
                  <br />
                  <br /> Today, we understand that we’re here not just to sell
                  well-designed products. We’re here to help you create spaces
                  that mirror who you are. At Urban Ladder, we want you to
                  discover the joy of creating. Starting with your home. We want
                  you to think of the setting up of a space as an energizing,
                  creative pursuit. To breathe life into empty rooms with your
                  ideas. To take a few square feet of nothing, and transform it
                  into something beautiful.
                </p>
                <h1 className="font-semibold text-4xl">Our Values</h1>
                <p className="my-4">
                  Our Values Customer Obsession: Customers are at the center of
                  whatever we do at Urban Ladder. We ensure that we get the
                  right customer solution in all our initiatives. We establish a
                  long-term relationship with every customer and aim to delight
                  them in every interaction. We aim to set the global benchmark
                  for customer happiness scores. Honesty & Transparency: We are
                  honest, ethical, and trustworthy in the way we live life. We
                  hold the highest standards of corporate governance in all our
                  activities. We communicate transparently with all our
                  stakeholders. When we make mistakes, we are honest and upfront
                  about owning up to them. Action Orientation: We have a bias
                  for action. We empower our teams to take fast and well
                  informed decisions. We continuously iterate and learn from our
                  mistakes. Scale and robustness are built in as we move along.
                  Stepping Up: We take charge, go the extra mile, and think
                  differently to find innovative solutions. When in doubt, we
                  push ourselves harder to solve newer challenges and get better
                  solutions. Efficiency: We are here to build a long-term
                  sustainable business. We aim to do more with less and focus on
                  zero waste. We believe that a self-sustaining business will be
                  responsible and solve customer problems in the right manner.
                </p>
                <h1 className="font-semibold text-4xl">Partner With Us</h1>
                <p className="my-4">
                  Everyday, we add stunning new products to our range to help
                  our customers make their homes beautiful. If you would like
                  like to partner with us and join our journey of making a
                  million beautiful homes, write to us at <span className="text-[#2a31ff]">@miniture.com</span>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {arriveItems.map((item, index) => (
                  <div key={index}>
                    <div className="">
                      <div
                        className={`relative rounded-3xl overflow-hidden ${
                          index === 4 ? "fifth-image" : ""
                        }`}
                      >
                        <img
                          src={item.img}
                          alt="img"
                          className="rounded-3xl hover:scale-110 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
