import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBackdropStyle } from "./Modal.styled";
import {ReactComponent as CloseIcon} from "../../images/icons/close.svg";
import PropTypes from 'prop-types';



const modalRoot = document.querySelector('#modal-root');



export class Modal extends Component {

    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'hidden';
    };

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'auto';
    };


    handleKeyDown = event => {
        if(event.code === 'Escape'){
            this.props.onClose();
        }
    };
    
    handleBackdropClick = event => {
        if(event.currentTarget === event.target){
            this.props.onClose();
        }
    };

    handleCloseClick = () => {
        this.props.onClose();
    };


    render(){
        const { articles, largeImageURL } = this.props;
        const currentImageTag = articles.find(item => item.largeImageURL === largeImageURL);

        return createPortal(
            <ModalBackdropStyle onClick={this.handleBackdropClick}>
                <div className="modal">
                    <button type="button" className="close-btn" onClick={this.handleCloseClick}>
                        <CloseIcon className="close-icon" width="40" height="40"/>
                    </button>
                    <img src={largeImageURL} alt="{currentImageTag?.tags}" />
                    <h2 className="modal-title">{currentImageTag?.tags}</h2>
                </div>
            </ModalBackdropStyle>,
            modalRoot
        )
    };
};



Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};