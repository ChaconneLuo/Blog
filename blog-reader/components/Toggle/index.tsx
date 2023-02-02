import React from 'react';
import moon from '../../public/moon.svg';
import sun from '../../public/sun.svg';
import Image from 'next/image';
import styles from './toggle.module.scss';
interface ToggleProps {
  current: string;
}

interface iconMapType {
  [index: string]: string;
}

const iconMap: iconMapType = {
  light: sun,
  dark: moon
};

export default function Toggle({ current }: ToggleProps) {
  return (
    <div>
      <Image className={styles.icon} src={iconMap[current]} alt="" />
    </div>
  );
}
