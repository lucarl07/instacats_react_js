// Importando a folha de estilo:
import '../css/Content.css';

// Importando imagens:
import cat01 from '../assets/img/img-01.png'
import cat02 from '../assets/img/img-02.png'
import cat03 from '../assets/img/img-03.png'
import cat04 from '../assets/img/img-04.png'
import cat05 from '../assets/img/img-05.png'
import cat06 from '../assets/img/img-06.png'
import cat07 from '../assets/img/img-07.png'
import cat08 from '../assets/img/img-08.png'
import cat09 from '../assets/img/img-09.png'
import cat10 from '../assets/img/img-10.png'
import cat11 from '../assets/img/img-11.png'
import cat12 from '../assets/img/img-12.png'

const Content = () => {
    return (
        <section className="content">
            {/* Primeira Grade 3-2-1:*/}
            <div className="grid-3-cats">
                <img src={cat01} alt="Imagem de um gato" />
                <img src={cat02} alt="Imagem de um gato" />
                <img src={cat03} alt="Imagem de um gato" />
            </div>
            <div className="grid-2-cats">
                <img src={cat04} alt="Imagem de um gato" />
                <img src={cat05} alt="Imagem de um gato" />
            </div>
            <div className="grid-1-cat">
                <img src={cat06} alt="Imagem de um gato" />
            </div>
    
            {/* Segunda Grade 3-2-1: */}
            <div className="grid-3-cats">
                <img src={cat07} alt="Imagem de um gato" />
                <img src={cat08} alt="Imagem de um gato" />
                <img src={cat09} alt="Imagem de um gato" />
            </div>
            <div className="grid-2-cats">
                <img src={cat10} alt="Imagem de um gato" />
                <img src={cat11} alt="Imagem de um gato" />
            </div>
            <div className="grid-1-cat">
                <img src={cat12} alt="Imagem de um gato" />
            </div>
        </section>
    );
}

export default Content;