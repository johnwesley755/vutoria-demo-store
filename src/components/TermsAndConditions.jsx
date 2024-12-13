import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow-lg mt-8 mb-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Terms and Conditions
      </h1>
      <p className="text-gray-700 mb-4">
        Welcome to Vutoria! By accessing or using our platform, you agree to
        comply with and be bound by the following terms and conditions. Please
        read them carefully before using our service.
      </p>
      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li>
          <strong>Acceptance of Terms:</strong> By creating an account or using
          our platform, you agree to these terms in full. If you do not agree,
          please do not use our services.
        </li>
        <li>
          <strong>Eligibility:</strong> You must be at least 18 years old or
          have parental consent to use this platform.
        </li>
        <li>
          <strong>Account Responsibility:</strong> You are responsible for
          maintaining the confidentiality of your account information and are
          liable for all activities under your account.
        </li>
        <li>
          <strong>Prohibited Activities:</strong> You agree not to misuse the
          platform for any illegal or unauthorized activities, including
          hacking, spamming, or distributing malware.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content, trademarks, and
          logos on the platform belong to Vutoria. Unauthorized reproduction or
          distribution is prohibited.
        </li>
        <li>
          <strong>Termination:</strong> We reserve the right to suspend or
          terminate your account if you violate these terms.
        </li>
        <li>
          <strong>Changes to Terms:</strong> Vutoria reserves the right to
          update these terms at any time. Continued use of the platform implies
          acceptance of updated terms.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> Vutoria is not responsible
          for any damages resulting from the use of the platform.
        </li>
      </ol>
      <p className="text-gray-700 mt-4">
        If you have any questions about these terms, feel free to contact us at{" "}
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

export default TermsAndConditions;
