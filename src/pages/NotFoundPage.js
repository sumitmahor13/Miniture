import React from "react";
import PageHeading from "../common/PageHeading";

const NotFoundPage = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"Not Found"} />
      <div className="flex justify-center items-center font-bold">
      <h1 className="text-5xl mt-10">4Õ4 Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
