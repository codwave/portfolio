import React from "react";
import Marquee from "react-marquee-slider";
import styled, { keyframes } from "styled-components";
import { companyLogos } from "../constants";

const CompanyLogosContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: inline-block; 
  padding: 0 0.5rem; 
`;

const neonEffect = keyframes`
  from {
    text-shadow: 0 0 5px rgba(200, 150, 250, 0.2), 0 0 10px rgba(200, 150, 250, 0.2), 0 0 15px rgba(200, 150, 250, 0.2);
  }
  to {
    text-shadow: 0 0 2px rgba(200, 150, 250, 0.4), 0 0 5px rgba(200, 150, 250, 0.4), 0 0 10px rgba(200, 150, 250, 0.4);
  }
`;

const StyledText = styled.div`
  display: inline-block;
  white-space: nowrap; 
  font-size: 1rem;
  font-weight: bold;
  color: lavender; 
  animation: ${neonEffect} 1.5s ease-in-out infinite alternate; 
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
