import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var schoolImage= `images/${this.props.data.schoolImage}`;
      var appleImage= `images/${this.props.data.appleImage}`;
      var t1cgImage= `images/${this.props.data.t1cgImage}`;
      var muddyBranchImage= `images/${this.props.data.muddyBranchImage}`;
      var clubZImage= `images/${this.props.data.clubZImage}`;
      var skillmessage = this.props.data.skillmessage;

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}</p>
        <p className="info">{education.degree2}</p>
        </div>
      })

      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
              <div>                
                {work.description1} <br></br> 
                {work.description2} <br></br>
                {work.description3}</div> <br></br>
              </div>
      })
      var projects = this.props.data.projects.map(function(projects){
        return <div key={projects.name}><h3>{projects.name}</h3>
        <p className="info">{projects.tools} <span>&bull;</span> <em className="date">{projects.date}</em></p>
          <div>                
            {projects.description1} <br></br> 
            {projects.description2} <br></br>
            </div> <br></br>
          </div>
  })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
              <div>
                <img className="school-image" src={schoolImage} alt= "My school"/>
              </div>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
            <div>
            <img className="apple-image" src={appleImage} alt= "apple"/>
            <img className="t1cg-image" src={t1cgImage} alt= "tier one consulting group"/>
            <img className="clubZ-image" src={clubZImage} alt= "club z"/>
            <img className="muddyBranch-image" src={muddyBranchImage} alt= "muddy branch alliance"/>
            </div>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
				  {projects}
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
