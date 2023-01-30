import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import style from './layout.module.scss';

export interface LayoutProps {
  navbarData: any;
  footerData: any;
  children: JSX.Element;
}

export default function Layout({ navbarData, footerData, children }: LayoutProps) {
  return (
    <div className={style.layout}>
      <NavBar {...navbarData}></NavBar>
      <main className={style.main}>{children}</main>
      <Footer {...footerData}></Footer>
    </div>
  );
}
