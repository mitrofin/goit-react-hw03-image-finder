import PropTypes, { object } from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
    return (<>
        {images.map(image => (<li key={image.id} className={styles.imageGalleryItem}>
            <img className={styles.galleryItemImage}
                src={image.webformatURL}
                alt=""
                onClick={() => onClick(image.largeImageURL)}
            />
        </li>))}
        </>)
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(object).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;