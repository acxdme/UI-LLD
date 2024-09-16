import React, { useReducer, useState } from 'react';

// Recursive component to handle each reply
const Reply = ({ reply }) => {
  const [replies, setReplies] = useState(reply.replies || []);
  const [newReplyText, setNewReplyText] = useState('');
  const [state,dispatch] = useReducer(reducer,initArg)

  const addReply = () => {
    if (newReplyText.trim()) {
      const newReply = { id: replies.length + 1, text: newReplyText, replies: [] };
      setReplies([...replies, newReply]);
      setNewReplyText('');
    }
  };

  return (
    <div style={{ marginLeft: '20px', borderLeft: '1px solid #ccc', paddingLeft: '10px' }}>
      <div>
        <strong>Reply:</strong> {reply.text}
      </div>
      <div>
        <input
          type="text"
          value={newReplyText}
          onChange={(e) => setNewReplyText(e.target.value)}
          placeholder="Write a reply..."
        />
        <button onClick={addReply}>Reply</button>
      </div>
      <div>
        {replies.map((rep) => (
          <Reply key={rep.id} reply={rep} />
        ))}
      </div>
    </div>
  );
};

// Main component to initiate the reply thread
const RecursiveReplies = () => {
  const [replies, setReplies] = useState([]);
  const [newReplyText, setNewReplyText] = useState('');

  const addReply = () => {
    if (newReplyText.trim()) {
      const newReply = { id: replies.length + 1, text: newReplyText, replies: [] };
      setReplies([...replies, newReply]);
      setNewReplyText('');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        <input
          type="text"
          value={newReplyText}
          onChange={(e) => setNewReplyText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={addReply}>Comment</button>
      </div>
      <div>
        {replies.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </div>
    </div>
  );
};

export default RecursiveReplies;
