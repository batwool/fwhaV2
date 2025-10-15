// src/email.js
import emailjs from "emailjs-com";

const sendBookingEmail = async (formData) => {
  const SERVICE_ID = "service_ncpgz2q";
  const TEMPLATE_ID = "template_pnr62sd";
  const PUBLIC_KEY = "ZOo7SxVfK4NkOVjmq";

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        // Optional: include current date/time
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY
    );

    console.log("Email sent successfully:", response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
};

export default sendBookingEmail;