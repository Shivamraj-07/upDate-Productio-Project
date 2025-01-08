import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const AdminUserPage = () => {
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recruiters');
        setRecruiters(response.data); // Set recruiters in state after fetching
      } catch (error) {
        console.error('Error fetching recruiters:', error);
      }
    };

    fetchRecruiters();
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleBanStatus = async (email, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Banned' : 'Active';
    try {
      const response = await axios.patch(`http://localhost:5000/recruiters/${email}/ban`, {
        status: newStatus, // Send 'Active' or 'Banned'
      }, { withCredentials: true });
      

      // Update status locally in the state
      setRecruiters((prevRecruiters) =>
        prevRecruiters.map((recruiter) =>
          recruiter.email === email
            ? { ...recruiter, status: newStatus }
            : recruiter
        )
      );
      alert(`Recruiter has been ${newStatus === 'Banned' ? 'banned' : 'unbanned'}`);
    } catch (err) {
      console.error('Error updating banned status:', err);
      alert('Error updating banned status.');
    }
  };

  return (

    <><AdminNavBar/>
    <div>
      <h1>Recruiter List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recruiters.map((recruiter) => (
            <tr key={recruiter.email}>
              <td>{recruiter.name}</td>
              <td>{recruiter.email}</td>
              <td>{recruiter.status}</td>
              <td>
                <button onClick={() => toggleBanStatus(recruiter.email, recruiter.status)}>
                  {recruiter.status === 'Active' ? 'Ban' : 'Unban'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminUserPage;
