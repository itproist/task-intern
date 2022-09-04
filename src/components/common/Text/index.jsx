import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettingImage } from '../../../redux/imageReducer/actions';
import { gettingNames } from '../../../redux/nameReducer/actions';
import styles from './Text.module.scss';

const Text = () => {
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

  const rickyUser = image.filter((item) => item.id < 2);
  const mortyUser = image.filter((item) => item.id > 1 && item.id < 3);
  const summerUser = image.filter((item) => item.id > 2 && item.id < 4);
  const bethUser = image.filter((item) => item.id > 6 && item.id < 8);
  const jerryUser = image.filter((item) => item.id > 4 && item.id < 6);
  const abadangoUser = image.filter((item) => item.id > 8 && item.id < 10);

  const rickyUserName = name.filter((item) => item.id < 2);
  const mortyUserName = name.filter((item) => item.id > 1 && item.id < 3);
  const summerUserName = name.filter((item) => item.id > 2 && item.id < 4);
  const bethUserName = name.filter((item) => item.id > 6 && item.id < 8);
  const jerryUserName = name.filter((item) => item.id > 4 && item.id < 6);
  const abadangoUserName = name.filter((item) => item.id > 8 && item.id < 10);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__ricky}>
          <div className={styles.ricky__img}>
            {rickyUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.ricky__name}>
              {rickyUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>

          <p>
            Один из главных героев мультсериала «Рик и Морти» (Rick and Morty) – циничный ученый Рик
            Санчез. Пожилой алкоголик, который страдает отрыжкой, превыше всего ставит науку и
            влипает в различные авантюры. Настолько гениален, что из мусора выстроил летающий
            аппарат, способный перемещаться между измерениями.
          </p>
          <p>
            К семье относится как к лишнему балласту, всегда выбирая науку. Тем не менее, переезжает
            жить к своей дочери Бет Смит. С этого момента круто меняется жизнь Морти – простого и
            ничем не примечательного школьника.
          </p>
          <p>
            У Рика отсутствуют стоп-сигналы, потому его частенько заносит не туда в своих
            изысканиях. Он может запросто вытащить внука из постели средь ночи и умчаться в
            межгалактическое пространство. Где окажется эта парочка в очередной раз, они и сами не
            знают. Поэтому всегда попадают в непредвиденные ситуации.
          </p>
        </div>
        <div className={styles.main__morty}>
          <div className={styles.morty__img}>
            {mortyUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.morty__name}>
              {mortyUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>

          <p>
            Родители 14-летнего Морти пытаются достучаться до деда, объяснить важность обучения
            внука в школе, но все тщетно. Морти и сам стопорит Рика, когда тот переходит границы
            дозволенного.
          </p>
          <p>
            Сюжет мультика насчитывает пять персонажей, вокруг которых разворачивается действие.
            Помимо Рика и Морти, есть еще Бет, Джерри и Саммер Смит.
          </p>
          <p>
            Бет Смит – ветеринар и кардиохирург. Обожает лошадей, с ними и проводит большую часть
            времени. Ей 34 года, она заботливая мать двоих детей. Дочь Саммер и сын Морти
            периодически страдают от ее чрезмерной опеки. У нее проблемы с алкоголем и психикой. Она
            боится вновь остаться без своего отца Рика, и в итоге даже разводится с Джерри из-за
            него.
          </p>
        </div>
        <div className={styles.main__summer}>
          <div className={styles.summer__img}>
            {summerUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.summer__name}>
              {summerUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>

          <p>
            Дочь Саммер родилась, когда Бет было 17 лет. Возможно заменена клоном в конце третьего
            сезона. Саммер Смит – школьница и сестра Морти. Периодически вляпывается в приключения
            вместе с дедом и братишкой, вытаскивает их из разного рода авантюр. Обладает комплексами
            касательно внешности, не расстается с телефоном. Испытывала сильные чувства к Итану,
            строила отношения с Кровотеком, подрабатывала в магазинчике дьявола.
          </p>
          <p>
            Джерри Смит – отец семейства и муж Бет. В свои 34 года не устроился в жизни, находится в
            поисках работы. Обладает ненужными комплексами, туповат и наивен. Считает жену
            лжехирургом, обожает пересматривать «Титаник» круглыми сутками. Ему по душе гражданское
            право. Джерри находится в контрах с отцом Бет Риком. У них взаимная неприязнь и вражда.
          </p>
        </div>
        <div className={styles.main__beth}>
          <div className={styles.beth__img}>
            {bethUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.beth__name}>
              {bethUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>

          <p>
            На создание мультфильма для взрослых Дэна Хармона и Джастина Ройланда подтолкнула
            анимационная пародия на кинокартины «Назад в будущее». Концепция сериала и черновой
            сценарий были разработаны ими за один день. Изначально планировались короткометражки
            длиною в 11 минут, но после долгих споров приняли решение выпускать двадцати
            двухминутные эпизоды.
          </p>
          <p>
            Дэн и Джастин настроены категорически против путешествий во времени, считая, что эти
            приемчики нужны лишь для усложнения действительности. Поэтому путешествия по измерениям
            и галактикам в сериале есть, а во времени – нет.
          </p>
          <p>
            Сейчас сериал насчитывает 41 эпизод в четырех сезонах. Пилотная первая серия вышла на
            экраны 2 декабря 2013 года и включал в себя 11 серий. Остальные три сезона состоят из
            десяти серий, последняя из которых транслировалась 10 ноября 2019 года.
          </p>
        </div>
        <div className={styles.main__jerry}>
          <div className={styles.jerry__img}>
            {jerryUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.jerry__name}>
              {jerryUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>

          <p>
            Неизвестно, будет ли у мультика продолжение, так как официально четвертый сезон еще не
            завершен, а в 2018 году, по окончании третьего сезона, создатели заявили о планах на
            выпуск еще 70 эпизодов. Потому 5 и 6 сезоны точно должны быть.
          </p>
          <p>
            Мультфильм Рик и Морти относится к жанру научной фантастики. Один из создателей Джастин
            Ройланд озвучивал сразу два главных персонажа: безумного деда-ученого Рика и его внука
            Морти. Голосом Бет Смит говорит известная американская актриса Сара Чок, сыгравшая роль
            врача в ситкоме Била Лоуренса «Клиника».
          </p>
          <p>
            Актер телесериала «Студия 30» Крис Парнел озвучивает мужа дочери Рика, Джерри. Сестра
            Морти Саммер получила голос актрисы Спэнсер Грэммер. В общей сложности, включая
            второстепенные роли, над озвучкой работало более тридцати человек.
          </p>
        </div>
        <div className={styles.main__abadangoUser}>
          <div className={styles.abadangoUser__img}>
            {abadangoUser.map((el) => {
              return <img key={el.id} src={el.image} width="208px" height="280px" alt="img" />;
            })}
            <div className={styles.abadango__name}>
              {abadangoUserName.map((el) => {
                // eslint-disable-next-line react/jsx-key
                return <p>{el.name}</p>;
              })}
            </div>
          </div>
          <p>
            Режиссерами стали Джефф Майерс, Брайан Ньютон, Пик Миклс, Джон Райс, Стивен Сандовал и
            один из авторов идеи Джастин Ройланд. Сюжет настолько полюбился телезрителям, что на
            основе идеи были выпущены комиксы и разработаны пользовательские игры.
          </p>
          <p>
            Сценарий сериала не был написан от строчки до строчки. Создатели частенько
            импровизировали на ходу. Например, все ролики из Межгалактического TV были состряпаны
            актерами в процессе озвучивания. Стоимость уличного такси в сериале составила 25
            шекелей, в то время как 1 шекель стоит около 150 долларов. Денег, которые Рик и Морти
            заплатили таксисту, хватило бы на несколько крутых телефонов или одну машину.
          </p>
          <p>
            Внимательность к деталям – один из главных принципов режиссеров. Если дом
            телепортировался, и в земле появилась дыра, то даже по возвращении этого самого дома на
            место, дыра никуда не исчезает. В ней даже растет трава, которую Джерри косит во 2
            сезоне сам.
          </p>
        </div>
      </div>
    </>
  );
};

export default Text;
