import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import fetchImage from '../../services/FetchImage';
import Modal from '../Modal';
import Button from '../Button';
import Loader from '../Loader';
import ErrorNotification from '../ErrorNotification';
import styles from './ImageGallery.module.css';


export default class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        showModal: false,
        largeImageURL: null,
        loading: false,
        error: null,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevName !== nextName) {
            this.setState({ loading: true, images: [] });

            fetchImage(nextName)
            .then(data => {
                    if (data.hits.length > 0) {
                        this.setState({ images: data.hits });
                    }
                })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
        }
        if (prevPage !== nextPage) {
            this.setState({ loading: true });

            fetchImage(nextName, nextPage)
            .then(data => {
                    this.setState(prev => ({
                        images: [...prev.images, ...data.hits],
                    }));
                })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
        }
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
    }

    toglleModal = image => {
        this.setState(({showModal}) => ({
            showModal: !showModal,
            largeImageURL: image,
        }))
    }

     onIncrementPage = (event) => {
        this.setState({ page: this.state.page + 1 });
    }
    
    render() {
        const { error, largeImageURL, showModal, images, loading} = this.state;
    
            return (
            <>
                {error && <ErrorNotification message={error.message}/>}
                {images &&
                    <ul className={styles.imageGallery}>
                        <ImageGalleryItem images={images} onClick={this.toglleModal} />
                    </ul>}
                {loading && <Loader />}
                {images.length > 0 && !loading && <Button onClick={this.onIncrementPage} />}
                {showModal && <Modal image={largeImageURL} onCloseModal={this.toglleModal} />}
            </>
        );  
    }
}