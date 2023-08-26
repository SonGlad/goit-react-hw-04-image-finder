import PropTypes from 'prop-types';
import { useState } from 'react';
import { HeaderStyles } from "./Searchbar.styled";
import {ReactComponent as SearchIcon} from "../../images/icons/search.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Searchbar = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('');


    const onFormChange = event => {
        setSearchQuery(event.currentTarget.value);
    };

    const onFormSubmit = event => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
      
            toast.info('Please fill in the input field')
            return;
          }
        onSubmit(searchQuery);
        onFormReset();
    };

    const onFormReset = () => {
        setSearchQuery('')
    };



    return (
        <>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
            <HeaderStyles>
                <form className="form" onSubmit={onFormSubmit}>
                    <button type="submit" className="button button-large button-primary">
                        <SearchIcon className='search-icon' width="35" height="35"/> Search
                    </button>
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={onFormChange}
                        value={searchQuery}
                    />
                </form>
            </HeaderStyles>
        </>
    )  
};



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};