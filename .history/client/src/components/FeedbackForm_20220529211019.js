import React from 'react';
import Card from './shared/Card';

const FeedbackForm = () => {
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
