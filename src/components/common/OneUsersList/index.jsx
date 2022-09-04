import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-duplicates
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-duplicates
// import { useSelector } from 'react-redux';
import { gettingImage } from '../../../redux/imageReducer/actions';

const OneUsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingImage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const name = useSelector((state) => {
  //   const { imageReducer } = state;
  //   return imageReducer.image;
  // });

  return (
    <div>
      {/* {name.map((res) => {
        // eslint-disable-next-line react/jsx-key
        return <li ket={res.id}></li>;
      })} */}
    </div>
  );
};

export default OneUsersList;
