import React, { useRef } from 'react';
import profileImage from './1.jpg';
import { details } from './details';
import { useReactToPrint } from 'react-to-print';
import PersonalSection from './components/PersonalSection';
import ProfessionalSection from './components/ProffessionalSection';
import ExperienceSection from './components/ExperienceSection';
function App() {

  const Print = () =>{     
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }

  const PrintComponent = React.forwardRef((props, ref) => {
    return (
      <>
      <div ref={ref} id="printablediv" className="canvas-container">
      <div className="page-container">
        <div className="shape-blue" />
        <div className="shape-green" />
        <img src={profileImage} alt="profile-pic" className="profile-image" />
        <PersonalSection />
        <ProfessionalSection />
        </div>
        <div  className="content-container">
        <ExperienceSection/>
        <div className="shape-blue-bottom" />
        <div className="shape-green-bottom" />
        </div>
      </div>

      </>
    )
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
    <button onClick={handlePrint}>Print this out!</button>
      <PrintComponent ref={componentRef} />
    </div>
  );
}

export default App;
