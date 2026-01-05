import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the future of African capital markets</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://waitlist.cradlemarkets.com/cradle_logo_new.png`}
          width="220"
          height="100"
          alt="Cradle Protocol Logo"
          style={logo}
        />
        <Text style={greeting}>Hi {userFirstname},</Text>

        <Text style={paragraph}>
          You're officially on the Cradle Protocol waitlist. Welcome.
        </Text>

        <Text style={paragraph}>
          You're joining ,000+ people who believe African securities markets deserve better infrastructure—infrastructure that's instant, accessible, and transparent.
        </Text>

        <Text style={sectionHeader}>Here's what you can expect:</Text>

        <Text style={bulletPoint}>
          📧 <strong>Launch Updates</strong><br />
          We'll email you when we hit major milestones: mainnet launch, institutional partnerships, first securities listed.
        </Text>

        <Text style={bulletPoint}>
          ⚡ <strong>Priority Access</strong><br />
          Waitlist members get first access when we open. You joined early, so you'll be among the first invited.
        </Text>

        <Text style={bulletPoint}>
          💬 <strong>Community</strong><br />
          Join our Telegram to connect with other early adopters and follow development in real-time: <Link href="https://t.me/cradle_protocol" style={link}>[Telegram Link]</Link>
        </Text>

        <Text style={sectionHeader}>In the meantime:</Text>

     
        <Text style={bulletPoint}>
          → Follow our Twitter for daily updates: <Link href="#" style={link}>[Link]</Link>
        </Text>


        <Text style={paragraph}>
          Questions? Just reply to this email.
        </Text>

        <Text style={signOff}>
          See you at launch,<br />
          The Cradle Protocol Team
        </Text>

        <Text style={postScript}>
          P.S. — We're building in public. Follow along on Twitter: <Link href="https://x.com/CradleProtocol" style={link}>@CradleProtocol</Link>
        </Text>

        <Hr style={hr} />

        <Text style={footer}>
          You received this email because you signed up for the Cradle Protocol waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

NotionWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default NotionWaitlistEmail;

const main = {
  background: "linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#cccccc",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#CC1918",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};

const sectionHeader = {
  fontSize: "17px",
  fontWeight: "bold",
  lineHeight: "28px",
  marginTop: "24px",
  marginBottom: "12px",
  color: "#ffffff",
};

const bulletPoint = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "16px",
  paddingLeft: "4px",
};

const referralLink = {
  color: "#CC1918",
  textDecoration: "underline",
  fontWeight: "bold",
  display: "block",
  marginTop: "8px",
};

const postScript = {
  fontSize: "14px",
  lineHeight: "24px",
  marginTop: "20px",
  fontStyle: "italic",
  color: "#cccccc",
};
