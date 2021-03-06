import React, {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedback, setFeedback] = useState (FeedbackData);

  const deleteFeedback = id => {
    if (window.confirm ('Are you sure you want to delete?')) {
      setFeedback (feedback.filter (item => item.id !== id));
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </React.Fragment>
  );
};

export default App;
