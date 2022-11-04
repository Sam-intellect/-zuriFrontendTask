import { React } from 'react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const name = 'Samuel';

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    checkbox: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (!values.firstName) {
      errors.firstName = 'First Name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regEx.test(values.email)) {
      errors.email = 'Enter valid email format';
    }
    if (!values.message) {
      errors.message = 'Message is required!';
    }
    if (!values.checkbox) {
      errors.checkbox = 'Aggreement is required!';
    }

    return errors;
  };

  return (
    <>
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <div className="container linktree mx-5 mt-10 md:mt-20 md:mx-auto">
        <div className="flex flex-col gap-4  md:m-64 md:mt-1 md:gap-10">
          <h1 className="text-3xl md:text-5xl  font-bold text-black font-sand">
            Contact Me
          </h1>
          <p className="md:text-3xl font-mono">
            Hi there, contact me to ask me about anything you have in mind.
          </p>

          <form className="mt-5 md:mt-16 mr-10" onSubmit={handleSubmit}>
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
                    value={formValues.firstName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 md:h-16 md:text-2xl w-full border-solid border-2 border-gray-500 rounded-lg shadow-sm"
                    placeholder="Enter your first name"
                  />
                </div>
                <p className="text-red">{formErrors.firstName}</p>
              </div>

              <div className="md:w-1/2">
                <label for="" className="block text-xl md:text-3xl">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleChange}
                    className="mt-1 px-3 py-2 md:h-16 md:text-2xl w-full border-solid border-2 border-gray-500 rounded-lg shadow-sm"
                    placeholder="Enter your last name"
                  />
                </div>
                <p className="text-red">{formErrors.lastName}</p>
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
                  type="text"
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 md:h-16  md:text-2xl w-full border-solid border-2 border-gray-500 rounded-lg shadow-sm"
                  placeholder="yourname@email.com"
                />
              </div>
              <p className="text-red">{formErrors.email}</p>
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
                  value={formValues.message}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 h-40 md:h-40 md:text-2xl w-full border-solid border-2 border-gray-500 rounded-lg shadow-sm"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                />
                <p className="text-red">{formErrors.message}</p>
              </div>

              <div className="flex mt-8 gap-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value={formValues.checkbox}
                  onChange={handleChange}
                  class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                />
                <label class="mb-2 text-xl font-medium text-black">
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
                <p className="text-red">{formErrors.checkbox}</p>
              </div>
            </div>
            <button
              class="bg-blue p-3 mr-10 mt-11 rounded-lg text-white w-full text-2xl text-bold font-sand drop-shadow-lg"
              id="btn__submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <hr className="bg-grey h-1 mt-16 md:mx-32" />
    </>
  );
};

export default Contact;
