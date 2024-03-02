import { FC, PropsWithChildren } from 'react';
import styles from './Page.module.css';

interface Props extends PropsWithChildren {
  title: string;
}

const Page: FC<Props> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles.card}>{children}</div>
    </>
  );
};

export default Page;
