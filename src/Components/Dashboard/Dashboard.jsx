import React, { useState, useEffect } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import './Dashboard.css';

ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Pie chart data
  const pieData = {
    labels: ['Online', 'Offline', 'Interaction'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 500, 100],
        backgroundColor: ['#4A90E2', '#50E3C2', '#F5A623'],
        hoverBackgroundColor: ['#357ABD', '#3CC19E', '#D98A11'],
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ['CPU', 'Memory', 'Battery', 'Network', 'Storage'],
    datasets: [
      {
        label: 'Droid Performance',
        data: [75, 85, 65, 95, 80],
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1,
        pointBackgroundColor: '#357ABD',
        pointRadius: 5,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Performance (%)',
          color: '#FFF',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Metrics',
          color: '#FFF',
        },
      },
    },
  };

  // Upcoming meetings data
  const upcomingMeetings = [
    { id: 1, title: 'Project Kickoff', date: '2024-10-10', time: '10:00 AM' },
    { id: 2, title: 'Team Sync', date: '2024-10-12', time: '2:00 PM' },
    { id: 3, title: 'Client Review', date: '2024-10-15', time: '3:30 PM' },
    { id: 4, title: 'Budget Planning', date: '2024-10-20', time: '1:00 PM' },
  ];

  // Projects data
  const projects = [
    { id: 1, title: 'Website Redesign', status: 'In Progress', deadline: '2024-11-01' },
    { id: 2, title: 'Marketing Campaign', status: 'Completed', deadline: '2024-09-15' },
    { id: 3, title: 'User Research', status: 'Pending', deadline: '2024-10-20' },
    { id: 4, title: 'App Development', status: 'In Progress', deadline: '2024-12-10' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
  {/* Left side: Image */}
  <div className="flex items-center">
    <img src="https://i.postimg.cc/NG6C8wzB/x.jpg " alt="User" className="rounded-full w-10 h-10" />
  </div>

  {/* Right side: Name and Hamburger Menu */}
  <div className="flex items-center ml-auto">
    <span className="text-gray-200 font-semibold mr-4">Saurabh Sharma</span>
    <button className="text-gray-200 md:hidden" onClick={toggleSidebar}>
      <span className="material-icons">menu</span>
    </button>
  </div>
  
</nav>


      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className={`w-full md:w-1/5 bg-gray-800 text-gray-200 ${sidebarVisible ? 'block' : 'hidden md:block'}`}>
          <div className="p-4 text-xl font-bold border-b border-gray-700">DROID</div>
          <nav className="mt-5">
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link></li>
              {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">eCommerce</a></li> */}
              <li><Link to="/calendar" className="block px-4 py-2 hover:bg-gray-700">Calendar</Link></li>
              <li><Link to="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</Link></li>
              {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Forms</a></li> */}
              <li><Link to="/attendance" className="block px-4 py-2 hover:bg-gray-700">Attendance</Link></li>
              <li><Link to="/search" className="block px-4 py-2 hover:bg-gray-700">Search</Link></li>
              <li><Link to="/allocate" className="block px-4 py-2 hover:bg-gray-700">Allocate</Link></li>


              {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
               */}
               <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Logout</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-4/5 p-4">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg card-glow">
              <h2 className="text-lg font-bold">00</h2>
              <p>Attandance</p>
              <p className="text-green-500 mt-2">0.43% ↑</p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg card-glow">
              <h2 className="text-lg font-bold">00</h2>
              <p>Droid Points</p>
              <p className="text-green-500 mt-2">0.43% ↑</p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg card-glow">
              <h2 className="text-lg font-bold">00</h2>
              <p>Over all Performance</p>
              <p className="text-green-500 mt-2">0.43% ↑</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {/* Pie chart */}
  <div className="chart-glow">
    <h2 className="text-xl font-bold mb-4 text-gray-200">Attendance</h2>
    <div className="relative" style={{ height: '350px', width: '100%' }}>
      <Pie data={pieData} options={{ ...chartOptions, maintainAspectRatio: false }} />
    </div>
  </div>

  {/* Line chart */}
  <div className="chart-glow">
    <h2 className="text-xl font-bold mb-4 text-gray-200">Droid Performance</h2>
    <div className="relative" style={{ height: '350px', width: '100%' }}>
      <Line data={lineData} options={{ ...chartOptions, maintainAspectRatio: false }} />
    </div>
  </div>
</div>


          {/* Upcoming Meetings */}
        {/* Upcoming Meetings and Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
  {/* Upcoming Meetings */}
  <section className="animate-fade-in bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg card-glow">
    <h2 className="text-xl font-bold text-gray-200 mb-4">Upcoming Meetings</h2>
    <div className="grid grid-cols-1 gap-4">
      {upcomingMeetings.map((meeting) => (
        <div key={meeting.id} className="bg-gray-900 text-gray-200 p-4 rounded-lg card-hover transform hover:rotate-1  transition-transform hover:border hover:border-blue-500">
          <h3 className="text-lg font-bold">{meeting.title}</h3>
          <p>Date: {meeting.date}</p>
          <p>Time: {meeting.time}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Projects */}
  <section className="animate-fade-in bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg card-glow">
    <h2 className="text-xl font-bold text-gray-200 mb-4">Projects</h2>
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-900 text-gray-200 p-4 rounded-lg card-hover transform hover:rotate-1 transition-transform hover:border hover:border-blue-500">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p>Status: {project.status}</p>
          <p>Deadline: {project.deadline}</p>
        </div>
      ))}
    </div>
  </section>
</div>


        </main>
      </div>
    </div>
  );
};

export default Dashboard;




