import React from "react";

const LinksButton = (props) => {
  return (
    <>
      <a
        className="font-sand text-center bg-grey p-5 md:p-10 font-bold rounded-lg"
        id={props.id}
        href={props.links}
      >
        {props.name}
      </a>
    </>
  );
};

export default LinksButton;
