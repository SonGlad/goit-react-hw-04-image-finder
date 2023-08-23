import PropTypes from 'prop-types';
import { Component } from "react";
import { HeaderStyles } from "./Searchbar.styled";
import {ReactComponent as SearchIcon} from "../../images/icons/search.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export class Searchbar extends Component {
    state={
        searchQuery: '',
    };


    onFormChange = event => {
        this.setState({searchQuery: event.currentTarget.value});
    };

    
    onFormSubmit = event => {
        event.preventDefault();
        if (this.state.searchQuery.trim() === '') {
      
            toast.info('Please fill in the input field')
            return;
          }
        this.props.onSubmit(this.state.searchQuery);
        this.onFormReset();
    };
   

    onFormReset = () => {
        this.setState({searchQuery: ''})
    };



    render(){
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
                    <form className="form" onSubmit={this.onFormSubmit}>
                        <button type="submit" className="button button-large button-primary">
                            <SearchIcon className='search-icon' width="35" height="35"/>
                        </button>
                        <input
                            className="input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.onFormChange}
                            value={this.state.searchQuery}
                        />
                    </form>
                </HeaderStyles>
            </>
        )  
    };
};



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };