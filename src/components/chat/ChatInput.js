// import { useState } from "react";

// function ChatInput({ onSend }) {
//   const [question, setQuestion] = useState("");

//   const handleSend = () => {
//     if (question.trim() === "") return;
//     onSend(question);
//     setQuestion("");
//   };

//   return (
//     <div className="card p-3">
//       <div className="input-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Ask BizFusion AI (e.g. Show last week's sales)"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={handleSend}>
//           Ask
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatInput;
import { useState } from "react";

function ChatInput({ onSend }) {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;
    onSend(question);
    setQuestion("");
  };

  return (
    <div className="card p-3 mt-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ask BizFusion AI (e.g. Show last week's sales)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend}>
          Ask
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
