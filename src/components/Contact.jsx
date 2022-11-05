import { React } from 'react';
import InputFieldContact from './InputFieldContact';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const name = 'Samuel';

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checked' ? checked : value,
    });
  };

  // for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // This will redirect to the home page
  const navigate = useNavigate();

  const goHome = (e) => {
    Object.keys(formErrors).length === 0 && isSubmit
      ? navigate('/')
      : console.log(Error);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  // Logic for Validation of form
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
    if (!values.agree) {
      errors.agree = 'Agreement is required!';
    }

    return errors;
  };

  return (
    <>
      {/* Beginning of the form */}
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
                {/* First Name field */}
                <InputFieldContact
                  label={'First name'}
                  id={'first_name'}
                  name={'firstName'}
                  type={'text'}
                  value={formValues.firstName}
                  change={handleChange}
                  placeholder={'Enter your first name'}
                />

                <p className="text-red">{formErrors.firstName}</p>
              </div>

              {/* Last Name field */}
              <div className="md:w-1/2">
                <InputFieldContact
                  label={'Last name'}
                  id={'last_name'}
                  name={'lastName'}
                  type={'text'}
                  value={formValues.lastName}
                  change={handleChange}
                  placeholder={'Enter your last name'}
                />

                <p className="text-red">{formErrors.lastName}</p>
              </div>
            </div>

            {/* Email field */}
            <div className="mt-8 md:mt-16">
              <InputFieldContact
                label={'Email'}
                id={'email'}
                name={'email'}
                type={'text'}
                value={formValues.email}
                change={handleChange}
                placeholder={'yourname@email.com'}
              />

              <p className="text-red">{formErrors.email}</p>
            </div>

            {/* Message field */}
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

              {/* Agreementfield */}
              <div className="flex mt-8 gap-4">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  name="agree"
                  value={formValues.agree}
                  onChange={handleChange}
                  className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                />
                <label class="mb-2 text-xl font-medium text-black">
                  You agree to providing your data to {name} who may contact
                  you.
                </label>
                <p className="text-red">{formErrors.agree}</p>
              </div>
            </div>

            {/* submit button */}
            <button
              onClick={goHome}
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
