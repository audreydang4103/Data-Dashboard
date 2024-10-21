import React from 'react';

function FilterControls({ typeFilter, setTypeFilter, stateFilter, setStateFilter, data }) {
    return (
        <div className="filter-controls">
            <label>
                Type:
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    <option value="">All Types</option>
                    {[...new Set(data.map((brewery) => brewery.brewery_type))].map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                State:
                <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
                    <option value="">All States</option>
                    {[...new Set(data.map((brewery) => brewery.state))].map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
}

export default FilterControls;
