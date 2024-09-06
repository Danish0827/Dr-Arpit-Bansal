"use client";
import { sendContactForm } from "@/lib/ContactForm";
import { ArrowRight, MailIcon, MapPin, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phoneCode, setPhoneCode] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const emailSent = await sendContactForm(
      name || undefined, // Convert null to undefined
      email || undefined,
      phoneCode || undefined,
      phone || undefined,
      message || undefined
    );

    if (emailSent) {
      // Set submitting to false and clear form fields
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhoneCode("");
      setPhone("");
      setMessage("");

      // Notify success with Swal
      Swal.fire({
        title: "Success!",
        text: "Our team will reach you soon! Thanks",
        icon: "success",
      });

      try {
        const response = await fetch(
          "https://rubyeng.demo-web.live/wp-json/contact_form/v1/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name || "",
              email: email || "",
              contact: `${phone || ""}`,
              message: message || "",
            }),
          }
        );

        if (!response.ok) {
          setSubmitting(false);
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    } else {
      // Set submitting to false and notify failure
      setSubmitting(false);
      Swal.fire({
        title: "Failed!",
        text: "Form Submission Failed!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="relative p-3 border-t-4 border-b-4 border-primary rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
        <form onSubmit={handleContactSubmit}>
          <div className="mb-6">
            <input
              type="text"
              required
              name="name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className=" border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              required
              name="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            />
          </div>
          <div className="mb-6 flex gap-2 w-full">
            <input
              type="number"
              required
              name="phone"
              value={phone || ""}
              placeholder="9876543210"
              onChange={(e) => setPhone(e.target.value)}
              className="dark:border-dark-3 border-gray-300 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md  border py-3 px-[14px] text-base outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              rows={6}
              required
              name="message"
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-base text-white bg-gradient-to-r from-blue-500 to-[#171f58] font-bold p-3 transition border shadow-lg rounded-full bg-primary hover:bg-opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
