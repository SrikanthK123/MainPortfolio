import React from 'react';
import { ProjectLists } from './Data';

const NewProjectList = () => {
  return (
    <div className="container" id='NewProjectList'>
        
      <div className="row">
      <h3 className='text-center fw-bold text-white mb-4' style={{fontSize:'30px',fontFamily:'cursive,monspace'}}>Projects</h3>
        {ProjectLists.map((item, index) => (
         <div className="col-12 mb-5 d-flex justify-content-center" key={index}>
         <div className="card">
           <div className="card__border"></div>
           <div className="card_title__container">
             <span className="card_title">{item.Title}</span>
             <p className="card_paragraph">{item.Desc.slice(0,150)}....</p>
           </div>
           <p className="no-margin-padding">
             <span className="text-white">Skills</span> :
           </p>
           <div className="row no-margin-padding">
             {item.Language.map((lang, i) => (
               <div className="col no-margin-padding" key={i}>
                 <div className=" btn btn text-white" id='SkillsBtn'>{String(lang)}</div>
               </div>
             ))}
           </div>
           <button className="button my-2" onClick={() => window.open(item.projectUrl, '_blank')}>View</button>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default NewProjectList;
