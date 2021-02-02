import styled from 'styled-components';

export const Container = styled.main`
    margin-top: 50px; 
    padding: 0 1rem;
    @media(min-width: 1000px) {
        display: flex;
        flex-direction: row;
        max-width: 1040px;
        margin: 50px auto;
        justify-content: space-between;
        padding: 0;
    }
`;
export const Pane = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const InputTime = styled.input``;
export const InputLocationCheck = styled.input``;
export const Label = styled.label``;
export const List = styled.ul`
    list-style: none;
    padding: 0;
`;
export const Item = styled.li`
    display: grid;
    grid-template-areas: 'img group'
                         'location location';
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    margin-bottom: 1rem;
    @media(min-width: 600px) {
        display: grid;
        grid-template-areas: initial;
        grid-template-columns: auto 1fr auto;
        max-width: 700px;
        gap: 1rem;
    }
`;
export const Location = styled.p`
    margin: 0;
    align-self: flex-end;
    text-align: right;
    padding-left: 1.5rem;
    background-image: url('/icons/public-24px.svg');
    background-position: left;
    background-repeat: no-repeat;
    background-size: 1rem;
    width: fit-content;
    color: #B9BDCF;
    
    @media(max-width: 600px) {
        grid-area: location;
    }
`;
export const JobTitle = styled.p`
    margin: 0;
    font-size: 18px;
`;
export const Logo = styled.img`
    width: 90px; 
    @media(max-width: 600px) {
        grid-area: img;
    }
    /* @media(min-width: 600px) {
        width: 90px;
    } */
`;
export const JobTime = styled.p`
    margin: 0;
    font-weight: 700;
    font-style: 12px;
    line-height: 14px;
    border: 1px solid #334680;
    max-width: 70px;
    padding: 8px 16px;
    border-radius: 5px;
`;
export const InputText = styled.input`
    max-width: 351px;
    outline: none;
    border: none;
    height: 50px;
    border-radius: 5px;
    padding-left: 1rem;

    ::placeholder {
        padding-left: 1.5rem;
        background-image: url('/icons/public-24px.svg');
        background-position: left;
        background-repeat: no-repeat;
        background-size: 1rem;
        color: #B9BDCF;
    }
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    @media(max-width: 600px) {
        grid-area: group;
    }
`;

export const Company = styled.p`
    margin: 0;
    font-weight: 700;
    font-style: 12px;
    line-height: 14px;
`;

export const PublishedOn = styled.span`
    padding-left: 2.5rem;
    background-image: url('/icons/schedule-24px.svg');
    background-position: 1rem;
    background-repeat: no-repeat;
    background-size: 1rem;
`;
