import { useState } from "react";

function ChatQuery() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello 👋 I’m BizFusion AI. Ask me about your business." }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getAIResponse = (query) => {
    if (query.includes("sales")) return "Sales increased by 8% compared to last week.";
    if (query.includes("inventory")) return "4 products are running low on inventory.";
    if (query.includes("profit")) return "Profit margin is currently stable at 22%.";
    return "I am analyzing your data. Please be more specific.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const aiMsg = { sender: "ai", text: getAIResponse(input.toLowerCase()) };
      setMessages((prev) => [...prev, aiMsg]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">BizFusion AI Assistant</h4>

      <div className="card p-3 mb-3" style={{ height: "400px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 text-${m.sender === "user" ? "end" : "start"}`}
          >
            <span
              className={`badge ${
                m.sender === "user" ? "bg-primary" : "bg-secondary"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}

        {typing && <p className="text-muted">BizFusion AI is typing...</p>}
      </div>

      <div className="input-group">
        <input
          className="form-control"
          placeholder="Ask about sales, profit, inventory..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatQuery;
