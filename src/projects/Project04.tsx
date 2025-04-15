import { ReactComponent as TypescriptLogo } from "../assets/icons/typescript_logo.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react_logo.svg";
import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as SassLogo } from "../assets/icons/sass_logo.svg";
import { ReactComponent as MySqlLogo } from "../assets/icons/mysql_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";

import NurasignDesktop01 from "../assets/img/nurasign_layout/nurasign_desktop_01.png";
import NurasignDesktop02 from "../assets/img/nurasign_layout/nurasign_desktop_02.png";
import NurasignDesktop03 from "../assets/img/nurasign_layout/nurasign_desktop_03.png";
import { useState } from "react";

export default function Project04() {
    const [currentDesktopNurasign, setCurrentDesktopNurasign] = useState<number>(0);

    const desktopNurasignImages: string[] = [NurasignDesktop01, NurasignDesktop02, NurasignDesktop03];

    const updateNurasignDesktop = (): void => {
        setCurrentDesktopNurasign(currentDesktopNurasign < desktopNurasignImages.length - 1 ? currentDesktopNurasign + 1 : 0);
    };
    return (
        <div data-project={"nurasign"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--nurasign">Proyecto 4</h1>
                    <span className="project__description">
                        Sistema para gestionar enfermeras por turnos, pisos y áreas así como asignación de pacientes según su categoría.
                        <br /> En este sistema estuve dando mantenimiento como Frontend, con React y Typescript, mejorando la interfaz, buscando
                        respetar el diseño original y añadiendo animaciones para mejorar la experiencia de usuario y Backend con Flask.
                        <br />
                        <br />
                        Entre los principales retos fue dividir el sistema en dos, Backend y Frontend, ya que era un sistema monolítico. Esto trajo
                        sus problemas con las sesiones del Backend, que estaba desarrollado en Flask.
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
                        </div>
                        <div className="project__technologie">
                            <MySqlLogo data-name={"MySQL"} className="technologie_logo" />
                        </div>
                        <div id="follow-pill" className="project__technologie-pill"></div>
                    </div>
                </div>
            </div>
            <div className="project__photos">
                <div className="project__photos-desktop" onClick={updateNurasignDesktop}>
                    <img src={desktopNurasignImages[currentDesktopNurasign]}></img>
                </div>
            </div>
        </div>
    );
}
