import React from 'react';
import { useState, useEffect } from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner';
const JobListings = ({isHome = false}) => {
  const [jobs, seJobs] = useState([]);
  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome ? '/api/jobs?_limit=3':'/api/jobs'
  //   try {
  //     const res = await fetch(apiUrl);
  //     const data = await res.json();
  //     seJobs(data);
  //   } catch (error) {
  //     console.log("Error fetching data", error)
  //   }finally{
  //     setloading(false)
  //   }
  //   }
  //   return () => {
  //     fetchJobs();
  //   }
  // }, []);
  
  useEffect(() => {
    const fetchJobs = async () => {
      const rawJobs = localStorage.getItem("data") ;
      let data = JSON.parse(rawJobs) || {jobs:[]}
      seJobs(data.jobs);
      setloading(false)
    }
    return () => {
      fetchJobs();
    }
  }, []);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome? 'Recent Jobs':'Browse Jobs'} 
        </h2>
          {loading ? (
          <Spinner loading={loading}/>
          ):(
            <>
            {jobs.length > 0 ? ( 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) =>{
                  return <JobListing key={job.id} job = {job}/>

                })}
              </div>
              ) :   (
                <h1 className='text-center'>Sorry!! There are no jobs available at the moment.</h1>)}
            </>
          )}  
      </div>
    </section>
  )
}

export default JobListings