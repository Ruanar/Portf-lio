import { BarraRodape } from "./style";

export default function Rodape() {
    return (
        <BarraRodape>
            <p>	&#169; Ruana Piber 2022</p>
            <div>
                <a href='https://github.com/Ruanar' target='_blank'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/ruana-piber/" target='_blank'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href=" https://wa.me/5548996726565" target='_blank'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </div>
            <p>ruana.piber@gmail.com</p>
        </BarraRodape>
    )
}