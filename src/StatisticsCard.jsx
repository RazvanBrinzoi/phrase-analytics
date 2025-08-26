import React from "react";

function StatisticsCard({ wordCount, label, limitReached }) {
  return (
    <div className="stat">
      <p
        className={`stat__number ${limitReached ? "stat__number--limit" : ""}`}
      >
        {" "}
        {wordCount}{" "}
      </p>
      <h2 className="second-heading"> {label}</h2>
    </div>
  );
}

//Memo becomes useless now because all cards must rerender at text change but will keep it as informative
export default React.memo(StatisticsCard);
