import {
  StoryPresenter,
  FooterPresenter,
  MainNavPresenter,
} from "../presenters";

const StoryPage = () => {
  return (
    <>
      <MainNavPresenter />
      <StoryPresenter />
      <FooterPresenter />
    </>
  );
};

export default StoryPage;
