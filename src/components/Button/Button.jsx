import PropTypes from 'prop-types';
import style from './Button.module.css'

export default function Button({onClick}) {
    return (
        <div className={style.buttonLoadContainer}>
            <button type="button" className={style.buttonLoad} onClick={onClick} aria-label='Load more'>Load more</button>
        </div>
    )
}

Button.propTypes = {
    incrementPage: PropTypes.func,
}