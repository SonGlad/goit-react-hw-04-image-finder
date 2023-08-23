import PropTypes from 'prop-types';
import { ContainersStyle } from './Containers.styled';



export const Containers = ({title, children}) => {
    return(
        <ContainersStyle>
            <h2 className='title'>{title}</h2>
            {children}
        </ContainersStyle>
    )
};



Containers.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};