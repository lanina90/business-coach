import { IoCubeOutline, IoDiamondSharp } from 'react-icons/io5';
import { PiAsteriskDuotone } from 'react-icons/pi';
import { GrDocumentPerformance } from 'react-icons/gr';
import styles from './benefits.module.css';
import { IBenefit } from '../../../types/IBenefit.ts';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface IIcons {
  [key: string]: IconType;
}

const Icons: IIcons = {
  diamonds: IoDiamondSharp,
  cube: IoCubeOutline,
  asterisk: PiAsteriskDuotone,
  performance: GrDocumentPerformance,
};

const BenefitCard: FC<IBenefit> = ({ id,title, desc, icon }) => {
  const IconComponent = Icons[icon];

  return (
    <div id={`benefit-card-${id}`} className={styles['benefit-card']}>
      <h3>{title}</h3>
      <span className={styles['separator']}>
        <IconComponent size={32} color='#FF8278D3' />
      </span>
      <p>{desc}</p>
    </div>
  );
};

export default BenefitCard;
