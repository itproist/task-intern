import React from 'react';
import { useParams } from 'react-router-dom';

type OneUserPagePropsType = {
  userInfo: { id: number; name: string } | undefined;
};

const OneUserPage = ({ userInfo }: OneUserPagePropsType) => {
  console.log(userInfo);
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <h1>USER INFO</h1>
      <h2>{userInfo?.name}</h2>
    </>
  );
};

export default OneUserPage;
