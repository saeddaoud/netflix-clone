import FaqsContainer from './containers/faqs';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
