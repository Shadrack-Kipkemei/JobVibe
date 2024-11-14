import React, { useState, useEffect } from 'react';
import './jobs.css';  // Ensure the CSS is correctly imported

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);  // State to store users data
  const [currentUser, setCurrentUser] = useState(null); // Placeholder for logged-in user

  // Simulate logged-in user; replace with actual user context or authentication logic
  const loggedInUser = currentUser; // This would be fetched dynamically from a context or login state

  // Fetch jobs, users, and other data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the provided endpoints
        const jobsResponse = await fetch('http://localhost:3000/jobs');
        const jobsData = await jobsResponse.json();

        const usersResponse = await fetch('http://localhost:3000/users');
        const usersData = await usersResponse.json();

        // Assuming jobs data also needs users data or applied jobs info
        setJobs(jobsData);
        setFilteredJobs(jobsData); // Set filtered jobs initially to all jobs
        setUsers(usersData);  // Set users data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.companyName.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  // Function to handle applying for a job
  const handleApply = async (jobId) => {
    if (!loggedInUser) {
      alert('You must be logged in to apply for a job.');
      return;
    }

    // Find the logged-in user
    const user = users.find((u) => u.id === loggedInUser);
    if (user.profile.appliedJobs.includes(jobId)) {
      alert('You have already applied to this job.');
      return;
    }

    // Update the user's applied jobs list (locally)
    const updatedUsers = users.map((user) => {
      if (user.id === loggedInUser) {
        return {
          ...user,
          profile: {
            ...user.profile,
            appliedJobs: [...user.profile.appliedJobs, jobId],
          },
        };
      }
      return user;
    });

    // Update the job's applications list (locally)
    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return {
          ...job,
          applications: [...job.applications, loggedInUser], // Add user to the job's applications
        };
      }
      return job;
    });

    // Optionally, you can send the updates to the server (e.g., using POST or PUT request to API)
    try {
      // Send POST request to apply for the job
      await fetch('http://localhost:3000/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: loggedInUser,
          jobId: jobId,
          status: 'applied',
          appliedDate: new Date().toISOString(),
        }),
      });

      // Update the state with the new data
      setUsers(updatedUsers);
      setJobs(updatedJobs);
    } catch (error) {
      console.error('Failed to apply for job:', error);
    }
  };

  return (
    <header className="head">
      <div id="bar">
        <div className="container-fluid">
          {/* <a className="navbar-brand">Jobvibe</a>
          <a className="navbar-brand">Home</a> */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              id="nav"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" id="btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <section>
        <div id="job">
          {loading ? (
            <p>Loading jobs...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <ul className="list-group">
              {filteredJobs.map((job) => (
                <li className="list-group-item" key={job.id}>
                  <div className="job-image">
                    <img src={job.imageUrl || 'https://via.placeholder.com/150'} alt={job.companyName} className="job-logo" />
                  </div>
                  <h5>{job.title}</h5>
                  <p><strong>Company:</strong> {job.companyName}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Description:</strong> {job.description}</p>
                  <p><strong>Requirements:</strong> {job.requirements.join(', ')}</p>
                  <p><strong>Salary Range:</strong> {job.salary}</p>
                  <p><strong>Posted Date:</strong> {job.postedDate}</p>
                  <p><strong>Applications:</strong> {job.applications.length}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleApply(job.id)}
                    disabled={job.applications.includes(loggedInUser)}  // Disable if already applied
                  >
                    {job.applications.includes(loggedInUser) ? 'Applied' : 'Apply'}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </header>
  );
};

export default Jobs;
