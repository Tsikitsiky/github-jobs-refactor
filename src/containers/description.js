import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Description from '../components/description'
import { Context } from '../global-context';
import {differenceInDays} from 'date-fns'

export default function DescriptionContainer() {
    const {state} = useContext(Context);
    const {jobList} = state;
    const {id} = useParams();
    const jobDetail = jobList.find(job => job.id === id);
    console.log(jobDetail);
    
    return (
        <Description>
            <Description.Pane>
                <Description.Link to='/'>&#8592; Go back to search</Description.Link>
                <Description.SideTitle>How to apply</Description.SideTitle>
                <Description.SideText dangerouslySetInnerHTML={{ __html: jobDetail.how_to_apply }} />
                    {/* Please email a copy of your resume and online portfolio to &nbsp;
                    <Description.Link to={jobDetail.company_url}>{jobDetail.company_url}</Description.Link> */}
                {/* </Description.SideText> */}
            </Description.Pane>
            <Description.Pane>
                <Description.Group>
                    <Description.Title>{jobDetail.title}</Description.Title>
                    <Description.Type>{jobDetail.type}</Description.Type>
                </Description.Group>
                <Description.PublishedOn>{differenceInDays(new Date(), new Date(jobDetail.created_at))} days ago</Description.PublishedOn>
                <Description.Group>
                    <Description.Logo src={jobDetail.company_logo} />
                    <Description.Group2>
                        <Description.Company>{jobDetail.company}</Description.Company>
                        <Description.Location>{jobDetail.location}</Description.Location>
                    </Description.Group2>
                </Description.Group>
                <Description.Text dangerouslySetInnerHTML={{ __html: jobDetail.description }} />
            </Description.Pane>
        </Description>
    )
}
