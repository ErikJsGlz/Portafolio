import { useState } from "react";

import { ReactComponent as PostgresqlLogo } from "../assets/icons/postgresql_logo.svg";
import { ReactComponent as FlutterLogo } from "../assets/icons/flutter_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";
import { ReactComponent as NodeLogo } from "../assets/icons/node_logo.svg";
import { ReactComponent as DartLogo } from "../assets/icons/dart_logo.svg";

import LeyDesktop01 from "../assets/img/ley_layout/ley_desktop_01.png";
import LeyDesktop02 from "../assets/img/ley_layout/ley_desktop_02.png";
import LeyDesktop03 from "../assets/img/ley_layout/ley_desktop_03.png";

export default function Project06() {
    const [currentDesktopLey, setCurrentDesktopLey] = useState<number>(0);

    const desktopLeyImages: string[] = [LeyDesktop01, LeyDesktop02, LeyDesktop03];

    const updateLeyDesktop = (): void => {
        setCurrentDesktopLey(currentDesktopLey < desktopLeyImages.length - 1 ? currentDesktopLey + 1 : 0);
    };

    return (
        <div data-project={"ley"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--ley">Proyecto 6</h1>
                    <span className="project__description">
                        Formulario para registrar la estancia hospitalaria de un paciente para después hacer cobro del seguro. <br />
                        En este proyecto fui colider y estuve trabajando en el desarrollo de la base de datos, el Frontend y el Backend.
                        <br />
                        <br />
                        Fue un proyecto sencillo en donde nos tardamos un poco más en entender la necesidad y de qué manera podríamos brindar una
                        mejor solución.
                    </span>
                </div>
                <div className="project__technologies">
                    <h3 className="">Tecnologías utilizadas:</h3>
                    <div>
                        <div className="project__technologie">
                            <FlutterLogo data-name={"Flutter"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <DartLogo data-name={"Dart"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <NodeLogo data-name={"Node"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <AzureLogo data-name={"Azure DevOps"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <PostgresqlLogo data-name={"PostgreSQL"} className="technologie_logo" />
                        </div>
                        <div id="follow-pill" className="project__technologie-pill"></div>
                    </div>
                </div>
            </div>
            <div className="project__photos">
                <div className="project__photos-desktop" onClick={updateLeyDesktop}>
                    <img src={desktopLeyImages[currentDesktopLey]}></img>
                </div>
            </div>
        </div>
    );
}
