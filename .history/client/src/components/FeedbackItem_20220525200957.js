import React, {useState} from 'react';

const FeedbackItem = () => {
  const [rating, setRating] = useState (7);

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">
        This is an example of feedback item.
      </div>
    </div>
  );
};

export default FeedbackItem;
