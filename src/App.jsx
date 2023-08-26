import { fetchArticles } from "API/api";
import { Section } from "./components/Section/Section";
import { Containers } from "./components/Containers/Containers";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BounceLoader from "react-spinners/BounceLoader";
import { useCallback, useEffect, useState } from "react";



export const App = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [previousSearchQuery, setPreviousSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const articles = await fetchArticles(searchQuery, page);

      if (page === 1) {
        setImages(articles.hits);
      }
      else{
        setImages(prevState => [...prevState, ...articles.hits]);
      }
      if (articles.hits.length > 0 && page === 1) {
      toast.success('We found your images!!');
      } 
      else if (articles.hits.length === 0) {
      throw new Error();
      } 
    }
    catch (error){
      toast.error('Sorry, there are no images matching your search query. Please try again.');
    }
    finally{
      setIsLoading(false);
    }
  },[page, searchQuery]); 


  useEffect(() => {
    if (page !== 1 || searchQuery.trim() !== "") {
      fetchImages();
    }
  }, [fetchImages, page, searchQuery]);


  const onFormSubmitData = searchQuery => {
    const trimmedQuery = searchQuery.toLowerCase().trim();
    if (trimmedQuery  === 
        previousSearchQuery.toLowerCase().trim()) {
      toast.warn(`You are already viewing ${searchQuery}`); 
    } 
    else {
      setSearchQuery(trimmedQuery); 
      setPage(1);
      setImages([]);
    }
    setPreviousSearchQuery(trimmedQuery);
  };


  const onLoadMoreData = () => {
    setPage(prevPage => prevPage + 1);
  };


  const handleImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };


  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  
  const onClose = () => {
    setShowModal(false);
  };



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Section>

        <Searchbar onSubmit={onFormSubmitData}/>

        <Containers>
          <ImageGallery
            articles={images}
            onClick={handleImageClick}       
          />

          {images.length > 0 && (
            <LoadMoreBtn 
              onClick={onLoadMoreData}
              isVisible={!isLoading} 
            />
          )}

          {isLoading && (
            <div className="loading-spinner"
              style={{position:'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              }}>
              <BounceLoader color={"#36d7b7"} 
                loading={isLoading} 
                size={150}
                speedMultiplier={2} 
              />
            </div>
          )}
        </Containers>

        {showModal && (
          <Modal
            onClose={onClose}
            showModal={showModal}
            largeImageURL={largeImageURL}
            articles={images}
          />
        )}
      </Section>
    </>
  );
};