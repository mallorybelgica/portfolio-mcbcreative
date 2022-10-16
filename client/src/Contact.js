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
`;

const Hello = styled.h1`
  width: 100%;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
`;

const Email = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #df2687;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 25px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  margin: 0;
  padding-right: 25px;
`;

const RightWrapper = styled.div`
  width: 50%;
  margin: 0;
  padding-left: 25px;
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
`;

const Link = styled.a`
  font-family: "Montserrat", sans-serif;
  color: #0090c5;
  font-weight: 600;
`;
