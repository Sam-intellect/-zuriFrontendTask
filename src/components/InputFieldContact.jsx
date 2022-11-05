import React from 'react';

const InputFieldContact = (props) => {
  return (
    <>
      <label for="" className="block text-xl md:text-3xl">
        {props.label}
      </label>
      <div className="mt-1">
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.change}
          className="mt-1 px-3 py-2 md:h-16 md:text-2xl w-full border-solid border-2 border-gray-500 rounded-lg shadow-sm"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default InputFieldContact;
