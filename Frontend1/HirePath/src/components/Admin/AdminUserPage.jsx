import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

const AdminUserPage = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecruiters, setFilteredRecruiters] = useState([]);

  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recruiters');
        setRecruiters(response.data); // Set recruiters in state after fetching
        setFilteredRecruiters(response.data); // Initially set filtered list to the full list
      } catch (error) {
        console.error('Error fetching recruiters:', error);
      }
    };

    fetchRecruiters();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter recruiters based on the search term
    const filtered = recruiters.filter((recruiter) =>
      recruiter.name.toLowerCase().includes(searchValue) ||
      recruiter.email.toLowerCase().includes(searchValue)
    );
    setFilteredRecruiters(filtered);
  };

  const toggleBanStatus = async (email, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Banned' : 'Active';
    try {
      await axios.patch(
        `http://localhost:5000/recruiters/${email}/ban`,
        { status: newStatus },
        { withCredentials: true }
      );

      // Update status locally in the state
      setRecruiters((prevRecruiters) =>
        prevRecruiters.map((recruiter) =>
          recruiter.email === email
            ? { ...recruiter, status: newStatus }
            : recruiter
        )
      );

      // Update the filtered list
      setFilteredRecruiters((prevFiltered) =>
        prevFiltered.map((recruiter) =>
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
    <>
      <AdminNavBar />
      <div>
        <h1>Recruiter List</h1>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
        />
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
            {filteredRecruiters.map((recruiter) => (
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
