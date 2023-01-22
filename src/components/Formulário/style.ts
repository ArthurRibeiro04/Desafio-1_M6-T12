import styled from "styled-components";

export const Form = styled.div`
    width: 550px;
    height: 480px;
    background-color: white;
    border-top: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 0px 10px 1px lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 50px;
        margin-bottom: 40px;
        color: rgb(70, 70, 70);
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin-top: 10px;
        margin-bottom: 15px;
        width: 350px;
        height: 45px;
        border-radius: 5px;
        border: 2px solid lightgray;
        font-size: 20px;
        padding-left: 20px;
    }
    input:focus{
        border: 2px solid rgb(47, 77, 192);
        outline: 0;
        
    }
    input[type="number"] {
  -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
    label{
        color: gray;
        font-size: 16px;
        font-weight: 700;
    }

button{
    height:50px;
    border: none;
    color: white;
    background-color: rgb(49, 79, 199);
}
button:hover{
    background-color: rgb(30, 60, 180);
}
`