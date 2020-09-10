import React from 'react'
import './Sidecard.css'
import {
  Link
} from 'react-router-dom'

const Sidecard = (props) => {
  return (
    <>
      {props.userState.jobinfo ?
        props.userState.jobinfo.map(
          (job, i) => (
            <Link to={`/job/${job.id}`}>
            <li>
              <div className="sideCard">
                <h3>{job.title}</h3>
                <hr className="sidehr"/>
                <div className="sideContainer">
                  <h4>Company : {job.company}</h4>
                  {job.location ? (<p>Location : {job.location}</p>) : <p>Location : No Description</p>}
                  <p>Type : {job.job_type}</p>
                </div>
              </div>
            </li>
            </Link>
          )
        ) : <h2>No Info</h2>
      }

    </>
  )
}

export default Sidecard

// applicant_count: 2
// company: "divercity"
// description: "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
// id: 1
// job_type: "Internship"
// location: "San Francisco, California"
// skills_tag: Array(5)
// 0: "React"
// 1: "Git"
// 2: "JavaScript"
// 3: "HTML"
// 4: "Web architecture and development framework"
// length: 5
// __proto__: Array(0)
// title: "Full Stack Developer"