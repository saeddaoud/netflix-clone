import { Feature, OptForm } from '../components';
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
        <Feature>
          <Feature.Title>Unlimited TV programs, fils, and more</Feature.Title>
          <Feature.SubTitle>
            Watch from anywhere. Cancel at anytime
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder='Email Address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Text>
              Ready to watch? enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
