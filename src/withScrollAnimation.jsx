import React from "react";
import { useInView } from "react-intersection-observer";

const withScrollAnimation = (WrappedComponent, delay = 0, parallax = false, backgroundImage = "") => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const parallaxStyle = parallax
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

    return (
      <div
        ref={ref}
        className={`transition-transform transform-gpu duration-700 ease-in-out delay-${delay} ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ ...parallaxStyle, transitionDelay: `${delay}ms` }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withScrollAnimation;
