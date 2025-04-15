import { ReactComponent as PostgresqlLogo } from "../assets/icons/postgresql_logo.svg";
import { ReactComponent as FlutterLogo } from "../assets/icons/flutter_logo.svg";
import { ReactComponent as PythonLogo } from "../assets/icons/python_logo.svg";
import { ReactComponent as AzureLogo } from "../assets/icons/azure_logo.svg";
import { ReactComponent as DartLogo } from "../assets/icons/dart_logo.svg";

import MywundMobile01 from "../assets/img/mywund_layout/mywund_mobile_01.png";
import MywundMobile02 from "../assets/img/mywund_layout/mywund_mobile_02.png";
import MywundMobile03 from "../assets/img/mywund_layout/mywund_mobile_03.png";
import MywundMobile04 from "../assets/img/mywund_layout/mywund_mobile_04.png";
import MywundMobile05 from "../assets/img/mywund_layout/mywund_mobile_05.png";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";

export default function Project02() {
    return (
        <div data-project={"mywund"} className="section project">
            <div className="project__information">
                <div>
                    <h1 className="project__name project__name--mywund">Proyecto 2</h1>
                    <span className="project__description">
                        Software para registrar y visualizar la evolución de heridas de pacientes. <br /> En este proyecto se colaboró con un equipo
                        de enfermeras de Chile. Fui colider y finalmente le di seguimiento, optimizando y añandiendo nuevas funcionalidades. Me
                        desempeñé como Frontend, programando en Flutter y Backend, desarrollado en Flask.
                        <br />
                        <br />
                        Entre los retos a los que me enfrenté fue la abstracción de escalas médicas para catalogar heridas según su profundidad,
                        color, etc.
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
                <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="horizontal-swiper">
                    <SwiperSlide>
                        <img src={MywundMobile01}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MywundMobile02}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MywundMobile03}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MywundMobile04}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={MywundMobile05}></img>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
