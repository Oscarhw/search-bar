import React, { useState, useEffect } from 'react';
import './App.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);


  useEffect(() => {

    const data = [
    {
    name: 'Ivan',
    age: '18',
    job: 'CEO'
    },
    {
    name: 'Raymond',
    age: '28',
    job: 'Software Engineer'
    },
    {
    name: 'Chris',
    age: '19',
    job: 'Driver'
    },
    {
    name: 'Bob',
    age: '12',
    job: 'Student'
    },
    {
    name: 'Ada',
    age: '24',
    job: 'Teacher'
    },
    {
    name: 'David',
    age: '16',
    job: 'Student'
    }
    ];

    const filteredResults = data.filter((name) =>
      name.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const highlightMatches = (text) => {
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    };
    

  return (
<div>
    <div className='search'>
        <table className="icon-input">
        <tr>
            <td>
            <input type="text" placeholder="Search..." value={searchTerm} className='searchname' onChange={handleChange} />
            </td>
        </tr>
        </table>
    </div>
    <div className='resultfield'>
      <ul>
        {searchResults.map((result, index) => (
          <li className="list" key={index} onClick={() => handleResultClick(result)} dangerouslySetInnerHTML={{ __html: highlightMatches(result.name) }} />
        ))}
      </ul>
      {selectedResult && (
    <div>
        <p>name: {selectedResult.name}</p>
        <p>age: {selectedResult.age}</p>
        <p>job: {selectedResult.job}</p>
    </div>
    )}
    </div>
</div>
  );
};

export default SearchBar;
