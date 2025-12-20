
// import { useState } from "react";
// import {
//   LineChart, Line, BarChart, Bar, PieChart, Pie,
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend,
//   ResponsiveContainer, Cell
// } from "recharts";

// import { getAnalyticsData } from "../services/dataStore";
// import MainLayout from "../layout/MainLayout";
// import { useAnalytics } from "../context/AnalyticsContext";

// function ChatQuery() {
//   const [messages, setMessages] = useState([
//     { sender: "ai", text: "Hello 👋 I’m BizFusion AI. Ask me about sales, inventory, or profits." }
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);

//   const { setHighlightChart } = useAnalytics();

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   const getAIResponse = (query) => {
//     const q = query.toLowerCase();
//     const data = getAnalyticsData();

//     if (q.includes("weekly sales")) {
//       setHighlightChart("salesTrend");
//       return {
//         text: "Here is the sales trend for this week.",
//         chart: { type: "line", data: data.salesTrend, dataKey: "sales" }
//       };
//     }

//     if (q.includes("monthly sales")) {
//       setHighlightChart("salesTrend");
//       return {
//         text: "Monthly sales overview:",
//         chart: { type: "bar", data: data.monthlySales, dataKey: "sales" }
//       };
//     }

//     if (q.includes("inventory")) {
//       setHighlightChart("productPerformance");
//       return {
//         text: "Inventory distribution across products:",
//         chart: {
//           type: "pie",
//           data: data.products.map(p => ({ name: p.name, value: p.sales }))
//         }
//       };
//     }

//     if (q.includes("profit")) {
//       setHighlightChart("salesTrend");
//       const totalSales = data.salesTrend.reduce((sum, d) => sum + d.sales, 0);
//       const profit = Math.round(totalSales * 0.22);

//       return {
//         text: `Estimated profit is ₹${profit.toLocaleString()}`,
//         chart: {
//           type: "bar",
//           data: [{ name: "Profit", value: profit }],
//           dataKey: "value"
//         }
//       };
//     }

//     return { text: "Please ask about weekly sales, monthly sales, inventory, or profit." };
//   };

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     setMessages(prev => [...prev, { sender: "user", text: input }]);
//     setInput("");
//     setTyping(true);

//     setTimeout(() => {
//       const response = getAIResponse(input);
//       setMessages(prev => [...prev, { sender: "ai", ...response }]);
//       setTyping(false);

//       setTimeout(() => setHighlightChart(""), 3000);
//     }, 1200);
//   };

//   const renderChart = (chart) => {
//     if (!chart) return null;

//     switch (chart.type) {
//       case "line":
//         return (
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={chart.data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line dataKey={chart.dataKey} stroke="#8884d8" />
//             </LineChart>
//           </ResponsiveContainer>
//         );

//       case "bar":
//         return (
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={chart.data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey={chart.dataKey} fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//         );

//       case "pie":
//         return (
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie data={chart.data} dataKey="value" nameKey="name" label>
//                 {chart.data.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <MainLayout>
//       <h4 className="mb-3">BizFusion AI Assistant</h4>

//       <div className="card p-3 mb-3" style={{ height: 450, overflowY: "auto" }}>
//         {messages.map((m, i) => (
//           <div key={i} className={`mb-3 text-${m.sender === "user" ? "end" : "start"}`}>
//             <span className={`badge ${m.sender === "user" ? "bg-primary" : "bg-secondary"}`}>
//               {m.text}
//             </span>
//             {m.chart && <div className="mt-2">{renderChart(m.chart)}</div>}
//           </div>
//         ))}
//         {typing && <p className="text-muted">BizFusion AI is typing...</p>}
//       </div>

//       <div className="input-group">
//         <input
//           className="form-control"
//           placeholder="Ask about sales, inventory, profit..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button className="btn btn-primary" onClick={sendMessage}>Send</button>
//       </div>
//     </MainLayout>
//   );
// }

// export default ChatQuery;
import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { useAnalytics } from "../context/AnalyticsContext";
import { getAnalyticsData } from "../services/dataStore";
import ChatInput from "../components/chat/ChatInput";
import ChatResponse from "../components/chat/ChatResponse";


function ChatQuery() {
  const { setHighlightChart } = useAnalytics();
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello 👋 I’m BizFusion AI. Ask me about sales, inventory, or profits." }
  ]);

  const getAIResponse = (query) => {
    const q = query.toLowerCase();
    const data = getAnalyticsData();

    if (q.includes("weekly sales")) {
      setHighlightChart("salesTrend");
      return {
        answer: "Here is the sales trend for this week.",
        chart: { type: "line", data: data.salesTrend, dataKey: "sales" }
      };
    }

    if (q.includes("monthly sales")) {
      setHighlightChart("salesTrend");
      return {
        answer: "Monthly sales overview:",
        chart: { type: "bar", data: data.monthlySales, dataKey: "sales" }
      };
    }

    if (q.includes("inventory")) {
      setHighlightChart("productPerformance");
      return {
        answer: "Inventory distribution across products:",
        chart: {
          type: "pie",
          data: data.products.map(p => ({ name: p.name, value: p.sales }))
        }
      };
    }

    if (q.includes("profit")) {
      setHighlightChart("salesTrend");
      const totalSales = data.salesTrend.reduce((sum, d) => sum + d.sales, 0);
      const profit = Math.round(totalSales * 0.22);
      return {
        answer: `Estimated profit is ₹${profit.toLocaleString()}`,
        chart: {
          type: "bar",
          data: [{ name: "Profit", value: profit }],
          dataKey: "value"
        }
      };
    }

    return { answer: "Please ask about weekly sales, monthly sales, inventory, or profit." };
  };

  const handleSend = (question) => {
    setMessages(prev => [...prev, { sender: "user", text: question }]);

    const response = getAIResponse(question);
    setMessages(prev => [...prev, { sender: "ai", ...response }]);

    // Reset highlight after 3 seconds
    setTimeout(() => setHighlightChart(""), 3000);
  };

  return (
    <MainLayout>
      <h4 className="mb-3">BizFusion AI Assistant</h4>

      <div className="card p-3 mb-3" style={{ height: 450, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <ChatResponse
            key={i}
            question={m.sender === "user" ? m.text : ""}
            answer={m.sender === "ai" ? m.answer || m.text : ""}
            chart={m.chart}
          />
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </MainLayout>
  );
}

export default ChatQuery;
