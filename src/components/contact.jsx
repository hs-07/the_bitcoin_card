"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui";

const Contact = () => {
  const [formData, setFormData] = useState({
    bitcoin_address: "",
    full_name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl =
        "https://script.google.com/macros/s/AKfycbwvLlAZiTVzGwK4KIAnAVmcSCevuRmEICKaDzkPwJUUx8Tq7Wom0dLSZqTRO2loj_8nQA/exec";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Successfully joined the waiting list!",
        });
        // Reset form after successful submission
        setFormData({
          bitcoin_address: "",
          full_name: "",
          email: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to submit. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 md:p-16 bg-white md:bg-bg_color flex flex-col md:flex-row gap-8 md:gap-4 items-center">
      <div className="font-onest text-[40px] md:text-[64px] lg:text-[96px] font-bold text-center leading-[1.2] md:text-start text-secondary md:w-1/2">
        Join the waiting list
      </div>
      <div className="w-full md:w-1/2 bg-white rounded-3xl p-4 md:p-6 flex flex-col">
        {submitStatus && (
          <div
            className={`mb-4 p-4 font-oxygen rounded-xl ${
              submitStatus.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col font-onest">
            <span className="text-[#9195A3] font-[500]">Bitcoin Address</span>
            <textarea
              name="bitcoin_address"
              value={formData.bitcoin_address}
              onChange={handleChange}
              className="border border-gray-400 rounded-xl p-4 h-[100px] mt-2"
              placeholder="Paste your bitcoin address"
              required
            />
          </div>
          <div className="flex flex-col font-onest">
            <span className="text-[#9195A3] font-[500]">Full Name</span>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="border border-gray-400 rounded-xl p-4 mt-2"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="flex flex-col font-onest">
            <span className="text-[#9195A3] font-[500]">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 rounded-xl p-4 mt-2"
              placeholder="Enter email id"
              required
            />
          </div>
          <Button
            type={"PRIMARY"}
            text={isSubmitting ? "Submitting..." : "Submit"}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
