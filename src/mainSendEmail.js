const emailSending = (number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email Sent");
    }, number);
  });
};

const sendEmail = async (data) => {
  console.log("Sending email...");
  
  // Intentional delay for 3 seconds
  await emailSending(3000);

  console.log("Email sent to:", data.email);
};

export default sendEmail;
