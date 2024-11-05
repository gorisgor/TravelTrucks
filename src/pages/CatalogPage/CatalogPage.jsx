import Filters from '../../components/Filters/Filters';
import Location from '../../components/Location/Location';
import CampersList from '../../components/CampersList/CampersList'
import css from './CatalogPage.module.css';

export default function CatalogPage (){
    return <div>
        <Location />
        <Filters/>
        <CampersList />
    </div>
}