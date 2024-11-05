import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css'

export default function HomePage (){
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/catalog');
    };

    return <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>You can find everything you want in our catalog</p>
        <button type="button" onClick={handleClick}>
        View Now
      </button>
    </div>
}