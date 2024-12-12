import BannerSobreNosotros from "./componentes/sobre-nosotros/banner";
import MisionVision from './componentes/sobre-nosotros/misonyvision';
import NuestroEquipo from "./componentes/sobre-nosotros/nuestroequipo";
import EducacionDeCalidad from "./componentes/sobre-nosotros/educacioncalidad";
import './estilos/estilos-pagina-sobre-nosotros/banner.css';
import './estilos/estilos-pagina-sobre-nosotros/fuente-de-letra-sobre-nosotros.css';
import './estilos/estilos-pagina-sobre-nosotros/misionyvision.css';
import './estilos/estilos-pagina-sobre-nosotros/nuestroequipo.css';
import './estilos/estilos-pagina-sobre-nosotros/escucacioncalidad.css';
function sobreNosotros(){
    return (
        <div>
            <BannerSobreNosotros />
            <MisionVision />
            <NuestroEquipo />
            <EducacionDeCalidad />
        </div>
    );
}

export default sobreNosotros;
