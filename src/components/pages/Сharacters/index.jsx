import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { gettingImage } from '../../../redux/imageReducer/actions';
import { gettingNames } from '../../../redux/nameReducer/actions';

import styles from './Characters.module.scss';

const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingImage());
  }, []);

  useEffect(() => {
    dispatch(gettingNames());
  }, []);

  const image = useSelector((state) => {
    const { imageReducer } = state;
    return imageReducer.image;
  });

  const name = useSelector((state) => {
    const { nameReducer } = state;
    return nameReducer.name;
  });

  return (
    <div className={styles.characters}>
      <h1 className={styles.characters__title}>Персонажи мультсериала Рик и Морти</h1>
      <div className={styles.characters__person}>
        {image.map((el) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <>
              <img key={el.id} src={el.image} width="270px" height="200px" alt="img" />
            </>
          );
        })}
      </div>

      <p className={styles.characters__text}>
        Страница со всеми персонажами американского мультсериала «Рик и Морти». С первого по
        последний сезон и со всех серий мультика «Rick and Morty». Если вы хотите узнать подробнее о
        любимом персонаже мульта, вы на нужной странице. Выбирайте персону по фото, имени и
        переходите на его страницу биографии, способностей и вообще всей доступной информации.
      </p>
    </div>
  );
};

export default Characters;
