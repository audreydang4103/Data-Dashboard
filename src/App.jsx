import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FilterControls from './FilterControls';
import SummaryStatistics from './SummaryStatistics';
import DataList from './DataList';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');

  // Fetching data using useEffect and async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Summary statistics
  const totalBreweries = data.length;

  const breweryTypes = data.reduce((types, brewery) => {
    const type = brewery.brewery_type;
    types[type] = (types[type] || 0) + 1;
    return types;
  }, {});

  const breweriesByState = data.reduce((states, brewery) => {
    const state = brewery.state;
    states[state] = (states[state] || 0) + 1;
    return states;
  }, {});

  const totalStates = Object.keys(breweriesByState).length;
  const averageBreweriesPerState = totalBreweries / (totalStates || 1);

  // Filtered data
  const filteredData = data
    .filter((brewery) => brewery.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((brewery) => (typeFilter ? brewery.brewery_type === typeFilter : true))
    .filter((brewery) => (stateFilter ? brewery.state === stateFilter : true));

  return (
    <div className="App">
      <h1>Brewery Dashboard</h1>

      {/* Summary Statistics */}
      <SummaryStatistics
        totalBreweries={totalBreweries}
        averageBreweriesPerState={averageBreweriesPerState}
        breweryTypes={breweryTypes}
      />

      {/* Search and Filter Controls */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterControls
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        data={data}
      />

      {/* Breweries List */}
      <DataList data={filteredData} />
    </div>
  );
}

export default App;
