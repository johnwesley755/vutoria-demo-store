import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow-lg mt-8 mb-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Privacy Policy
      </h1>
      <p className="text-gray-700 mb-4">
        At Vutoria, your privacy is of utmost importance to us. This Privacy
        Policy outlines how we collect, use, and protect your personal
        information when you use our platform.
      </p>
      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li>
          <strong>Information Collection:</strong> We collect personal
          information such as your name, email address, and payment details when
          you create an account or use our services.
        </li>
        <li>
          <strong>Usage of Information:</strong> Your information is used to:
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Provide and improve our services</li>
            <li>Send notifications and updates</li>
            <li>Ensure platform security</li>
          </ul>
        </li>
        <li>
          <strong>Data Sharing:</strong> We do not sell or share your personal
          information with third parties, except as required by law or with your
          explicit consent.
        </li>
        <li>
          <strong>Cookies:</strong> Our platform uses cookies to enhance user
          experience. By using the platform, you consent to our use of cookies.
        </li>
        <li>
          <strong>Security:</strong> We implement industry-standard measures to
          protect your data from unauthorized access and breaches.
        </li>
        <li>
          <strong>Your Rights:</strong> You have the right to:
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Access your personal data</li>
            <li>Request corrections to your data</li>
            <li>Request data deletion</li>
          </ul>
        </li>
        <li>
          <strong>Changes to Privacy Policy:</strong> We reserve the right to
          update this policy. Notifications of changes will be sent to your
          registered email.
        </li>
      </ol>
      <p className="text-gray-700 mt-4">
        If you have questions about this policy, please contact us at{" "}
        <a
          href="mailto:support@vutoria.com"
          className="text-purple-600 underline"
        >
          support@vutoria.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
