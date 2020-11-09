import React from 'react';
import CV from '../../images/Alfonso-Resume.docx';

function Resume() {
    return (
        <div className="flex-container">
            <div className="flex-row">
                <a href={CV} target="blank">Click for my Resume</a>
            </div>
        </div>
    );
}

export default Resume;