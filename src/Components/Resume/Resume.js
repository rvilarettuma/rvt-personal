import React from "react";
import jobs from "./Text.json";
import Job from "../Job/Job";
import FancyHeader from "../FancyHeader/FancyHeader";

function getJobs() {
    var jobsArray = jobs;
    var result = [];
    for (const job in jobsArray) {
        result.push(
            <Job job={jobsArray[job]} />
        )  
    }
    return result;
}

function Resume() {
    return (
        <div className="resume-section">
                  <FancyHeader text="Resume"/>
            {getJobs()}
        </div>
    );
}

export default Resume;