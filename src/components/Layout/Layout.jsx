
import css from './Layout.module.css';

export default function LayOut ({children}){
    return <div>
        <Header />
        <main>
            {children}
        </main>
    </div>
}