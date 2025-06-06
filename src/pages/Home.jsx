/* eslint-disable no-unused-vars */
import Logo from "/FinRule.png";
import "../styles/Home.css";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInStaggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop Intro Section */}
      <Row
        justify="center"
        className="intro-section w-full min-h-screen hidden md:flex"
      >
        <Col span={20}>
          <Row className="items-center justify-between min-h-screen">
            {/* Text */}
            <Col xs={24} md={12} className="flex items-center justify-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white text-center"
              >
                <TypeAnimation
                  sequence={[t("home.firstHeading"), 2000]}
                  wrapper="h1"
                  cursor
                  repeat={Infinity}
                  className="heading-text"
                />
              </motion.div>
            </Col>

            {/* Logo */}
            <Col xs={24} md={12} className="flex items-center justify-center">
              <motion.img
                src={Logo}
                alt="FinRule Logo"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-full h-auto"
              />
            </Col>
          </Row>

          {/* Request a Demo Button */}
          <Row justify="center" className="mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link className="home-btn rounded-full px-3 py-3" to={"/contact"}>
                {t("home.buttons.requestDemo")}
              </Link>
            </motion.button>
          </Row>

          {/* Subheading */}
          <Row justify="center" className="mt-6">
            <motion.h2
              className="subheading-text text-white text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {t("home.subHeading")}
            </motion.h2>
          </Row>
        </Col>
      </Row>

      {/* Mobile Background Section */}
      <motion.div
        className="md:hidden relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6 mobile-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {/* Watermark logo */}
        <img
          src={Logo}
          alt="FinRule Logo"
          className="absolute inset-0 m-auto max-w-[80%] h-auto z-0 pointer-events-none"
        />

        {/* Text content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="z-10"
        >
          <h1 className="heading-text text-white">{t("home.firstHeading")}</h1>
          <p className="subheading-text text-white mt-4">
            {t("home.subHeading")}
          </p>

          {/* Request a Demo Button (Mobile) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className=" mt-6"
          >
            <Link className="home-btn rounded-full px-3 py-3" to={"/contact"}>
              {t("home.buttons.requestDemo")}
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Content Section */}
      <Row justify="center" className="py-20 px-4 md:px-0 ">
        <Col xs={24} md={20}>
          <motion.div
            className="p-6 md:p-8 bg-blue-100/10 rounded-2xl backdrop-blur-md text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="paragraph-text">{t("home.intro")}</p>
          </motion.div>
        </Col>

        <Col xs={24} md={20} className="mt-10">
          <motion.div
            className="p-6 md:p-8 bg-blue-100/10 rounded-2xl backdrop-blur-md text-white text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <TypeAnimation
              sequence={[t("home.experience"), 1000]}
              wrapper="h2"
              cursor
              repeat={Infinity}
              className="paragraph-text"
            />

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-6"
              variants={fadeInStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                
                variants={fadeInUp}
              >
                <Link className="home-btn rounded-full px-3 py-3" to={"/contact"}>
                {t("home.buttons.requestDemo")}
              </Link>
               
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="home-btn rounded-full px-6 py-3"
                variants={fadeInUp}
              >
                {t("home.buttons.learn")}
              </motion.button>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
