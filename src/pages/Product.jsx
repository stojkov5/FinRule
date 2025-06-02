/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import "../styles/Product.css";

const features = [
  {
    title: "Custom Workflow Management",
    points: [
      "Configure workflows for retail, commercial, or SME loans.",
      "Enable branch-specific or centralized decision-making processes.",
    ],
  },
  {
    title: "Secure Document Management",
    points: [
      "Real-time access to customer-submitted documents.",
      "Built-in e-signature and approval flows.",
    ],
  },
  {
    title: "AI-Enhanced Underwriting",
    points: [
      "Analyze risk using automated financial spreading and integrated third-party data sources.",
      "Generate credit scores, risk ratings, and term sheets instantly.",
    ],
  },
  {
    title: "ETRR (Electronic Tax Return Reader)",
    points: [
      "Instantly parse and capture borrower data from uploaded tax returns.",
      "Eliminate data entry and reduce errors in income verification.",
    ],
  },
  {
    title: "Digital Compliance Engine",
    points: [
      "Track all activities in real-time audit logs.",
      "Get automatic alerts for any deviation from FDIC or CFPB guidelines.",
    ],
  },
  {
    title: "Real-Time Integrations",
    points: [
      "API access to core systems (e.g., FIS, Encompass).",
      "CRM and compliance partner integrations.",
    ],
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Product() {
  return (
    <section className="product-section" aria-labelledby="product-heading">
      <div className="container">
        <motion.h2
          id="product-heading"
          className="product-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          PRODUCT
        </motion.h2>

        <motion.div
          className="intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.2}
        >
          <h3 className="product-subheading">Platform Overview</h3>
          <p className="product-paragraph">
            FinRule’s Loan Origination System is engineered for digital lending
            at scale. The platform provides robust automation across every step
            of the loan lifecycle—allowing lenders to reduce manual work,
            increase underwriting precision, and meet growing customer
            expectations for seamless, online services.
          </p>
        </motion.div>

        <motion.div
          className="features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Row gutter={[32, 32]}>
            {features.map((feature, idx) => (
              <Col xs={24} md={12} key={idx}>
                <motion.div
                  className="feature-card"
                  variants={fadeInUp}
                  custom={idx * 0.2}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="feature-title">{feature.title}</h4>
                  <ul className="feature-list">
                    {feature.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          className="conclusion"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.3}
        >
          <h3 className="product-subheading">User Experience</h3>
          <p className="product-paragraph">
            Designed for ease of use with a modern UI, intuitive dashboards, and
            customizable role-based views.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
