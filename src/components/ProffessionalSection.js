import { details } from "../details"

const ProfessionalSection = () => {
    return (
      <div className="professional-container">
        <h1 className='name-heading'>{details?.name}</h1>
        <h2 className='designation-heading'>{details?.designation}</h2>

        <h2 className='professional-heading'>Profile</h2>
        <p className='professional-texts'>
          {details?.profile}
        </p>

        <h2 className='professional-heading'>Projects</h2>
        <div className='details-container'>
          {details?.projects.map((work, key) => {
            return (
              <div className="project-contaiiner" key={key}>
                <h2 className='professional-sub-heading'>{work.projectName}</h2>
                <div className='job-detail-head'>
                  <p className='company-name'>
                    {work?.technology}
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
      </div>
    )
  }

  export default ProfessionalSection;