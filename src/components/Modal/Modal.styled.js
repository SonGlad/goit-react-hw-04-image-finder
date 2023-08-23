import { styled } from "styled-components";



export const ModalBackdropStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);

.modal {
    position: relative;
    max-width: calc(100% - 48px);
    max-height: calc(100% - 24px);
}

.close-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus{
        transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1.2) rotate(90deg);
        transform-origin: center;
    }
}

.close-icon{
    display: inline-block;
    stroke-width: 0;
    stroke: white;
}

.modal-title{
    margin: 0;
    background-color: white;
    text-align: center;
}
`