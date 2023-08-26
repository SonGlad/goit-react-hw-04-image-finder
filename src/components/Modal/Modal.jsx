import { createPortal } from "react-dom";
import { ModalBackdropStyle } from "./Modal.styled";
import {ReactComponent as CloseIcon} from "../../images/icons/close.svg";
import { useEffect } from "react";
import PropTypes from 'prop-types';



const modalRoot = document.querySelector('#modal-root');

export const Modal = ({articles, largeImageURL, onClose}) => {

    useEffect(() =>{
        const handleKeyDown = event => {
            if(event.code === 'Escape'){
                onClose();
            }
        } 
       
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

        
    const handleBackdropClick = event => {
        if(event.currentTarget === event.target){
            onClose();
        }
    };


    const currentImageTag = articles.find(item => item.largeImageURL === largeImageURL);


    
    return createPortal(
        <ModalBackdropStyle onClick={handleBackdropClick}>
            <div className="modal">
                <button type="button" className="close-btn" onClick={onClose}>
                    <CloseIcon className="close-icon" width="40" height="40"/>
                </button>
                <img src={largeImageURL} alt="{currentImageTag?.tags}" />
                <h2 className="modal-title">{currentImageTag?.tags}</h2>
            </div>
        </ModalBackdropStyle>,
        modalRoot
    )
};



Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};