import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const EmailTemplate = ({
  name = "",
  redirectUrl = "/login",
  linkText,
}) => (
  <Html>
    <Head />
    <Preview>
      A fine-grained personal access token has been added to your account
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head.png`}
          width="32"
          height="32"
          alt="Github"
        />

        <Text style={title}>{linkText}</Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{name}</strong>!
          </Text>
          <Text style={text}>
            Thank you for creating an account with us. We request you to click on the link below in order to complete your onboarding process. Thank you!
          </Text>

          <Link style={button} href={`${baseUrl}/${redirectUrl}`}>
            {linkText}
          </Link>
        </Section>
        <Text style={links}>
          <Link style={link}>Your security audit log</Link> ・{" "}
          <Link style={link}>Contact support</Link>
        </Text>
        <Section>
          <Row>
            <Column>
              <Link href="/">
                <Img
                  src={`https://w7.pngwing.com/pngs/59/223/png-transparent-bird-tweet-twitter-twitter-logo-social-media-icon-thumbnail.png`}
                  width="32"
                  height="32"
                  alt="Twitter"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="/">
                <Img
                  src={`https://img.freepik.com/premium-psd/facebook-social-media-icon-3d_466778-4384.jpg?semt=ais_hybrid`}
                  width="32"
                  height="32"
                  alt="Facebook"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
            <Column>
              <Link href="/">
                <Img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllNbtXaEUaCuGkcHhD6Wqb7QzOD0KGeYgkw&s`}
                  width="32"
                  height="32"
                  alt="LinkedIn"
                  style={socialMediaIcon}
                />
              </Link>
            </Column>
          </Row>
        </Section>

        <Text style={footer}>
          Auth System By JB, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

// Color and Style Definitions
const main = {
  backgroundColor: "#ffffff",  // White background
  color: "#24292e",  // Dark text color
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
};

const container = {
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
  color: "#A4D400", // Lime-600 color for title
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center",
  backgroundColor: "#F7F7F7", // Light gray background for section
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left",
  color: "#424242",  // Charcoal color for text
};

const button = {
  fontSize: "14px",
  backgroundColor: "#A4D400", // Lime-600 color for button
  color: "#ffffff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "0.75em 1.5em",
};

const links = {
  textAlign: "center",
};

const link = {
  color: "#0366d6", // Blue link color for audit log and support
  fontSize: "12px",
};

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  display: 'block',
};

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px',
};

const footer = {
  color: "#6a737d", // Gray footer text
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px",
};
