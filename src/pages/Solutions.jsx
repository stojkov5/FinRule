/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { BadgeCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import "../styles/Solutions.css";
import Benefits from "../components/Benefits";
import Resources from "../components/Resources"; 

const ListItem = ({ children }) => (
  <li className="custom-list-item">
    <BadgeCheck className="check-icon" />
    <span>{children}</span>
  </li>
);

const Solutions = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("solutions.industryChallenges.title"),
      content: (
        <>
          <p>{t("solutions.industryChallenges.description")}</p>
          <ul className="custom-list">
            <ListItem>{t("solutions.industryChallenges.point1")}</ListItem>
            <ListItem>{t("solutions.industryChallenges.point2")}</ListItem>
            <ListItem>{t("solutions.industryChallenges.point3")}</ListItem>
          </ul>
        </>
      ),
      background: "/Images/Solutions/Challenge.png",
    },
    {
      title: t("solutions.howWeHelp.title"),
      content: (
        <ul className="custom-list">
          <ListItem>{t("solutions.howWeHelp.point1")}</ListItem>
          <ListItem>{t("solutions.howWeHelp.point2")}</ListItem>
          <ListItem>{t("solutions.howWeHelp.point3")}</ListItem>
        </ul>
      ),
      background: "/Images/Solutions/Help.jpg",
    },
    {
      title: t("solutions.whoWeServe.title"),
      content: (
        <ul className="custom-list">
          <ListItem>{t("solutions.whoWeServe.point1")}</ListItem>
          <ListItem>{t("solutions.whoWeServe.point2")}</ListItem>
          <ListItem>{t("solutions.whoWeServe.point3")}</ListItem>
        </ul>
      ),
      background: "/Images/Solutions/Bank.png",
    },
    {
      title: t("solutions.useCases.title"),
      content: (
        <ul className="custom-list">
          <ListItem>{t("solutions.useCases.point1")}</ListItem>
          <ListItem>{t("solutions.useCases.point2")}</ListItem>
          <ListItem>{t("solutions.useCases.point3")}</ListItem>
        </ul>
      ),
      background: "/Images/Solutions/Case.png",
    },
  ];

  const SectionBlock = ({ section, index }) => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    const slideFrom = index % 2 === 0 ? -100 : 100;

    return (
      <Row
        gutter={[32, 32]}
        justify="space-between"
        align="middle"
        className="solutions-row"
        key={index}
        ref={ref}
      >
        {index % 2 === 0 ? (
          <>
            <Col xs={24} md={16}>
              <motion.div
                className="solutions-box"
                style={{ "--bg-image": `url(${section.background})` }}
                initial={{ opacity: 0, x: slideFrom }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="solutions-heading">{section.title}</h3>
                <div className="solutions-content">{section.content}</div>
              </motion.div>
            </Col>
            <Col xs={0} md={6} />
          </>
        ) : (
          <>
            <Col xs={0} md={6} />
            <Col xs={24} md={16}>
              <motion.div
                className="solutions-box"
                style={{ "--bg-image": `url(${section.background})` }}
                initial={{ opacity: 0, x: slideFrom }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="solutions-heading">{section.title}</h3>
                <div className="solutions-content">{section.content}</div>
              </motion.div>
            </Col>
          </>
        )}
      </Row>
    );
  };

  return (
    <Row className="solutions-section" justify="center">
      <Col span={20}>
        <h2 className="page-title text-center">{t("solutions.title")}</h2>
        {sections.map((section, index) => (
          <SectionBlock key={index} section={section} index={index} />
        ))}
        <Benefits />
        <Resources />
      </Col>
    </Row>
  );
};

export default Solutions;
