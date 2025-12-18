function ChatResponse({ question, answer }) {
  if (!answer) return null;

  return (
    <div className="card mt-3">
      <div className="card-header bg-dark text-white">
        BizFusion AI Response
      </div>
      <div className="card-body">
        <p><strong>Question:</strong> {question}</p>
        <p><strong>Answer:</strong> {answer}</p>
      </div>
    </div>
  );
}

export default ChatResponse;
