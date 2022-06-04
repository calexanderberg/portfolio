import {
  ContactPresenter,
  FooterPresenter,
  MainNavPresenter,
} from "../presenters";

const ContactPage = () => {
  return (
    <>
      <MainNavPresenter />
      <ContactPresenter />
      <FooterPresenter />
    </>
  );
};

export default ContactPage;
