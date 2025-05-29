import Logo from "/FinRule.png";
import "../styles/Home.css";
import { Row, Col } from "antd";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  const refHeadline = useRef(null);
  const refSubheadline = useRef(null);
  const refMobile = useRef(null);
  const inViewHeadline = useInView(refHeadline, { once: true });
  const inViewSubheadline = useInView(refSubheadline, { once: true });
  const inViewMobile = useInView(refMobile, { once: true });

  return (
    <>
      <Row justify={"center"} className="w-full">
        <Col span={20}>
          <Row className="md:pt-30 pt-10">
            <Col span={12}>
              <div className="hidden md:flex w-full h-full items-center justify-center text-white text-center montserrat-600">
                <motion.h1
                  className="landing-text"
                  ref={refHeadline}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inViewHeadline ? "visible" : "hidden"}
                >
                  TRANSFORMING Banking Through Precision Automation
                </motion.h1>
              </div>
            </Col>

            <Col span={12}>
              <div className="hidden md:flex items-center justify-center w-full h-full">
                <motion.img
                  src={Logo}
                  alt="FinRule Logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inViewHeadline ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </Col>

            <Col span={24}>
              <div className="hidden md:flex items-center justify-center w-full h-full">
                <motion.h1
                  className="w-full text-white text-center montserrat-600 home-subheadline"
                  ref={refSubheadline}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inViewSubheadline ? "visible" : "hidden"}
                >
                  Revolutionize the way your financial institution operates.
                  Experience faster decision-making, streamlined operations, and
                  enhanced customer engagement with FinRule.
                </motion.h1>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <motion.div
        className="md:hidden relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${Logo})` }}
        ref={refMobile}
        initial={{ opacity: 0 }}
        animate={inViewMobile ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inViewMobile ? "visible" : "hidden"}
        >
          <h1 className="landing-text">
            TRANSFORMING Banking Through Precision Automation
          </h1>
          <p className="landing-text">
            Revolutionize the way your financial institution operates.
            Experience faster decision-making, streamlined operations, and
            enhanced customer engagement with FinRule.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
