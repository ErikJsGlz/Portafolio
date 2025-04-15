import { ReactComponent as FlutterLogo } from "../assets/icons/flutter_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";
import { ReactComponent as NodeLogo } from "../assets/icons/node_logo.svg";
import { ReactComponent as DartLogo } from "../assets/icons/dart_logo.svg";

import BillaDesktop01 from "../assets/img/billable_layout/billa_desktop_01.png";
import BillaDesktop02 from "../assets/img/billable_layout/billa_desktop_02.png";
import BillaDesktop03 from "../assets/img/billable_layout/billa_desktop_03.png";
import BillaMobile01 from "../assets/img/billable_layout/billa_mobile_01.png";
import BillaMobile02 from "../assets/img/billable_layout/billa_mobile_02.png";
import BillaMobile03 from "../assets/img/billable_layout/billa_mobile_03.png";
import BillaMobile04 from "../assets/img/billable_layout/billa_mobile_04.png";
import BillaMobile05 from "../assets/img/billable_layout/billa_mobile_05.png";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";

export default function Project03() {
    const [canShowMobileBilla, setCanShowMobileBilla] = useState<boolean>(true);
    const [currentDesktopBillable, setCurrentDesktopBillable] = useState<number>(0);

    const updateBillableDesktop = (): void => {
        setCurrentDesktopBillable(currentDesktopBillable < desktopBillableImages.length - 1 ? currentDesktopBillable + 1 : 0);
    };

    const desktopBillableImages: string[] = [BillaDesktop01, BillaDesktop02, BillaDesktop03];

    return (
        <div data-project={"billable"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--billable">Proyecto 3</h1>
                    <span className="project__description">
                        Software para registrar las horas invertidas en proyectos específicos.
                        <br />
                        En este proyecto trabajé en el desarrollo del Backend, trabajado con NodeJs y Express y en algunas funcionalidades del
                        Frontend, que fue con Flutter.
                        <br />
                        <br /> Uno de los pequeños retos a los que me enfrenté fue una conexión que para mí era nueva a Microsoft para obtener
                        reuniones de los calendarios de los usuarios.
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
                        <div id="follow-pill" className="project__technologie-pill"></div>
                    </div>
                </div>
            </div>
            <div className="project__photos">
                {canShowMobileBilla && (
                    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="horizontal-swiper">
                        <SwiperSlide>
                            <img src={BillaMobile01}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BillaMobile02}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BillaMobile03}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BillaMobile04}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={BillaMobile05}></img>
                        </SwiperSlide>
                    </Swiper>
                )}
                {!canShowMobileBilla && (
                    <div className="project__photos-desktop" onClick={updateBillableDesktop}>
                        <img src={desktopBillableImages[currentDesktopBillable]}></img>
                    </div>
                )}
                <div className="project__photos-platforms">
                    <span
                        onClick={() => setCanShowMobileBilla(true)}
                        className={`material-symbols-rounded project__photos-platforms-icon ${
                            canShowMobileBilla ? "project__photos-platforms-icon--active" : ""
                        }`}
                    >
                        phone_iphone
                    </span>
                    <span
                        onClick={() => setCanShowMobileBilla(false)}
                        className={`material-symbols-rounded project__photos-platforms-icon ${
                            canShowMobileBilla ? "" : "project__photos-platforms-icon--active"
                        }`}
                    >
                        computer
                    </span>
                </div>
            </div>
        </div>
    );
}
