import React from "react";
import Marquee from "react-marquee-slider";
import styled, { keyframes } from "styled-components";
import { companyLogos } from "../constants";

const CompanyLogosContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: inline-block; /* Ensures logos are in-line */
  padding: 0 0.5rem; /* Adjust padding as needed */
`;

const neonEffect = keyframes`
  from {
    text-shadow: 0 0 5px rgba(200, 150, 250, 0.6), 0 0 10px rgba(200, 150, 250, 0.6), 0 0 15px rgba(200, 150, 250, 0.6);
  }
  to {
    text-shadow: 0 0 2px rgba(200, 150, 250, 0.8), 0 0 5px rgba(200, 150, 250, 0.8), 0 0 10px rgba(200, 150, 250, 0.8);
  }
`;

const StyledText = styled.div`
  display: inline-block;
  white-space: nowrap; /* Prevents text from wrapping */
  font-size: 1.5rem;
  font-weight: bold;
  color: lavender; /* Lavender color */
  animation: ${neonEffect} 1.5s ease-in-out infinite alternate; /* Neon animation */
`;

const CompanyLogos = ({ className }) => {
  return (
    <CompanyLogosContainer className={className}>
      <Marquee velocity={20} spacing={0}>
        {companyLogos.map((logo, index) => (
          <LogoWrapper key={index}>
            <StyledText>
              Creative | Innovative | Technology |</StyledText>
          </LogoWrapper>
        ))}
      </Marquee>
    </CompanyLogosContainer>
  );
};

export default CompanyLogos;
