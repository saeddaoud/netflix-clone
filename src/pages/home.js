import {
  FaqsContainer,
  FooterContainer,
  HeaderContainer,
  JumbotronContainer,
} from '../containers';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
};

export default Home;
