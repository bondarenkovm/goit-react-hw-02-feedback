import { Section } from 'components/Section';
import { FeedbackBtn } from 'components/FeedbackBtn';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
        ></FeedbackBtn>
      </Section>
    </Container>
  );
};
