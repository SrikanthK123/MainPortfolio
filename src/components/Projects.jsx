import React from 'react';
import Slider from 'react-slick';
import { ProjectLists, CertificateList } from './Data';
import { Image, Row, Col } from 'antd';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Projects = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className='' style={{height:'auto'}} id='projects'>
      <h3 className='text-center fw-bold text-white' style={{fontSize:'30px',fontFamily:'cursive'}}>Projects</h3>
      <div className='container'>
        <Slider {...settings}>
          {ProjectLists.map((project, index) => (
            <div key={index} style={{ padding: '0 10px' }}>
              <div className="cookie-card" style={{ margin: '10px', height: '240px', background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.BGImageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="title text-white">{project.Title}</span>
                <p className="description text-white" style={{ fontFamily: 'monospace' }}>{project.Desc.slice(0, 100)}....</p>
                <div className="actions" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <button className="accept">View</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default Projects;
