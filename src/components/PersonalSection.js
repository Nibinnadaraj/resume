import { details } from "../details";
import SkillElement from "./SkillElement";

const PersonalSection = () => {
  return (
    <div className="personal-container">
      <div className='personal-section'>
        <h2 className='personal-heading'>Contact</h2>
        {details.contact.map(contact => {
          return (
            <>
            <h2 className='personal-sub-heading'>{contact?.title}</h2>
            {contact?.details.map(details=>{
               return (<p className='personal-texts'>{details}</p>)
            })}
            </>
          )
        })}
      </div>

      <h2 className='personal-heading'>Skills & Expertise</h2>
      <div className='personal-section'>
        {details?.skills.map((skill, key) => {
          return (<SkillElement name={skill?.name} level={skill?.level} />)
        })}
      </div>

      <h2 className='personal-heading'>Interests</h2>
      <p className='personal-texts'>{details?.interests}</p>

    </div>
  )
}

export default PersonalSection;