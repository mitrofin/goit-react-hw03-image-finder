import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        imageName: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            toast.error("Enter correct value!");
            return;
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    }
    
    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    }

    render() {
        return (
            <div>
                <header className={styles.searchbar}>
                    <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={styles.searchFormButton}>
                            <span className={styles.searchFormButtonLabel}>Search</span>
                        </button>

                    <input
                        className={styles.searchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleNameChange}
                        />
                    </form>
                </header>
            </div>
        )
    }
}