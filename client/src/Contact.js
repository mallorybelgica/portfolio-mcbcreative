import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Hello>say hello</Hello>
      <Email href="mailto:mallorybelgica@gmail.com">
        mallorybelgica@gmail.com
      </Email>
      <LeftWrapper>
        <Paragraph>
          I love to build things and collaborate on new ideas. If you'd like to
          team up you can reach me in a couple of different ways. Let's bring
          your vision to life.
        </Paragraph>
        <Signoff>Mallory Belgica</Signoff>
        <Signoff>Montreal, Canada</Signoff>
      </LeftWrapper>
      <RightWrapper>
        <PlatformIntro>
          You can find me on a couple of different platforms:
        </PlatformIntro>
        <SocialList>
          <li>
            Linkedin:{" "}
            <Link
              href="https://www.linkedin.com/in/mallorybelgica/"
              target="_blank"
            >
              mallorybelgica
            </Link>
          </li>
          <li>
            GitHub:{" "}
            <Link href="https://github.com/mallorybelgica" target="_blank">
              mallorybelgica
            </Link>
          </li>
          <li>
            Twitter:{" "}
            <Link href="https://twitter.com/mallorychristy" target="_blank">
              @mallorychristy
            </Link>
          </li>
          <li>
            Codepen:{" "}
            <Link href="https://codepen.io/mcbcreative" target="_blank">
              mcbcreative
            </Link>
          </li>
        </SocialList>
      </RightWrapper>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`;

const Hello = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 600;
`;

const Email = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #df2687;
  font-size: 48px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  margin: 0;
  padding-right: 25px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  margin: 0;
  padding-left: 25px;
  @media (max-width: 480px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Paragraph = styled.p`
  line-height: 1.5;
`;

const Signoff = styled.p`
  line-height: 1.5;
  margin: 0;
`;

const PlatformIntro = styled.p`
  width: 100%;
`;

const SocialList = styled.ul`
  width: 100%;
  margin: 0;
  list-style-type: none;
  padding-left: 0;
`;

const Link = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #0090c5;
  font-weight: 600;
`;
