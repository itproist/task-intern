import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Header from '../Header';
// eslint-disable-next-line import/no-unresolved
import Footer from '../Footer';
import styles from './PageWrapper.module.scss';
import { Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <div className={styles.page_wrapper}>
      <Header />
      <main className={styles.page_wrapper_content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
