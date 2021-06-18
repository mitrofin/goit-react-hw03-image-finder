import { Component } from 'react';
import Loader from "react-loader-spinner";
import styles from './Loader.module.scss';

export default class Loaders extends Component {
  //other logic
  render() {
    return (<div className={styles.containerLoader}><Loader
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={1000} //3 secs
      /></div>
      
    );
  }
}