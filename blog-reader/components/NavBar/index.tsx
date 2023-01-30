import React, { useContext } from 'react';
import { ThemeContext } from '../../stores/Theme';
import styles from './navbar.module.css';

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.navBar}>
      <a>
        <div className={styles.logoIcon}></div>
      </a>
      <div className={styles.themeArea}>
        <div></div>
      </div>
      <div className={styles.themeIcon} onClick={() => setTheme()}></div>
    </div>
  );
}
