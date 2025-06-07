import React from "react";
import { Row, Col, Divider } from "antd";
import "../styles/Privacy.css";

const Privacy = () => {
  return (
    <Row justify={"center"} className="terms-container py-30">
      <Col span={20}>
      <h1 className="terms-heading">Privacy Policy</h1>

      <p className="terms-paragraph text-center">
        Effective Date: [Insert Date]
        <br />
        Last Updated: [Insert Date]
      </p>

      <p className="terms-paragraph">
        At FinRule, Inc. (“FinRule,” “we,” “our,” or “us”), we value your
        privacy and are committed to protecting your personal data. This Privacy
        Policy explains how we collect, use, and protect your information when
        you access our platform and services via FinRule.io.
      </p>

      <p className="terms-paragraph">This policy is designed to comply with:</p>

      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>The General Data Protection Regulation (EU) 2016/679 (“GDPR”)</li>
        <li>
          The California Consumer Privacy Act (“CCPA”), as amended by the CPRA
        </li>
      </ul>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">1. Information We Collect</h2>
      <p className="terms-paragraph font-semibold">A. Personal Data</p>
      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Company name</li>
        <li>Role/title</li>
        <li>Phone number</li>
        <li>Payment or billing information</li>
        <li>Login credentials</li>
        <li>Any other information you voluntarily provide</li>
      </ul>

      <p className="terms-paragraph font-semibold">B. Usage Data</p>
      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>Device and browser information</li>
        <li>IP address</li>
        <li>Location (city-level geolocation)</li>
        <li>Date/time of access</li>
        <li>Pages visited and time spent</li>
        <li>Referring URLs</li>
        <li>Actions performed within the platform</li>
      </ul>

      <p className="terms-paragraph font-semibold">
        C. Sensitive Personal Information
      </p>
      <p className="terms-paragraph">
        We do not intentionally collect sensitive personal data unless required
        for legal compliance or by explicit consent.
      </p>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">2. Legal Basis for Processing (GDPR)</h2>
      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>
          Consent – When you voluntarily provide information or opt-in to
          communications
        </li>
        <li>
          Contract – To fulfill our obligations under a service agreement or
          terms of use
        </li>
        <li>Legal Obligation – To comply with applicable laws</li>
        <li>
          Legitimate Interest – To improve services, prevent fraud, and ensure
          security
        </li>
      </ul>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">3. How We Use Your Data</h2>
      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>Provide and maintain our services</li>
        <li>Personalize your experience</li>
        <li>Process transactions and manage subscriptions</li>
        <li>Communicate service-related announcements</li>
        <li>Send marketing and promotional content (with your consent)</li>
        <li>Improve our platform through analytics</li>
        <li>Enforce legal terms and prevent misuse</li>
      </ul>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">4. Sharing and Disclosure</h2>
      <p className="terms-paragraph">
        We do not sell your personal data. We may share your data with:
      </p>
      <ul className="terms-paragraph list-disc list-inside ml-4">
        <li>
          Service Providers: e.g., cloud hosting, analytics, CRM, billing
          partners
        </li>
        <li>
          Legal Authorities: if required to comply with laws or legal processes
        </li>
        <li>
          Business Transfers: in the event of a merger, acquisition, or sale of
          assets
        </li>
        <li>With Consent: for other purposes explicitly authorized by you</li>
      </ul>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">5. Your Rights</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <p className="terms-paragraph font-semibold">
            Under the GDPR (for EU/EEA users):
          </p>
          <ul className="terms-paragraph list-disc list-inside ml-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data ("right to be forgotten")</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your local supervisory authority</li>
          </ul>
        </Col>
        <Col xs={24} md={12}>
          <p className="terms-paragraph font-semibold">
            Under the CCPA (for California users):
          </p>
          <ul className="terms-paragraph list-disc list-inside ml-4">
            <li>Know what personal information we collect, use, and share</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of sale or sharing</li>
            <li>Correct inaccurate personal information</li>
            <li>Limit the use of sensitive personal information</li>
          </ul>
        </Col>
      </Row>
      <p className="terms-paragraph">
        You can exercise these rights by emailing{" "}
        <a className="text-green-500" href="mailto:privacy@finrule.io">
          privacy@finrule.io
        </a>
        .
      </p>

      <Divider className="terms-divider" />

      <h2 className="terms-subheading">6. Data Retention</h2>
      <p className="terms-paragraph">
        We retain personal data only as long as necessary to fulfill the
        purposes outlined in this policy, or as required by law, contract, or
        regulation.
      </p>

      <h2 className="terms-subheading">7. International Data Transfers</h2>
      <p className="terms-paragraph">
        We may process your data outside your jurisdiction, including in the
        United States. Where required, we implement Standard Contractual Clauses
        (SCCs) or other approved mechanisms to protect data transfers from the
        EU/EEA.
      </p>

      <h2 className="terms-subheading">8. Cookies and Tracking</h2>
      <p className="terms-paragraph">
        We use cookies and similar technologies for authentication, analytics,
        and personalization. You may opt out or manage cookie preferences
        through your browser settings or by using our cookie management tool (if
        available on our site).
        <br />
        For more details, refer to our Cookie Policy.
      </p>

      <h2 className="terms-subheading">9. Security</h2>
      <p className="terms-paragraph">
        We implement administrative, technical, and physical safeguards designed
        to protect your personal data. However, no system is 100% secure. Please
        notify us immediately if you suspect unauthorized use of your data.
      </p>

      <h2 className="terms-subheading">10. Third-Party Services</h2>
      <p className="terms-paragraph">
        Our platform may link to third-party services (e.g., Stripe, Google
        Analytics). This policy does not govern those services, and we encourage
        you to review their privacy policies.
      </p>

      <h2 className="terms-subheading">11. Children’s Privacy</h2>
      <p className="terms-paragraph">
        FinRule does not knowingly collect or process personal data from
        individuals under the age of 13 (or 16 where applicable under GDPR). If
        we learn that we have collected data from a child, we will take steps to
        delete such information.
      </p>

      <h2 className="terms-subheading">12. Updates to This Policy</h2>
      <p className="terms-paragraph">
        We may revise this Privacy Policy periodically. If we make material
        changes, we will notify you via email or a notice on our website. The
        updated version will be indicated by an updated “Effective Date” at the
        top.
      </p>

      <h2 className="terms-subheading">13. Contact Us</h2>
      <p className="terms-paragraph">
        If you have questions or concerns about this Privacy Policy or how your
        data is handled, please contact us:
        <br />
        <strong>FinRule, Inc.</strong>
        <br />
        Website:{" "}
        <a
          className="text-green-500"
          href="https://FinRule.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://FinRule.io
        </a>
        <br />
        Email:{" "}
        <a className="text-green-500" href="mailto:privacy@finrule.io">
          privacy@finrule.io
        </a>
      </p>
      </Col>
      
    </Row>
  );
};

export default Privacy;
