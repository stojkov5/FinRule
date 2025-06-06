/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import "../styles/About.css";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedSection = ({ children, direction = "left" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("about.companyOverview.title"),
      content: t("about.companyOverview.content"),
      background: "/Images/About/AI.png",
    },
    {
      title: t("about.coreValues.title"),
      content: (
        <ul className="about-list">
          <li>
            <strong>{t("about.coreValues.items.innovation")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.integrity")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.partnership")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.scalability")}</strong>
          </li>
        </ul>
      ),
      background: "/Images/About/Core.png",
    },
    {
      title: t("about.ourJourney.title"),
      content: t("about.ourJourney.content"),
      background: "/FinRule.png",
    },
    {
      title: t("about.leadershipTeam.title"),
      content: t("about.leadershipTeam.content"),
      background: "/Images/About/Leadership.png",
    },
  ];

  return (
    <Row className="about-section" justify="center">
      <Col span={20}>
        <h2 className="page-title montserrat-600 text-center">
          {t("about.title")}
        </h2>

        {sections.map((section, index) => (
          <AnimatedSection
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Row
              gutter={[32, 32]}
              justify="space-between"
              align="middle"
              className="about-row h-full w-full"
            >
              {index % 2 === 0 ? (
                <>
                  <Col xs={24} md={16} order={{ xs: 2, md: 1 }}>
                    <div className="about-section-box">
                      <h3 className="about-heading">{section.title}</h3>
                      <div className="about-content">{section.content}</div>
                    </div>
                  </Col>
                  <Col xs={24} md={6} order={{ xs: 1, md: 2 }}>
                    <div className="about-image h-full w-full">
                      <img
                        src={section.background}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={24} md={6}>
                    <div className="about-image h-full w-full">
                      <img
                        src={section.background}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={16}>
                    <div className="about-section-box">
                      <h3 className="about-heading">{section.title}</h3>
                      <div className="about-content">{section.content}</div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </AnimatedSection>
        ))}
      </Col>
    </Row>
  );
};

export default AboutUs;
