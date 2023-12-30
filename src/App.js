import { useEffect, useState } from "react";
import "./App.css";
import styles from "./style";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function App() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });

  const getTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    console.log(theme);
  }, [theme]);

  useEffect(() => {
    getTheme();
  }, [theme]);

  return (
    <div className="dark:bg-primary bg-gray-200 w-full relative font-poppins">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-50 bg-gray-200 dark:bg-inherit bg-opacity-100`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <div className="dark:bg-primary bg-gray-200 w-full relative overflow-hidden">
        
        <div className={`dark:bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div
          className={`dark:bg-primary ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer theme={ theme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
