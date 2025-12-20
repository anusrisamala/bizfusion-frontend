// function ChatResponse({ question, answer }) {
//   if (!answer) return null;

//   return (
//     <div className="card mt-3">
//       <div className="card-header bg-dark text-white">
//         BizFusion AI Response
//       </div>
//       <div className="card-body">
//         <p><strong>Question:</strong> {question}</p>
//         <p><strong>Answer:</strong> {answer}</p>
//       </div>
//     </div>
//   );
// }

// export default ChatResponse;
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts";

function ChatResponse({ question, answer, chart }) {
  if (!answer) return null;

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const renderChart = (chart) => {
    if (!chart) return null;

    switch (chart.type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey={chart.dataKey} stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );

      case "bar":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={chart.dataKey} fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );

      case "pie":
        return (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chart.data} dataKey="value" nameKey="name" label>
                {chart.data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
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
    <div className="card mt-3">
      <div className="card-header bg-dark text-white">
        BizFusion AI Response
      </div>
      <div className="card-body">
        <p><strong>Question:</strong> {question}</p>
        <p><strong>Answer:</strong> {answer}</p>
        {chart && <div className="mt-3">{renderChart(chart)}</div>}
      </div>
    </div>
  );
}

export default ChatResponse;
