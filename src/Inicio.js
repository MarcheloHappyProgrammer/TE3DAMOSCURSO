import MainPagIn from './componentes/pagina-inicio/main';
import SectionPagIn from './componentes/pagina-inicio/section';
import './estilos/estilos-pagina-inicio/card-main.css';
import './estilos/estilos-pagina-inicio/main.css';
import './estilos/estilos-pagina-inicio/card-section.css';

function Inicio(){
    return(
        <div>
            <MainPagIn />
            <SectionPagIn />
        </div>
    );
}
export default Inicio;
