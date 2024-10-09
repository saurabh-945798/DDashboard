import React, { useState } from 'react';

const Search = () => {
  const [rollNo, setRollNo] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  // Sample data (replace with your actual user data)
  const users = [
    { rollNo: '2315002015', name: 'Saurabh', attendance: '95%', droidPoints: 120, team: 'Design' },
    { rollNo: '2', name: 'Akash', attendance: '80%', droidPoints: 100, team: 'Techanical' },
    { rollNo: '3', name: 'auysh', attendance: '80%', droidPoints: 100, team: 'Game Dev' },

    { rollNo: '4', name: 'rahul', attendance: '80%', droidPoints: 100, team: 'WEB DEVElOPMENT' },

    { rollNo: '5', name: 'aditya', attendance: '80%', droidPoints: 100, team: 'IOT' },

    // Add more sample user data as needed
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.rollNo === rollNo);
    if (foundUser) {
      setUserDetails(foundUser);
    } else {
      alert('User not found!');
      setUserDetails(null);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Search User by Roll No</h2>
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="mr-2 p-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition">
          Search
        </button>
      </form>
      
      {userDetails && (
        <div className="bg-gray-700 p-4 rounded mt-4 shadow-md">
          <h3 className="text-xl font-bold">User Details:</h3>
          <p><strong>Roll No:</strong> {userDetails.rollNo}</p>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Attendance:</strong> {userDetails.attendance}</p>
          <p><strong>Droid Points:</strong> {userDetails.droidPoints}</p>
          <p><strong>Team:</strong> {userDetails.team}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
