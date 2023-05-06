import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, onLandingPage = false }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    if (onLandingPage) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            setIsHeaderVisible(true);
          } else {
            setIsHeaderVisible(false);
          }
        },
        { threshold: 0 }
      );

      observer.observe(document.querySelector("#header-trigger"));

      return () => {
        observer.disconnect();
      };
    } else {
      setIsHeaderVisible(true);
    }
  }, [onLandingPage]);

  return (
    <div>
      <div id="header-trigger"></div>
      <Header isVisible={isHeaderVisible} onLandingPage={onLandingPage} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
