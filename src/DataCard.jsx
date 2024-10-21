
import React from 'react';

function DataCard({ brewery }) {
    return (
        <div className="data-card">
            <h3>{brewery.name}</h3>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>State: {brewery.state}</p>
            {brewery.website_url && (
                <p>
                    Website:{' '}
                    <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                        {brewery.website_url}
                    </a>
                </p>
            )}
        </div>
    );
}

export default DataCard;
