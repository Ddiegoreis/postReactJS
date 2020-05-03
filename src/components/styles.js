import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 600px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eceffc;
    border-radius: 20px;
    box-shadow: 1px 1px 10px 3px #ccc;
    overflow: hidden;
`;

export const TituloContainer = styled.div`
    margin: 0;
    width: 100%;
    background: linear-gradient(
        250deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(84, 104, 194, 1) 0%,
        rgba(80, 31, 142, 1) 100%,
        rgba(0, 212, 255, 1) 100%
    );
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    color: #fff;
    transform: translate(0, -50%);
    box-sizing: border-box;
    top: 0;
`;

export const Titulo = styled.h1`
    text-align: center;
    padding: 10px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 800;
    font-size: 28px;
`;
