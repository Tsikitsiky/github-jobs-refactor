import styled from 'styled-components';

export const Container = styled.main`
    padding-top: 50px; 
    padding: 0 12px;
    @media(min-width: 1000px) {
        display: flex;
        flex-direction: row;
        max-width: 1040px;
        margin: 0 auto;
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
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    margin-bottom: 1rem;
    @media(min-width: 600px) {
        display: grid;
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
`;
export const JobTitle = styled.p`
    margin: 0;
    font-size: 18px;
`;
export const Logo = styled.img`
    max-width: 90px;
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
    
`;
export const Group = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

export const Company = styled.p`
    margin: 0;
    font-weight: 700;
    font-style: 12px;
    line-height: 14px;
`;
