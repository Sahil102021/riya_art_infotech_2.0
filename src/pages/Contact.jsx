import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const countryCode = [
  {
    no: "+91",
  },
  {
    no: "+1",
  },
  {
    no: "+5",
  },
  {
    no: "+8",
  },
];

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      location: "",
      contactCode: "+91",
      contactNumber: "",
      company: "",
      message: "",
      need: "",
      referred: "",
      stage: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      location: Yup.string().required("Location is required"),
      contactNumber: Yup.string().required("Contact Number is required"),
      company: Yup.string().required("Company is required"),
      message: Yup.string().required("Message is required"),
      need: Yup.string().required("Select a need"),
      referred: Yup.string().required("Referral status required"),
      stage: Yup.string().required("Business stage required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm placeholder-gray-400";

  return (
    <section className="w-full">
      <div className="main-container">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12">
          {/* Info Panel */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Let’s Connect</h2>
            <p className="text-gray-600 text-lg">
              We’d love to hear from you. Fill in the form to start a
              conversation.
            </p>
            <div className="space-y-4 text-gray-700 text-base">
              <p className="flex items-center gap-3">
                📍 123 Business Road, Metropolis
              </p>
              <p className="flex items-center gap-3">📞 +91 1234567890</p>
              <p className="flex items-center gap-3">
                📧 hello@yourcompany.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="bg-gray-50 p-2 sm:p-6 rounded-2xl shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="fullName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className={inputStyles}
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={inputStyles}
              />
              <input
                name="location"
                placeholder="Location"
                onChange={formik.handleChange}
                value={formik.values.location}
                className={inputStyles}
              />
              <input
                name="company"
                placeholder="Company"
                onChange={formik.handleChange}
                value={formik.values.company}
                className={inputStyles}
              />
              <select
                name="contactCode"
                onChange={formik.handleChange}
                value={formik.values.contactCode}
                className={inputStyles}
              >
                {countryCode.map((el,i) => {
                  return <option key={i} value={el.no}>{el.no}</option>;
                })}
              </select>
              <input
                name="contactNumber"
                placeholder="Contact Number"
                onChange={formik.handleChange}
                value={formik.values.contactNumber}
                className={inputStyles}
              />
              <select
                name="need"
                onChange={formik.handleChange}
                value={formik.values.need}
                className={inputStyles}
              >
                <option value="">Select Need</option>
                <option value="all">All</option>
                <option value="brand">Brand</option>
                <option value="mobile">Mobile</option>
                <option value="website">Website</option>
              </select>
              <select
                name="referred"
                onChange={formik.handleChange}
                value={formik.values.referred}
                className={inputStyles}
              >
                <option value="">Referred?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select
                name="stage"
                onChange={formik.handleChange}
                value={formik.values.stage}
                className={`${inputStyles} sm:col-span-2`}
              >
                <option value="">Business Stage</option>
                <option value="startup">Startup</option>
                <option value="early-stage">Early Stage</option>
                <option value="established">Established</option>
              </select>
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message..."
              onChange={formik.handleChange}
              value={formik.values.message}
              className={inputStyles}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
