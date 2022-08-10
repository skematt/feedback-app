import React from 'react';
import Card from "../shared/Card";
import {Link} from 'react-router-dom'

function AboutPage(props) {
    return (
        <Card>
            <div className={'about'}>
                <h1>About this project</h1>
                <p>This is a feedback form, where users are allowed to submit feedback, with live updates</p>
                <p>Version 1.0.0</p>
                <Link to={'/'}>Back to home</Link>
            </div>
        </Card>
    );
}

export default AboutPage;