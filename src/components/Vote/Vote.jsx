import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

import s from './vote.module.css';

const Vote = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const leaveVote = propName => {
    setState(prevState => {
      return {
        ...prevState,
        [propName]: prevState[propName] + 1,
      };
    });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const value = state.good;
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  };

  const total = countTotalFeedback();

  const positive = countPositiveFeedbackPercentage();
  return (
    <div className={s.box}>
      <Section title="Leave your vote">
        <FeedbackOptions options={Object.keys(state)} leaveVote={leaveVote} />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Results">
          <Statistics
            total={total}
            positive={positive}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Vote;
