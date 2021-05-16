import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequenctly Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FaqsContainer;
