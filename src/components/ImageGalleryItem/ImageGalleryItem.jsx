import PropTypes from 'prop-types';
import { ImageGalleryItemStyles } from "./ImageGalleryItem.styled";



export const ImageGalleryItem = ({webformatURL, largeImageURL, id, tags, likes, views, comments, downloads, onClick}) => {
    return(
        <ImageGalleryItemStyles key={id}>
            <img className="image" src={webformatURL} alt={tags} 
            width="360" 
            height ="240" 
            loading="lazy"
            onClick={() => {onClick(largeImageURL)}}/>
            <div className="info">
                <p className="title"><strong>Tags:</strong> {tags}</p>
                <p className="info-item">
                    <b>Likes: {likes}</b>
                </p>
                <p className="info-item">
                    <b>Views: {views}</b>
                </p>
                <p className="info-item">
                    <b>Comments: {comments}</b>
                </p>
                <p className="info-item">
                    <b>Downloads: {downloads}</b>
                </p>
            </div>
        </ImageGalleryItemStyles>
    )
};



ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};