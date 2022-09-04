import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__title}>
        <Link to="/">Рик и Морти онлайн</Link>
      </p>
    </header>
  );
};

export default Header;
