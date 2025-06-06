
import { Typography, Divider } from "antd";
import "../styles/Terms.css";

const { Title, Paragraph } = Typography;

const Terms = () => {
  return (
    <div className="terms-container text-white px-6 pt-30 max-w-5xl mx-auto">
      <Typography>
        <Title level={2} className="terms-heading text-white">
          Политика за колачиња при посета на веб страната
        </Title>
        <Paragraph className="terms-paragraph">
          Кога ке дојдете на нашиот сајт или ги користите нашите услуги,
          ______________________ (во понатамошниот текст: Друштвото), но и трети
          лица, авторизирани од наша страна, собираат колачиња кои содржат
          податоци за Вас...
        </Paragraph>
        <Paragraph className="terms-paragraph">
          Ги користиме колачињата за да ја администрираме нашата интернет
          страна, да анализираме трендови...
        </Paragraph>

        <Divider className="terms-divider" />

        <Title level={4} className="terms-subheading">
          Што се колачиња?
        </Title>
        <Paragraph className="terms-paragraph">
          Колачињата се мали текстуални датотеки, делови од код, кои можат да се
          употребуваат од страна на веб-страници...
        </Paragraph>

        <Divider className="terms-divider" />

        <Title level={4} className="terms-subheading">
          Зошто се користат колачињата?
        </Title>
        <Paragraph className="terms-paragraph">
          Колачињата се користат за подобро разбирање на користењето на
          веб-сајтот од страна на посетителите...
        </Paragraph>

        <Paragraph className="terms-paragraph">
          <strong>Колачиња што ние ги користиме:</strong>
          <br />
          <ul className="list-disc ml-6 mt-2">
            <li>Неопходни колачиња (necessary cookies)</li>
            <li>Претпочитани колачиња (Preference cookies)</li>
            <li>Колачиња за перформанси и функционалност</li>
            <li>Колачиња за трети страни</li>
          </ul>
        </Paragraph>

        <Divider className="terms-divider" />

        <Title level={4} className="terms-subheading">
          Како да ги контролирам колачињата?
        </Title>
        <Paragraph className="terms-paragraph">
          Кога прв пат ќе пристапите на интернет страната ______________________
          може да добиете порака која што ве известува дека користиме
          “колачиња”...
        </Paragraph>
      </Typography>
    </div>
  );
};

export default Terms;
