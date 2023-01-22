import styled from "styled-components";

export const Lista = styled.div`
    background-color: rgb(240, 240, 240);
    height: 480px;
    width: 300px;
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 0px 10px 1px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top: 100px;
        border-bottom: 2px solid lightgray;
        width: 220px;
        color: rgb(47, 77, 192);
        font-weight: 700;
        font-style: italic
    }
    ul{
        list-style: none
    }
    ul > li{
        display:flex;
        margin-right: 30px;
        align-items: center
    }
    p{
        font-size: 20px;
        color: rgb(47, 77, 192)
    }
    span{
        margin-left: 10px;
        font-size: 20px;
        color: rgb(47, 77, 192);
        font-weight: 700;
    }

`