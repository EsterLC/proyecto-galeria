import LoginButton from '../components/LoginButton';
import styles from '../css/navegador.module.css'
import logotipo from '../img/logotipo.png';
import imgBanner from '../img/banner.svg';



const NavBar= () =>

    <body>
        <div className={styles.head}>
            <div className={styles.navbar}>
                <img src={logotipo}/>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Acerda de</a></li>
                    <li><a href='#'>Contactos</a></li>
                    <li><LoginButton/></li>
                </ul>
            </div>
            <div className={styles.banner}>
                <div className={styles.columnaIzquierda}>
                    <h1><span>Todos tus recuerdos</span> en un mismo lugar</h1>
                </div>
                <div className={styles.columnaDerecha}>
                    <img src={imgBanner}/>
                </div>
            </div>
        </div>
    </body>


export default NavBar;