import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './JobListings';
import ViewAllJobs from './ViewAllJobs';

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  );
};

export default App