import styled from "styled-components";
import Github from "../../assets/github-square-brands.svg";
import Linkedin from "../../assets/linkedin-brands.svg";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1.2rem;
  background-color: #eff7f9;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    font-size: 0.7rem;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const RightText = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }
  a {
    padding-left: 5px;
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;
const LeftText = styled.div`
  text-align: left;
`;
const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        Privacy Policy | © 2021 CarfenSoft. All Rights Reserved.
      </LeftText>
      <RightText>
        Developed by <a href="https://diegocorp.github.io/">Diego Sandoval</a>
        <a href="https://twitter.com/code_bucks">
          <img src={Github} alt="Github" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/code.bucks/">
          <img src={Linkedin} alt="Linkedin" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;
