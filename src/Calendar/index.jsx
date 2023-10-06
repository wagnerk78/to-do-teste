import React  from "react";
import "rsuite/dist/rsuite.min.css";
import { Calendar } from "rsuite";


export default function App() {
    


  return (
    <div
      style={{
        display: "block",
        width: 600,
        paddingLeft: 30,
      }}
    >
      <h4>Calendário de tarefas</h4>
      <Calendar bordered />
    </div>
  );
}
