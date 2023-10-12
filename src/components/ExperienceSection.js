import React from 'react'
import { details } from '../details'

const ExperienceSection = () => {
  return (
    <div className='experience-container'>
        <div className='experience-contents'>
        <h2 className='professional-heading'>Professional Experience</h2>
        <div className='details-container'>
          {details?.experience.map((work, key) => {
            return (
              <div className='company-item' key={key}>
                <h2 className='professional-sub-heading'>{work.jobName}</h2>
                <div className='job-detail-head'>
                  <p className='company-name'>
                    {work?.companyName}
                  </p>
                  <p className='time-period'>
                    {work?.timePeriod}
                  </p>
                </div>
                <ul className='points-area'>
                  {work?.points?.map((point, key) => {
                    return (
                      <li className='point' key={key} dangerouslySetInnerHTML={{ __html: point }}>
                      </li>
                    )
                  })}
                </ul>

              </div>
            )
          })}   
        </div>

        <h2 className='professional-heading'>Education/Certifications</h2>
        <div className='details-container'>
          {details?.education.map((course, key) => {
            return (
              <div key={key} className="detail-item">
                <h2 className='professional-sub-heading'>{course?.course}</h2>
                <div className='job-detail-head'>
                  <p className='company-name'>
                    {course?.institution}
                  </p>
                  <p className='time-period'>
                    {course?.timePeriod}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <h2 className='professional-heading'>Languages</h2>
        <div className='details-container'>
          <div className='languages-section'>
            {details?.languages.map((language, key) => {
              return (
                <div className='languages-container' key={key}>
                  <h2 className='language-name'>{language?.name}</h2>
                  <p className='language-level'>{language?.level}</p>
                </div>
              )
            })}
          </div>
        </div>
        </div>
    </div>
  )
}

export default ExperienceSection