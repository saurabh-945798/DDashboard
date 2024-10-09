import React, { useState } from 'react';

const ProjectAllocation = () => {
  const [allocations, setAllocations] = useState([]);

  const teams = ['IOT', 'Design', 'Web'];

  const [projectName, setProjectName] = useState('');
  const [studentNames, setStudentNames] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [teamMembers, setTeamMembers] = useState(0);

  const handleAllocation = (e) => {
    e.preventDefault();
    if (!projectName || !studentNames || !selectedTeam || teamMembers === 0) {
      alert('Please fill in all fields.');
      return;
    }

    const studentsArray = studentNames.split(',').map((name) => name.trim());

    studentsArray.forEach((student) => {
      const allocation = {
        student,
        team: selectedTeam,
        members: teamMembers,
        project: projectName,
      };
      setAllocations((prevAllocations) => [...prevAllocations, allocation]);
    });

    setProjectName('');
    setStudentNames('');
    setSelectedTeam('');
    setTeamMembers(0);
  };

  // Generate CSV for download
  const downloadAllocations = () => {
    if (allocations.length === 0) {
      alert('No allocations to download.');
      return;
    }

    let csvContent = 'Student,Team,Members,Project\n';
    allocations.forEach((allocation) => {
      csvContent += `${allocation.student},${allocation.team},${allocation.members},${allocation.project}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'allocations.csv';
    a.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Project Allocation</h2>
        
        {/* Project Allocation Form */}
        <form onSubmit={handleAllocation}>
          {/* Project Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Project Name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter project name"
            />
          </div>

          {/* Student Input (Manual Input) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Enter Student Names (Comma Separated)</label>
            <textarea
              value={studentNames}
              onChange={(e) => setStudentNames(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter student names, separated by commas (e.g., Alice, Bob, Charlie)"
              rows="3"
            />
          </div>

          {/* Team Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Select Team</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>Select a team</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Team Members */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300">Number of Team Members</label>
            <input
              type="number"
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              min="1"
              placeholder="Enter number of team members"
            />
          </div>

          {/* Allocate Project Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Allocate Project
          </button>
        </form>

        {/* Download Allocations Button */}
        <div className="mt-8 text-center">
          <button
            onClick={downloadAllocations}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Download Allocations
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectAllocation;
