/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import "../styles/Product.css";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const features = [
    t("product.features.workflow", { returnObjects: true }),
    t("product.features.document", { returnObjects: true }),
    t("product.features.ai", { returnObjects: true }),
    t("product.features.etrr", { returnObjects: true }),
    t("product.features.compliance", { returnObjects: true }),
    t("product.features.integrations", { returnObjects: true }),
  ];

  return (
    <Row
      justify={"center"}
      className="product-section"
      aria-labelledby="product-heading"
    >
      <Col span={20}>
        <div className="container">
          <motion.h2
            id="product-heading"
            className="product-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            {t("product.heading")}
          </motion.h2>

          <motion.div
            className="intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.2}
          >
            <h3 className="product-subheading"> {t("product.subheading")}</h3>
            <p className="product-paragraph">{t("product.description")}</p>
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
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
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
            <h3 className="product-subheading">
              {t("product.conclusion.subheading")}
            </h3>
            <p className="product-paragraph">
              {t("product.conclusion.paragraph")}
            </p>
          </motion.div>
        </div>
      </Col>
    </Row>
  );
}
