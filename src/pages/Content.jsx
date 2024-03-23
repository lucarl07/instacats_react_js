/** Instacats - Main Page - Conteúdo Principal:
 * Feito por lucarl07
 * Criado em: 23/03/2024
 */

// Importando a folha de estilo:
import '../css/Content.css';

// Importando as imagens de gato:
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

// Declarando o conteúdo em grade:
const Content = () => {
    return (
        <section className="content">
            {/* Primeira Grade 3-2-1:*/}
            <div className="grid-3-cats">
                <img src={cat01} alt="Gato estendendo sua pata para cima" />
                <img src={cat02} alt="Gato sorrindo para a câmera" />
                <img src={cat03} alt="Gato tigrado ao lado de um canal" />
            </div>
            <div className="grid-2-cats">
                <img src={cat04} alt="Gato laranja deitado em cima de uma mesa" />
                <img src={cat05} alt="Gato cinza usando óculos espelhado" />
            </div>
            <div className="grid-1-cat">
                <img src={cat06} alt="Gato com mancha preta na cabeça deitado" />
            </div>
    
            {/* Segunda Grade 3-2-1: */}
            <div className="grid-3-cats">
                <img src={cat07} alt="Gato laranja e branco te olha" />
                <img src={cat08} alt="Gato cinza olhando para o céu" />
                <img src={cat09} alt="Gato peludo com uma borboleta em cima de seu focinho" />
            </div>
            <div className="grid-2-cats">
                <img src={cat10} alt="Gato malhado de olhos verdes" />
                <img src={cat11} alt="Gato branco olha para o lado" />
            </div>
            <div className="grid-1-cat">
                <img src={cat12} alt="Dois gatos filhotes, um branco e um preto, deitados juntos" />
            </div>
        </section>
    );
}

// Exportando o conteúdo:
export default Content;
