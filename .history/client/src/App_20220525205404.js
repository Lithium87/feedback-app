import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState (FeedbackData);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackList />
      </div>
    </React.Fragment>
  );
};

export default App;
