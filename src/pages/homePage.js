import {
  HomePresenter,
  FooterPresenter,
  MainNavPresenter,
} from "../presenters";

const HomePage = () => {
  return (
    <>
      <MainNavPresenter />
      <HomePresenter />
      <FooterPresenter />
    </>
  );
};

export default HomePage;
