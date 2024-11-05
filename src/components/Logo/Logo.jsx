import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo (){

    return <div className={css.container}>
        <Link to="/">
            <img src="/Logo.svg" alt="logo" />
        </Link>
    </div>
}

