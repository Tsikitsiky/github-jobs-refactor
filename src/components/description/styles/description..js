import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';


export const Container = styled.div`
    padding: 0 1rem;
    @media(min-width: 1000px) {
        display: flex;
        flex-direction: row;
        max-width: 1040px;
        margin: 50px auto;
        justify-content: space-between;
        padding: 0;
        gap: 50px;
    }
`;

export const Pane = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Text = styled.div``;

export const Title = styled.h2`
`;

export const Type = styled.p`
    margin: 0;
    font-weight: 700;
    font-style: 12px;
    line-height: 14px;
    border: 1px solid #334680;
    max-width: 70px;
    max-height: 27px;
    padding: 8px 16px;
    border-radius: 5px;
`;

export const Logo = styled.img`
    width: 42px;
`;


export const Location = styled.p`
    margin: 0;
    padding-left: 1.5rem;
    background-image: url('/icons/public-24px.svg');
    background-position: left;
    background-repeat: no-repeat;
    background-size: 1rem;
    color: #B9BDCF;
`;

export const PublishedOn = styled.p`
    padding-left: 1.5rem;
    background-image: url('/icons/schedule-24px.svg');
    background-position: left;
    background-repeat: no-repeat;
    background-size: 1rem;
    color: #B9BDCF;
`;

export const Link = styled(ReachRouterLink)`
    font-weight: 500;
    font-style: 14px;
    color: #1E86FF;
    line-height: 21px;
`;

export const SideTitle = styled.h3`
    font-weight: 700;
    font-style: 14px;
    color: #B9BDCF;
    line-height: 21px;
    text-transform: uppercase;
`;
export const SideText = styled.p`
    font-weight: 500;
    font-style: 14px;
    line-height: 21px;
`;

export const Company = styled.p`
    font-weight: 700;
    font-style: 18px;
    line-height: 21px;
    margin: 0;
    `;

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem; 
    align-items: center;
`;

export const Group2 = styled.div``;
