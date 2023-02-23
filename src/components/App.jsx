import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = key => {
    setState(prevState => ({ ...prevState, [key]: prevState[key] + 1 }));
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => (good / total) * 100;

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleFeedback} options={state} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
