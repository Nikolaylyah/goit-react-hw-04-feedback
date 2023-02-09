import React, { useState } from 'react';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    const targetName = event.currentTarget.name;

    switch (targetName) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = total => {
    return Math.round((good / total) * 100);
  };
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(total);

  return (
    <div className="App">
      <h1 className="AppHeader">Reviews widget</h1>
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// addFeedback = event => {
//   const targetName = event.currentTarget.name;
//   this.setState(prevState => ({
//     [targetName]: prevState[targetName] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   return good + neutral + bad;
// };

// countPositiveFeedbackPercentage = total => {
//   return Math.round((this.state.good / total) * 100);
// };

//   render() {
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage =
//       this.countPositiveFeedbackPercentage(total);
//     const { good, neutral, bad } = this.state;

//     return (
// <div className="App">
//   <h1 className="AppHeader">Reviews widget</h1>
//   <Container>
//     <Section title={'Please leave feedback'}>
//       <FeedbackOptions
//         options={['good', 'neutral', 'bad']}
//         onLeaveFeedback={this.addFeedback}
//       />
//     </Section>
//     <Section title={'Statistics'}>
//       {total > 0 ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positiveFeedbackPercentage}
//         />
//       ) : (
//         <Notification message="There is no feedback" />
//       )}
//     </Section>
//   </Container>
// </div>
//     );
//   }
// }

export default App;
