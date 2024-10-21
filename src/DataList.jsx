import React from 'react';
import DataCard from './DataCard';

function DataList({ data }) {
    return (
        <div className="data-list">
            {data.length > 0 ? (
                data.map((brewery) => <DataCard key={brewery.id} brewery={brewery} />)
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default DataList;
