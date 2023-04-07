import React, { useState, useEffect } from "react";
import Company from "./components/Company";
import JobsDesc from "./components/JobDesc";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  async function fetchJobs() {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    const companies = newJobs.map((item) => item.company);
    setCompanies(companies);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  });

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading... Please wait</h1>
      </section>
    );
  }

  function handleClick(company) {
    let selectedIndex;
    const jobsArray = jobs.map((job, index) => {
      if (job.company === company) {
        selectedIndex = index;
      }
    });
    console.log(selectedIndex);
    setValue(selectedIndex);
  }

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="jobs-center">
          <Company
            companies={companies}
            handleClick={handleClick}
            jobs={jobs}
            value={value}
          />
          <JobsDesc jobs={jobs} value={value} />
        </div>
      </section>
    </main>
  );
}

export default App;
