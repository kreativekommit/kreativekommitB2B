import React from 'react';
import WorkItem from './components/work-item';

import Styles from './recentwork.module.scss';
import workitem from '../../../images/main page/workitem.jpg'
import workitem2 from '../../../images/main page/workitem2.jpg'
import workitem3 from '../../../images/main page/workitem3.jpg'
import workitem4 from '../../../images/main page/workitem4.jpg'
import workitem5 from '../../../images/main page/workitem5.jpg'
import workitem6 from '../../../images/main page/workitem6.jpg'

const RecentWork = props=> {
    return (
        <div className = {`${Styles.recentwork} container`}>
            <h3 className = {`${Styles.recentwork__heading}`}>Recent Work</h3>
            <hr />
            <p className = {`${Styles.recentwork__details}`}>
                We have a deep understanding of user habits and behaviors.
                We are committed to using fact-based knowledge and our 
                unique brand of innovation to help you dominate the 
                competition. Every project is customized for 
                optimum visibility and audience response.
            </p>
            <div className = {`${Styles.workitems}`}>
                <WorkItem 
                    image = {workitem} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
                <WorkItem 
                    image = {workitem2} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
                 <WorkItem 
                    image = {workitem3} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
                 <WorkItem 
                    image = {workitem4} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
                 <WorkItem 
                    image = {workitem5} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
                 <WorkItem 
                    image = {workitem6} 
                    title = 'BEGA Website Redesign'
                    heading = 'lighting up an internet presence for bega '
                />
            </div>
            <button className = {`${Styles.recentwork__button}`}>view more works</button>
            
        </div>
    )
}
export default RecentWork;