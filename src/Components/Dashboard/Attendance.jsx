import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2'; // For the confirmation popup


const AttendanceChart = () => {
  // Predefined array of 50 student names
  const studentNames = [
    "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Chris Brown",
    "Jessica Wilson", "Daniel Garcia", "Sarah Martinez", "David Miller", "Sophia Anderson",
    "James Taylor", "Emma Thomas", "Benjamin Moore", "Olivia Jackson", "Noah White",
    "Isabella Harris", "Liam Martin", "Mia Thompson", "Ethan Lee", "Ava King",
    "Mason Scott", "Abigail Green", "Lucas Lewis", "Amelia Hall", "Jacob Young",
    "Charlotte Allen", "Logan Hernandez", "Sofia Walker", "Elijah Wright", "Harper Lopez",
    "William Hill", "Aria Adams", "Alexander Clark", "Ella Nelson", "Samuel Perez",
    "Scarlett Baker", "Henry Carter", "Grace Mitchell", "Sebastian Campbell", "Chloe Roberts",
    "Aiden Phillips", "Lily Turner", "Matthew Parker", "Lillian Collins", "Jackson Stewart",
    "Eleanor Morris", "Owen Rodriguez", "Layla Cook", "Gabriel Rogers", "Zoe Reed"
  ];

  // State for students and attendance, initialized with names
  const [students, setStudents] = useState(
    studentNames.map((name) => ({
      name: name,
      present: false,
    }))
  );

  // State for date and time
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().slice(0, 16));

  // Handle attendance toggle
  const toggleAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  // Confirmation popup before downloading
  const confirmDownload = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to download the attendance sheet?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, download it!'
    }).then((result) => {
      if (result.isConfirmed) {
        downloadAttendance();
        Swal.fire('Downloaded!', 'Your attendance file has been downloaded.', 'success');
      }
    });
  };

  // Generate and download the attendance Excel file
  const downloadAttendance = () => {
    const worksheetData = students.map((student) => ({
      Name: student.name,
      Attendance: student.present ? 'Present' : 'Absent',
      Date: new Date(attendanceDate).toLocaleDateString(),
      Time: new Date(attendanceDate).toLocaleTimeString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');
    XLSX.writeFile(workbook, 'attendance.xlsx');
  };

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-8 animate-bounce">Attendance Chart</h1>

      {/* Date and Time Input */}
      <div className="text-center mb-8">
        <label className="mr-4 text-lg font-semibold">Select Date and Time:</label>
        <input
          type="datetime-local"
          value={attendanceDate}
          onChange={(e) => setAttendanceDate(e.target.value)}
          className="border-2 border-gray-600 bg-black text-white rounded-md py-2 px-4"
        />
      </div>

      {/* Attendance Table */}
      <table className="min-w-full bg-gray-800 shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Present/Absent</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b hover:bg-gray-700 transition-all duration-300 ease-in-out">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4 text-center">
                <button
                  className={`${
                    student.present
                      ? 'bg-green-500 text-white hover:bg-green-400'
                      : 'bg-red-500 text-white hover:bg-red-400'
                  } py-1 px-3 rounded-md transition-transform duration-300 transform hover:scale-105`}
                  onClick={() => toggleAttendance(index)}
                >
                  {student.present ? 'Present' : 'Absent'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download Button */}
      <div className="text-center mt-8">
        <button
          onClick={confirmDownload}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-110"
        >
          Download Attendance
        </button>
      </div>
    </div>
  );
};

export default AttendanceChart;
