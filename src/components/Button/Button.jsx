import PropTypes from 'prop-types';
import { LoadMoreBtnStyles } from "./Button.styled";



export const LoadMoreBtn = ({isVisible, onClick}) => {
    return(
        <LoadMoreBtnStyles 
            type="button"
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={onClick}
            >Load more
        </LoadMoreBtnStyles>
    )
};



LoadMoreBtn.propTypes ={
    onClick: PropTypes.func.isRequired,
};