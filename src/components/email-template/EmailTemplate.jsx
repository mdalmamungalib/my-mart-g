import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({
  name = "",
  redirectUrl = "/login",
  linkText,
}) => {
  return (
    <Html>
      <Head />
      <Preview>
        A fine-grained personal access token has been added to your
        account
      </Preview>
    </Html>
  );
};

export default EmailTemplate;
