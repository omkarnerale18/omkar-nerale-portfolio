import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import github_icon from '../../assets/github_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={work.w_img} alt={work.w_name} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {work.w_link && (
                                        <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="github-link">
                                            <img src={github_icon} alt="GitHub" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{work.w_name}</h3>
                            <p>{work.w_description}</p>
                            <div className="project-technologies">
                                {work.w_technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt='' />
        </div>
    </div>
  )
}

export default MyWork