import React from "react";

const LinksButton = (props) => {
  return (
    <>
      <button className="font-sand text-center bg-grey p-5 md:p-10 font-bold rounded-lg">
        {props.link}
      </button>
    </>
  );
};

export default LinksButton;
