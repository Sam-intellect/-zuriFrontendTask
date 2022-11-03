import React from 'react';

const name = 'Samuel';

const Contact = () => {
  return (
    <>
      <div className="container linktree mx-5 mt-20 md:mx-auto">
        <div className="flex flex-col gap-4  md:m-64 md:mt-1 md:gap-10">
          <h1 className="text-3xl md:text-5xl  font-bold text-black font-sand">
            Contact Me
          </h1>
          <p className="md:text-3xl font-mono">
            Hi there, contact me to ask me about anything you have in mind.
          </p>

          <form action="" className="mt-5 md:mt-16 mr-10">
            <div className="flex md:flex-row flex-col gap-10 md:gap-16">
              <div className="md:w-1/2">
                <label for="" className="block text-xl md:text-3xl">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="firstName"
                    type="text"
                    className="mt-1 px-3 py-2 h-16 text-2xl w-full border-dotted border-2 border-gray-500 rounded-lg shadow-sm"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <label for="" className="block text-xl md:text-3xl">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last Name"
                    type="text"
                    className="mt-1 px-3 py-2 h-16 text-2xl w-full border-dotted border-2 border-gray-500 rounded-lg shadow-sm"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-16">
              <label for="" className="block text-xl md:text-3xl">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 px-3 py-2 h-16 text-2xl w-full border-dotted border-2 border-gray-500 rounded-lg shadow-sm"
                  placeholder="yourname@email.com"
                  required
                />
              </div>
            </div>
            <div className="mt-8 md:mt-16">
              <label for="" className="block text-xl md:text-3xl">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  className="mt-1 px-3 py-2 h-40 text-2xl w-full border-dotted border-2 border-gray-500 rounded-lg shadow-sm"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  required
                />
              </div>

              <div className="flex mt-8 gap-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                />
                <label
                  for="link-checkbox"
                  class="mb-2 text-xl font-medium text-black"
                >
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
              </div>
            </div>
          </form>
          <button
            class="bg-blue p-3 mr-10 rounded-lg text-white text-2xl text-bold font-sand drop-shadow-lg"
            id="btn__submit"
          >
            Send message
          </button>
        </div>
      </div>
      <hr className="bg-grey h-1 mt-16 md:mx-32" />
    </>
  );
};

export default Contact;
