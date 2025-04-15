import { useState } from "react";

import { ReactComponent as TypescriptLogo } from "../assets/icons/typescript_logo.svg";
import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";
import { ReactComponent as SassLogo } from "../assets/icons/sass_logo.svg";

import SisefarDesktop01 from "../assets/img/sisefar_layout/sisefar_desktop_01.png";
import SisefarDesktop02 from "../assets/img/sisefar_layout/sisefar_desktop_02.png";
import SisefarDesktop03 from "../assets/img/sisefar_layout/sisefar_desktop_03.png";

export default function Project05() {
    const [currentDesktopSisefar, setCurrentDesktopSisefar] = useState<number>(0);

    const updateSisefarDesktop = (): void => {
        setCurrentDesktopSisefar(currentDesktopSisefar < desktopSisefarImages.length - 1 ? currentDesktopSisefar + 1 : 0);
    };

    const desktopSisefarImages: string[] = [SisefarDesktop01, SisefarDesktop02, SisefarDesktop03];

    return (
        <div data-project={"sisefar"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--sisefar">Proyecto 5</h1>
                    <span className="project__description">
                        Una página Landing para el sistema SISEFARPRO, software para la gestión y seguimiento de medicamentos.
                        <br />
                        Esta landing la hice enteramente yo, y estuve trabajando con algunos endpoints en el Backend para que funcionara algunas
                        interacciones.
                        <br />
                        <br />
                        Entre los principales retos estaban las animaciones dentro de la aplicación y las responsividad para pantallas más pequeñas,
                        siempre buscando respetar el diseño propuesto.
                        <br />
                        <br />
                        <span onClick={() => window.open("https://www.sisefarpro.com/")} style={{ cursor: "pointer" }}>
                            Vísitala aquí
                        </span>
                    </span>
                </div>
                <div className="project__technologies">
                    <h3 className="">Tecnologías utilizadas:</h3>
                    <div>
                        <div className="project__technologie">
                            <ReactLogo data-name={"React"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <TypescriptLogo data-name={"Typescript"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <PythonLogo data-name={"Python"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <SassLogo data-name={"Sass"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <AzureLogo data-name={"Azure DevOps"} className="technologie_logo" />
                        </div>{" "}
                        <div id="follow-pill" className="project__technologie-pill"></div>
                    </div>
                </div>
            </div>
            <div className="project__photos">
                <div className="project__photos-desktop" onClick={updateSisefarDesktop}>
                    <img src={desktopSisefarImages[currentDesktopSisefar]}></img>
                </div>
            </div>
        </div>
    );
}
