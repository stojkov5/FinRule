/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Resources.css";

const Resources = () => {
  const { t } = useTranslation();

  const resourceItems = [
    t("resources.items.videos"),
    t("resources.items.caseStudies"),
    t("resources.items.guides"),
    t("resources.items.webinars"),
    t("resources.items.blog"),
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="resources-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="page-title" variants={containerVariants}>
        {t("resources.title")}
      </motion.h2>

      <Row justify="center" className="resources-row">
        <Col span={24}>
          <motion.div
            className="resources-box bg-blue-100/10 rounded backdrop-blur-md"
            variants={containerVariants}
          >
            <Row justify={"center"}>
              <Col md={12}>
                <motion.h3
                  className="resources-heading"
                  variants={containerVariants}
                >
                  {t("resources.subtitle")}
                </motion.h3>
                <motion.p
                  className="resources-content mb-6"
                  variants={containerVariants}
                >
                  {t("resources.description")}
                </motion.p>

                <motion.div
                  className="resources-content"
                  variants={containerVariants}
                >
                  <h4 className="font-semibold text-white mb-3 text-lg">
                    {t("resources.upcoming")}
                  </h4>
                  <motion.ul
                    className="custom-list"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {resourceItems.map((item, index) => (
                      <motion.li
                        key={index}
                        className="custom-list-item"
                        variants={itemVariants}
                      >
                        <CheckCircle className="check-icon" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </Col>

              <Col md={12} className="image-section">
                <motion.img
                  src="./Images/Solutions/Knowledge.png"
                  alt={t("resources.imageAlt")}
                  className="object-contain w-70"
                  variants={containerVariants}
                />
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </motion.section>
  );
};

export default Resources;
