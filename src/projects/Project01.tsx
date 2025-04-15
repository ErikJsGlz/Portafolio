import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";
import { ReactComponent as DartLogo } from "../assets/icons/dart_logo.svg";
import { ReactComponent as FlutterLogo } from "../assets/icons/flutter_logo.svg";

import PrpMobile01 from "../assets/img/prp_layout/prp_mobile_01.png";
import PrpMobile02 from "../assets/img/prp_layout/prp_mobile_02.png";
import PrpMobile03 from "../assets/img/prp_layout/prp_mobile_03.png";
import PrpMobile04 from "../assets/img/prp_layout/prp_mobile_04.png";
import PrpMobile05 from "../assets/img/prp_layout/prp_mobile_05.png";

import PrpDesktop01 from "../assets/img/prp_layout/prp_desktop_01.png";
import PrpDesktop02 from "../assets/img/prp_layout/prp_desktop_02.png";
import PrpDesktop03 from "../assets/img/prp_layout/prp_desktop_03.png";
import PrpDesktop04 from "../assets/img/prp_layout/prp_desktop_04.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useState } from "react";
import "swiper/css/effect-cards";
import "swiper/css";

export default function Project01() {
    const [canShowMobilePRP, setCanShowMobilePRP] = useState<boolean>(true);
    const [currentDesktopPRP, setCurrentDesktopPRP] = useState<number>(0);

    const desktopPRPImages: string[] = [PrpDesktop01, PrpDesktop02, PrpDesktop03, PrpDesktop04];

    const updatePRPDesktop = (): void => {
        setCurrentDesktopPRP(currentDesktopPRP < desktopPRPImages.length - 1 ? currentDesktopPRP + 1 : 0);
    };

    return (
        <div id="projects" data-project={"prp"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--prp">Proyecto 1</h1>
                    <span className="project__description">
                        Gestionador de requisiciones de personal para Chile. <br />
                        Este proyecto lo lideré y estuve trabajando en la ideación junto con directivos y la UX/UI Designer. Trabajé desde el diseño
                        de la base datos, el desarrollo de Frontend y Backend.
                        <br />
                        <br />
                        Entre los principales retos que me encontré fue el levantamiento de requerimientos y alcance de proyecto, además de
                        integraciones con otro sistema de Chile.
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
                            <PythonLogo data-name={"Python"} className="technologie_logo" />
                        </div>
                        <div className="project__technologie">
                            <AzureLogo data-name={"Azure Devops"} className="technologie_logo" />
                        </div>
                        <div id="follow-pill" className="project__technologie-pill"></div>
                    </div>
                </div>
            </div>
            <div className="project__photos">
                {canShowMobilePRP && (
                    <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="horizontal-swiper">
                        <SwiperSlide>
                            <img src={PrpMobile01}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrpMobile02}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrpMobile03}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrpMobile04}></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={PrpMobile05}></img>
                        </SwiperSlide>
                    </Swiper>
                )}
                {!canShowMobilePRP && (
                    <div className="project__photos-desktop" onClick={updatePRPDesktop}>
                        <img src={desktopPRPImages[currentDesktopPRP]}></img>
                    </div>
                )}
                <div className="project__photos-platforms">
                    <span
                        onClick={() => setCanShowMobilePRP(true)}
                        className={`material-symbols-rounded project__photos-platforms-icon ${
                            canShowMobilePRP ? "project__photos-platforms-icon--active" : ""
                        }`}
                    >
                        phone_iphone
                    </span>
                    <span
                        onClick={() => setCanShowMobilePRP(false)}
                        className={`material-symbols-rounded project__photos-platforms-icon ${
                            canShowMobilePRP ? "" : "project__photos-platforms-icon--active"
                        }`}
                    >
                        computer
                    </span>
                </div>
            </div>
        </div>
    );
}
