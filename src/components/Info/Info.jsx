import './Info.css'
import fullmoon from '../../images/fullmoon.png'

const Info = () => {
    return (
        <div className='info'>
            <img className='fullmoon' src={fullmoon} alt='taot' height={380}/>  
            <div className='content'>
                <h2 className='title text-center'>Las cartas revelan aquello que quieres saber</h2>
                <button className='tirada border-0'>ELIGE TU TIRADA</button>
            </div>
        </div>
    );
}

export default Info;
