import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var firstName = this.props.data.firstName;
      var school = this.props.data.school;
      var major = this.props.data.major;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {firstName}.</h1>
            <h3>I study <span>{major}</span> at the <span>{school}</span>.</h3>
            <h3>Coding <span>challenges</span> many aspects of thinking such as <span>creativity</span>, <span>organization</span>, and <span>problem solving</span>.
            The never ending <span>curiosity</span> to <span>create</span> powerful things and <span>share</span> them with the world - <span>keeps me up at night</span></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
