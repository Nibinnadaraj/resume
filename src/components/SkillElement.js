const SkillElement = ({ name, level }) => {
    const reminder = 10 - level;
    return (
      <div className='skill-element'>
        <div className='skill-dots'>

          {
            [...Array(level)].map((elementInArray, index) => {
              return (
                <span className='skill-circle-active' key={index} />)
            })

          }

          {
            [...Array(reminder)].map((elementInArray, index) => {
              return (
                <span className='skill-circle' key={index} />)
            })

          }
        </div>
        <h2 className='skill-title'>
          {name}
        </h2>
      </div>
    )

  }

  export default SkillElement;