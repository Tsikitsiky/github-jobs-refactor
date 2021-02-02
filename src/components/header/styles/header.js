import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 1rem;
    @media(min-width: 1000px) {
        max-width: 1040px;
        margin: 0 auto;
    }
`;
export const Frame = styled.div`
    background-image: url('/backgroundImg.png');
    padding: 3rem 1rem;
    border-radius: 10px;
`;
export const Logo = styled.h1`
    color: #282538;
`;
export const Title = styled.span`
    font-weight: lighter;
`;
export const Form = styled.form`
    width: 100%;
    text-align: center;
`;
export const Input = styled.input`
    width: 90%;
    height: 50px;
    border-radius: 5px;
    outline: none;
    border: none;
    padding-left: 1rem;

    ::placeholder {
        padding-left: 1.5rem;
        background-image: url('/icons/work_outline-24px.svg');
        background-position: left;
        background-repeat: no-repeat;
        background-size: 1rem;
        color: #B9BDCF;
    }
`;
export const Button = styled.button`
    height: 47px;
    background-color: #1E86FF;
    color: #ffffff;
    outline: none;
    border: none;
    width: 104px;
    margin-left: -112px;
    border-radius: 5px;
`;
