import React from "react";

const LinksButton = (props) => {
  return (
    <>
      <button className="font-sand text-center bg-grey p-5 md:p-10 font-bold rounded-lg">
        <a href={props.links}>{props.name}</a>
        {props.id}
      </button>
    </>
  );
};

export default LinksButton;
