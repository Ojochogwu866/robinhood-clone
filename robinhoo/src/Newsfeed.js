import React, { useState } from 'react';
import "./Newsfeed.css";
import LineGraph from "./LineGraph";
import  TimeLine from './TimeLine';
import Chip from './Chip';



function Newsfeed() {

    const [popularTopics, setTopics] = useState ([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "HealthCare Supply",
        "Index ETFS",
        "China",
        "Pharma",
    ]);


    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$162,000.00</h1>
                        <p> $102.90 (-0,92) Today </p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                        <TimeLine />
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                <h2> Buying Power</h2>
                <h2>$4.12</h2>
              </div>
              <div className="newsfeed__market__section">
                  <div className="newsfeed__market__box">
                      <p>Markets Open</p>
                      <h1>Happy Thanksgiving</h1>
                  </div>
              </div>
              <div className="newsfeed__popularlist__section">
                  <div className="newsfeed__popularlists_intro">
                      <h1>Popular Lists</h1>
                      <p>Show More</p>
                  </div>
                  <div className="newsfeed_popularlists_badges">
                  {popularTopics.map((topic) => (
                   <Chip 
                label={topic}
                image={"https://avatars.dicebear.com/api/human/${topic}.svg"}
              />
            ))}
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Newsfeed
