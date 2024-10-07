import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import { v4 as uuidv4 } from 'uuid';

//Add new job
//  const addJob = async (newJob) => {
//   const res = await fetch('/api/jobs', {
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newJob)
//   });
//   return;
//  }
const addJob = async (newJob) => {
  const rawJobs = localStorage.getItem("data");
  let data = JSON.parse(rawJobs) || {jobs:[]}
  console.log(data)
  newJob.id = uuidv4()
  data.jobs.push(newJob)
  data = JSON.stringify(data);
  localStorage.setItem("data", data);
  return;
 }
 //Delete job

 const deleteJob = async (id) =>{
  const rawJobs = localStorage.getItem("data");
  let data = JSON.parse(rawJobs) || {jobs:[]}
  const newFilteredJob = data.jobs.filter(j => j.id !== id)
  data.jobs = newFilteredJob;
  data = JSON.stringify(data);
  localStorage.setItem("data", data);
  return;
 }

 //Update Job
 const updateJob = async (job) => {
  const rawJobs = localStorage.getItem("data");
  let data = JSON.parse(rawJobs)
  let newJob = data.jobs.map(j => {
    if(job.id === j.id){
      j = job
    }
    return j
  });
  data.jobs = newJob
  data = JSON.stringify(data);
  localStorage.setItem("data", data)
  return;
 }
const App = () => {
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path='/' element = {<MainLayout/>}>
        <Route index element = {<HomePage/>}/>
        <Route path='/jobs' element = {<JobsPage/>}/>
        <Route path='/add-job' element = {<AddJobPage addJobSubmit ={addJob}/>}/>
        <Route path='/edit-job/:id' element = {<EditJobPage updateJobSubmit={updateJob}/>} loader ={jobLoader}/>
        <Route path='/jobs/:id' element = {<JobPage deleteJob = {deleteJob}/>} loader ={jobLoader}/>
        <Route path='*' element = {<NotFoundPage/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router}/>
};

export default App