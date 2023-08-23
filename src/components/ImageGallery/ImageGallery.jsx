import PropTypes from 'prop-types';
import { ImageGalleryStyles } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";



export const ImageGallery = ({articles, onClick}) => {
    return(
        <ImageGalleryStyles>
            {articles.map(({webformatURL, largeImageURL, id, tags, likes, views, comments, downloads}) => (
                <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                likes={likes}
                views={views}
                comments={comments}
                downloads={downloads}
                onClick={onClick}
                />
            ))}
        </ImageGalleryStyles>
    )
};



ImageGallery.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            comments: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            downloads: PropTypes.number.isRequired,
        })
        ).isRequired,
        onClick: PropTypes.func.isRequired,
};

