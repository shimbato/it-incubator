import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    console.log('Sidebar closed'); // Debugging log
  };
  const handleOpen = () => {
    setOpen(true);
    console.log('Sidebar open'); // Debugging log
  };

  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = 'unset');
  }, [open]); // отключает прокрутку при открытом меню
  console.log('layout', open);

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div>
        {/*страницы*/}
        {children}
      </div>
    </>
  );
};
