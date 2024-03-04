import { Outlet } from 'react-router-dom';
import Header from '../../components/UI/header/Header';
import Wrapper from '../../components/UI/wrappers/Wrapper';

export const Dashboard = () => {
  return (
    <>
      <header>
        <Wrapper>
          <Header />
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};
