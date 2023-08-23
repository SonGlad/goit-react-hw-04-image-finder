import { styled } from "styled-components";


export const ImageGalleryItemStyles = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 360px;
    box-shadow: 0 20px 38px rgba(0,0,0, 0.1), 0 10px 20px;

.image {
    display: block;
    max-width: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    margin: 0 auto;
}

.info {
    background-color: rgb(255, 255, 255, 0.4);
    display: flex;
    padding: 5px;
    height: 160px;
    max-width: 360px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.info-item{
    margin-top: 0;
    margin-bottom: 5px;
}
`