import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import ViewAllJobs from '../components/ViewAllJobs';
import JobListings from '../components/JobListings';

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage