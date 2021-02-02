import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 12px;
    display: flex;
    gap: 1rem;
    @media(min-width: 1000px) {
        justify-content: flex-end;
        max-width: 1040px;
        margin: 50px auto;
        padding: 0;
    }
`;

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    outline: none;
    border:1px solid #B7BCCE;
    color: #B7BCCE;

    &:hover {
        border: 1px solid #1E86FF;
        color: #1E86FF;
    }

    &:active {
        color: white;
        background-color: #1E86FF;
    }
`;
export const Dote = styled.p``;