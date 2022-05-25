import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackItem';

const App = () => {
  const [feedback, setFeedback] = useState (FeedbackData);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </React.Fragment>
  );
};

export default App;
