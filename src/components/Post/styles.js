import styled from "styled-components";

export const Container = styled.div`
    margin: 15px;
    padding: 10px;
    border-bottom: 2px solid #cecece;
`;

export const TituloPost = styled.h2`
    font-size: 22px;
    font-family: "Noto Sans", sans-serif;
    font-weight: bold;
    position: relative;
    top: 0;
    left: 0;
    color: #334153;
`;

export const TextInput = styled.input`
    border: 0;
    border-bottom: 1px solid #cecece;
    background: transparent;
    padding: 8px 0 5px 0;
    margin-right: 15px;
    width: 75%;
    font-size: 16px;
`;

export const Botao = styled.button`
    position: absolute;
    border: 2px solid #5468c2;
    border-radius: 4px;
    color: #5468c2;
    font-weight: bold;
    background-color: transparent;
    height: 30px;
    right: 20px;

    &:hover ${this} {
        background-color: #5468c2;
        color: #fff;
        transition: .2s linear;
    }
`;
