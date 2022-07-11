import preloader from '../../assets/preloader/preloader.svg';
import classes from './Preloader.module.css';

function Preloader(props) {
  return (
    <div className={classes.preloader_container}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader;
