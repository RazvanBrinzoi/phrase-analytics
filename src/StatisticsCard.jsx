import React from "react";

function StatisticsCard({ wordCount, label }) {
  return (
    <div className="stat">
      <p className="stat__number"> {wordCount} </p>
      <h2 className="second-heading"> {label}</h2>
    </div>
  );
}

export default React.memo(StatisticsCard);
