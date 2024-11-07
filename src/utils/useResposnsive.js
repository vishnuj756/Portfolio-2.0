import { useState, useEffect } from "react";

// Define common breakpoints
const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1200,
};

const useResponsive = () => {
  // State to store the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // State to store the current device type
  const [deviceType, setDeviceType] = useState("desktop");

  // Function to update the window width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // useEffect to add and clean up resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the current device type based on breakpoints
  useEffect(() => {
    if (windowWidth < breakpoints.mobile) {
      setDeviceType("mobile");
    } else if (windowWidth < breakpoints.tablet) {
      setDeviceType("tablet");
    } else if (windowWidth < breakpoints.desktop) {
      setDeviceType("desktop");
    } else if (windowWidth >= breakpoints.largeDesktop) {
      setDeviceType("largeDesktop");
    }
  }, [windowWidth]);

  return {
    windowWidth,
    deviceType, // "mobile", "tablet", "desktop", or "largeDesktop"
    isMobile: deviceType === "mobile",
    isTablet: deviceType === "tablet",
    isDesktop: deviceType === "desktop",
    isLargeDesktop: deviceType === "largeDesktop",
  };
};

export default useResponsive;
