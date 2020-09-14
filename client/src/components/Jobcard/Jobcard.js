import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import './Jobcard.css'

const Jobcard = (props) => {

  let match = useRouteMatch('/job/:jobId')

  // var job = props.userState.jobinfo.filter((job) => { return job.id === parseInt(match.params.jobId)})

  var job = props.userState.jobinfo.slice(parseInt(match.params.jobId) - 1, parseInt(match.params.jobId))
  console.log(job)

  return (
    <>
      {job ?
        job.map(
          (job, i) => (

            <li>
              <div className="jobCard">
                <div className="jobtitle">
                  <h1 className="jobtext">{job.title}</h1>
                  <button className="jobapply">Apply</button>
                </div>
                <hr className="jobhr" />
                <hr className="jobhr" />
                <div className="jobContainer">
                  <h2 className="jobtext">Company : {job.company}</h2>
                  <br />

                  {job.location ? (<h3 className="jobtext">Location : {job.location}</h3>) : <h3 className="jobtext">Location : No Description</h3>}
                  <h3 className="jobtext">Type : {job.job_type}</h3>
                  <h3 className="jobtext">Skills : {job.skills_tag.join()}</h3>
                  <h3 className="jobtext">Applied : {job.applicant_count}</h3>
                  <br />

                  <h3 className="jobtext discription">Description : {job.description}</h3>
                </div>
              </div>
            </li>

          )
        ) : <h2>No Info</h2>
      }
    </>
  )
}

export default Jobcard