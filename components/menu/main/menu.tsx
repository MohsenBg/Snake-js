import React, { useEffect } from "react";
import styles from "./menu.module.scss";

const Menu = ({ handelPlay }: any) => {
  useEffect(() => {
    /* View in fullscreen */
  }, []);
  const openFullscreen = () => {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (
      //@ts-ignore
      elem.webkitRequestFullscreen
    ) {
      /* Safari */
      //@ts-ignore
      elem.webkitRequestFullscreen();
    } else if (
      //@ts-ignore
      elem.msRequestFullscreen
    ) {
      /* IE11 */
      //@ts-ignore
      elem.msRequestFullscreen();
    }
    handelPlay();
  };
  const contactMe = () => {
    window.open("https://github.com/MohsenBg", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div className={styles.btn} onClick={openFullscreen}>
          play
        </div>
        <div className={styles.btn} onClick={contactMe}>
          contact me
        </div>
      </div>
    </div>
  );
};

export default Menu;
