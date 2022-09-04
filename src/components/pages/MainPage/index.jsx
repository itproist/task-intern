import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Text from '../../common/Text';
// eslint-disable-next-line import/no-unresolved
import Aside from '../../common/Aside';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.main__title}>О чем мультсериал и кто такие Рик и Морти?</h2>
      <div className={styles.main__info}>
        <Text />
        <Aside title="Просмотр" characters="Персонажи" />
      </div>
    </div>
  );
};

export default MainPage;
