/* eslint-disable no-unused-vars */
import Logo from "/FinRule.png";
import "../styles/Home.css";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
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
      <Row justify="center" className="w-full intro-section">
        <Col span={20}>
          <Row className="md:pt-30 p-0 m-0">
            <Col span={12}>
              <div className="hidden md:flex w-full h-full items-center justify-center text-white text-center">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <TypeAnimation
                    sequence={[t("home.firstHeading"), 2000]}
                    wrapper="h1"
                    cursor
                    repeat={Infinity}
                    className="heading-text text-white"
                  />
                </motion.div>
              </div>
            </Col>

            <Col span={12}>
              <div className="hidden md:flex items-center justify-center w-full h-full">
                <motion.img
                  src={Logo}
                  alt="FinRule Logo"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                />
              </div>
            </Col>

            <Col span={24}>
              <div className="hidden md:flex items-center justify-center w-full h-full">
                <motion.h2
                  className="subheading-text text-white text-center"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {t("home.subHeading")}
                </motion.h2>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <motion.div
        className="md:hidden relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${Logo})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="heading-text text-white">{t("home.firstHeading")}</h1>
          <p className="subheading-text text-white">{t("home.subHeading")}</p>
        </motion.div>
      </motion.div>

      {/* Animated Content Sections */}
      <Row justify="center" className="mt-10 py-10">
        <Col span={20}>
          <motion.div
            className="h-full w-full p-5 bg-blue-100/10 rounded backdrop-blur-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="paragraph-text text-white">
              {t("home.intro")}
            </p>
          </motion.div>
        </Col>

        <Col span={20} className="mt-10">
          <motion.div
            className="h-full w-full p-5 bg-blue-100/10 rounded backdrop-blur-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <TypeAnimation
              sequence={[t("home.experience"), 1000]}
              wrapper="h1"
              cursor
              repeat={Infinity}
              className="paragraph-text text-white text-center"
            />

            <motion.div
              className="flex justify-center gap-4 mt-5"
              variants={fadeInStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="home-btn rounded-full px-5 py-3"
                variants={fadeInUp}
              >
                {t("home.buttons.requestDemo")}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="home-btn rounded-full px-5 py-3"
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
