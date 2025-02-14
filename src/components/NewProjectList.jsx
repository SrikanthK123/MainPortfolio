import React from 'react';
import { ProjectLists } from './Data';
import { Avatar } from 'antd';

const NewProjectList = () => {
  return (
    <div className="container" id='NewProjectList'>
      <div className="row">
        <h3 className='text-center fw-bold text-white mb-4' style={{fontSize:'30px',fontFamily:'cursive,monspace'}}>Projects</h3>
        {ProjectLists.map((item, index) => (
          <div className="col-12 mb-5 d-flex justify-content-center" key={index}>
            <div className="card">
              <div className="card__border"></div>
              <div className="card_title__container d-flex align-items-center">
                <img 
                  src={item.ImageUrl} 
                  alt={item.Title} 
                  style={{ marginRight: '10px', width: '30px', borderRadius: '50%' }} 
                />
                <span className="card_title mb-3 mt-2">{item.Title}</span>
              </div>
              <p className="card_paragraph text-white">{item.Desc.slice(0, 110)}....</p>
              <p className="no-margin-padding">
                <span className="text-white">Skills</span> :
              </p>
              <div className="skills-container d-flex flex-wrap">
                {item.Language.map((lang, i) => (
                  <div className="skills-btn" key={i}>
                    <div className="btn btn text-white " id='SkillsBtn'>{String(lang)}</div>
                  </div>
                ))}
              </div>
              <button className="button my-4" onClick={() => window.open(item.projectUrl, '_blank')}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProjectList;
