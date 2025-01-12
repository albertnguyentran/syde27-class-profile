import React from "react";
import Link from "next/link";
import Arrow from "@elsdoerfer/react-arrow";
import styles from "./BottomNav.module.scss";
import colors from "../../styles/colors.module.scss";

const BottomNav = ({ currentPage }) => {
  let backPageLink;
  let backPageName;
  let nextPageLink;
  let nextPageName;

  switch (currentPage) {
    case "about":
      nextPageLink = "/demographics";
      nextPageName = "Demographics";
      break;
    case "demographics":
      backPageLink = "/about";
      backPageName = "About";
      nextPageLink = "/highschool";
      nextPageName = "High School";
      break;
    case "highschool":
      backPageLink = "/demographics";
      backPageName = "Demographics";
      nextPageLink = "/academics";
      nextPageName = "Academics";
      break;
    case "academics":
      backPageLink = "/highschool";
      backPageName = "High School";
      nextPageLink = "/co-op";
      nextPageName = "Co-op";
      break;
    case "co-op":
      backPageLink = "/academics";
      backPageName = "Academics";
      nextPageLink = "/lifestyle";
      nextPageName = "Lifestyle";
      break;
    case "lifestyle":
      backPageLink = "/co-op";
      backPageName = "Co-op";
      break;
  }

  return (
    <div
      className={`${styles.navContainer} ${currentPage == "about" ? styles.nextLinkOnly : ""}`}>
      {backPageLink && (
        <Link href={backPageLink}>
          <div className={styles.linkContainer}>
            <Arrow
              angle={270}
              length={75}
              lineWidth={1.1}
              color={colors.mainText}
              className={styles.arrow}
            />
            <div className={styles.text}>{backPageName}</div>
          </div>
        </Link>
      )}

      {nextPageLink && (
        <Link href={nextPageLink}>
          <div className={styles.linkContainer}>
            <div className={styles.text}>{nextPageName}</div>
            <Arrow
              angle={90}
              length={75}
              lineWidth={1.1}
              color={colors.mainText}
              className={styles.arrow}
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default BottomNav;
