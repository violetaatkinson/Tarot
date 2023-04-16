import './Info.css'
import fullmoon from '../../images/fullmoon.png'

const Info = () => {
    return (
        <div>
            <img className='fullmoon' src={fullmoon} alt='taot' height={380}/>  
            <div className='content'>
                <h2 className='title'>Las cartas revelan aquello que quieres saber</h2>
                <button className='tirada border-0'>ELIJE TU TIRADA</button>
            </div>
        </div>
    );
}

export default Info;
