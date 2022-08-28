import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>Рик и Морти онлайн</p>
    </header>
  );
};

export default Header;
