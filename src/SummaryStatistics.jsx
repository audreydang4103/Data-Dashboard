// src/SummaryStatistics.jsx
import React from 'react';

function SummaryStatistics({ totalBreweries, averageBreweriesPerState, breweryTypes }) {
    return (
        <div className="summary-statistics">
            <h2>Summary Statistics</h2>
            <p>Total Breweries: {totalBreweries}</p>
            <p>Average Breweries per State: {averageBreweriesPerState.toFixed(2)}</p>
            <h3>Breweries by Type:</h3>
            <ul>
                {Object.entries(breweryTypes).map(([type, count]) => (
                    <li key={type}>
                        {type}: {count}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SummaryStatistics;
