import Header from '../Header/Header';
import css from './Layout.module.css';

export default function Layout ({children}){
    return <div className={css.container}>
        <Header />
        <main>
            {children}
        </main>
    </div>
}