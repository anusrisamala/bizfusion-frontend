// import { useState } from "react";

// function ChatQuery() {
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "Hello 👋 I’m BizFusion AI. Ask me about your business." }
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);

//   const getAIResponse = (query) => {
//     if (query.includes("sales")) return "Sales increased by 8% compared to last week.";
//     if (query.includes("inventory")) return "4 products are running low on inventory.";
//     if (query.includes("profit")) return "Profit margin is currently stable at 22%.";
//     return "I am analyzing your data. Please be more specific.";
//   };

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMsg = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setTyping(true);

//     setTimeout(() => {
//       const aiMsg = { sender: "ai", text: getAIResponse(input.toLowerCase()) };
//       setMessages((prev) => [...prev, aiMsg]);
//       setTyping(false);
//     }, 1500);
//   };

//   return (
//     <div className="container mt-4">
//       <h4 className="mb-3">BizFusion AI Assistant</h4>

//       <div className="card p-3 mb-3" style={{ height: "400px", overflowY: "auto" }}>
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`mb-2 text-${m.sender === "user" ? "end" : "start"}`}
//           >
//             <span
//               className={`badge ${
//                 m.sender === "user" ? "bg-primary" : "bg-secondary"
//               }`}
//             >
//               {m.text}
//             </span>
//           </div>
//         ))}

//         {typing && <p className="text-muted">BizFusion AI is typing...</p>}
//       </div>

//       <div className="input-group">
//         <input
//           className="form-control"
//           placeholder="Ask about sales, profit, inventory..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button className="btn btn-primary" onClick={sendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatQuery;

import { useState } from "react";
//import { getAnalyticsData } from "../services/dataStore";

import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from "recharts";

// IMPORTANT: Import the dynamic dataStore
import { getAnalyticsData } from "../services/dataStore";

function ChatQuery() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello 👋 I’m BizFusion AI. Ask me about sales, inventory, or profits." }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const getAIResponse = (query) => {
    const data = getAnalyticsData();

    if (query.includes("weekly sales")) {
      return {
        text: "Here is the sales trend for this week.",
        chart: { type: "line", data: data.salesTrend, dataKey: "sales" }
      };
    }

    if (query.includes("monthly sales")) {
      return {
        text: "Monthly sales distribution:",
        chart: { type: "bar", data: data.monthlySales || data.salesTrend, dataKey: "sales" }
      };
    }

    if (query.includes("inventory")) {
      const lowStock = data.products.filter(p => p.status === "Poor");
      return {
        text: `${lowStock.length} products are running low in inventory: ${lowStock.map(p => p.name).join(", ")}`,
        chart: { type: "pie", data: data.products.map(p => ({ name: p.name, value: p.sales })) }
      };
    }

    if (query.includes("profit")) {
      const totalSales = data.salesTrend.reduce((a, b) => a + b.sales, 0);
      const profit = Math.round(totalSales * 0.22);
      return {
        text: `Profit margin this week is approx ₹${profit.toLocaleString()}`,
        chart: { type: "bar", data: [{ name: "Profit", value: profit }], dataKey: "value" }
      };
    }

    return { text: "I am analyzing your data. Please be more specific." };
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(input.toLowerCase());
      setMessages((prev) => [...prev, { sender: "ai", ...aiResponse }]);
      setTyping(false);
    }, 1500);
  };

  const renderChart = (chart) => {
    if (!chart) return null;
    const { type, data, dataKey } = chart;

    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={dataKey} fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">BizFusion AI Assistant</h4>

      <div className="card p-3 mb-3" style={{ height: "450px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 text-${m.sender === "user" ? "end" : "start"}`}>
            {m.text && (
              <span className={`badge ${m.sender === "user" ? "bg-primary" : "bg-secondary"}`}>
                {m.text}
              </span>
            )}
            {m.chart && <div className="mt-2">{renderChart(m.chart)}</div>}
          </div>
        ))}

        {typing && <p className="text-muted">BizFusion AI is typing...</p>}
      </div>

      <div className="input-group">
        <input
          className="form-control"
          placeholder="Ask about sales, inventory, monthly sales, profit..."
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

