import React from "react";

const LinksButton = (props) => {
  return (
    <>
      <div className="flex flex-col gap-5 mx-5 mt-20">
        <button className="font-sand text-center bg-grey p-5 rounded-lg">
          {props.link}
        </button>
      </div>
    </>
  );
};

export default LinksButton;
