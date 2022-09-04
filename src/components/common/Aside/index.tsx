import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Aside.module.scss';

type AsidePropsType = {
  title: string;
  characters: string;
};

const Aside = ({ title, characters }: AsidePropsType) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__title}>{title}</div>
      <div className={styles.aside__prev}>
        <Link to="character">{characters}</Link>
      </div>
    </aside>
  );
};

export default Aside;
