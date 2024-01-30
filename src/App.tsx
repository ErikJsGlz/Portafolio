import { ReactComponent as TypescriptLogo } from "./assets/icons/typescript_logo.svg";
import { ReactComponent as PostgresqlLogo } from "./assets/icons/postgresql_logo.svg";
import { ReactComponent as LinkedinIcon } from "./assets/icons/linkedin_icon.svg";
import { ReactComponent as FlutterLogo } from "./assets/icons/flutter_logo.svg";
import { ReactComponent as EmailIcon } from "./assets/icons/mail_icon.svg.svg";
import { ReactComponent as PythonLogo } from "./assets/icons/python_logo.svg";
import { ReactComponent as ReactLogo } from "./assets/icons/react_logo.svg";
import { ReactComponent as MySqlLogo } from "./assets/icons/mysql_logo.svg";
import { ReactComponent as AzureLogo } from "./assets/icons/azure_logo.svg";
import { ReactComponent as NodeLogo } from "./assets/icons/node_logo.svg";
import { ReactComponent as DartLogo } from "./assets/icons/dart_logo.svg";
import { ReactComponent as SassLogo } from "./assets/icons/sass_logo.svg";
import NurasignDesktop01 from "./assets/img/nurasign_layout/nurasign_desktop_01.png";
import NurasignDesktop02 from "./assets/img/nurasign_layout/nurasign_desktop_02.png";
import NurasignDesktop03 from "./assets/img/nurasign_layout/nurasign_desktop_03.png";
import SisefarDesktop01 from "./assets/img/sisefar_layout/sisefar_desktop_01.png";
import SisefarDesktop02 from "./assets/img/sisefar_layout/sisefar_desktop_02.png";
import SisefarDesktop03 from "./assets/img/sisefar_layout/sisefar_desktop_03.png";
import BillaDesktop01 from "./assets/img/billable_layout/billa_desktop_01.png";
import BillaDesktop02 from "./assets/img/billable_layout/billa_desktop_02.png";
import BillaDesktop03 from "./assets/img/billable_layout/billa_desktop_03.png";
import MywundMobile01 from "./assets/img/mywund_layout/mywund_mobile_01.png";
import MywundMobile02 from "./assets/img/mywund_layout/mywund_mobile_02.png";
import MywundMobile03 from "./assets/img/mywund_layout/mywund_mobile_03.png";
import MywundMobile04 from "./assets/img/mywund_layout/mywund_mobile_04.png";
import MywundMobile05 from "./assets/img/mywund_layout/mywund_mobile_05.png";
import BillaMobile01 from "./assets/img/billable_layout/billa_mobile_01.png";
import BillaMobile02 from "./assets/img/billable_layout/billa_mobile_02.png";
import BillaMobile03 from "./assets/img/billable_layout/billa_mobile_03.png";
import BillaMobile04 from "./assets/img/billable_layout/billa_mobile_04.png";
import BillaMobile05 from "./assets/img/billable_layout/billa_mobile_05.png";
import LeyDesktop01 from "./assets/img/ley_layout/ley_desktop_01.png";
import PrpDesktop01 from "./assets/img/prp_layout/prp_desktop_01.png";
import PrpDesktop02 from "./assets/img/prp_layout/prp_desktop_02.png";
import PrpDesktop03 from "./assets/img/prp_layout/prp_desktop_03.png";
import PrpDesktop04 from "./assets/img/prp_layout/prp_desktop_04.png";
import LeyDesktop02 from "./assets/img/ley_layout/ley_desktop_02.png";
import LeyDesktop03 from "./assets/img/ley_layout/ley_desktop_03.png";
import PrpMobile01 from "./assets/img/prp_layout/prp_mobile_01.png";
import PrpMobile02 from "./assets/img/prp_layout/prp_mobile_02.png";
import PrpMobile03 from "./assets/img/prp_layout/prp_mobile_03.png";
import PrpMobile04 from "./assets/img/prp_layout/prp_mobile_04.png";
import PrpMobile05 from "./assets/img/prp_layout/prp_mobile_05.png";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./swiper-styles.scss";
import "./time-line-styles.scss";
import "./App.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";

function App() {
    const [canShowMobilePRP, setCanShowMobilePRP] = useState<boolean>(true);
    const [canShowMobileBilla, setCanShowMobileBilla] = useState<boolean>(true);
    const [currentSection, setCurrentSection] = useState<string>("about-me");

    const [currentDesktopPRP, setCurrentDesktopPRP] = useState<number>(0);
    const [currentDesktopBillable, setCurrentDesktopBillable] =
        useState<number>(0);
    const [currentDesktopNurasign, setCurrentDesktopNurasign] =
        useState<number>(0);
    const [currentDesktopSisefar, setCurrentDesktopSisefar] =
        useState<number>(0);
    const [currentDesktopLey, setCurrentDesktopLey] = useState<number>(0);

    const getRandomNumber = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min - 1)) + min;
    };

    const list_ironic_phrases: string[] = [
        "los hotdogs del oxxo",
        "las sopas instantáneas",
        "los perritos",
        "las palomas",
        "Miguel Inzunza",
        "el Kemonito",
        "el estadio de los Tigres",
        "las apologías de Tertuliano",
        "el pollo feliz",
        "las flamin' hot cheddar sour cream de Lebron James",
        "los chilaquiles del Tec",
        "los billetes de axolotes",
    ];

    const desktopPRPImages: string[] = [
        PrpDesktop01,
        PrpDesktop02,
        PrpDesktop03,
        PrpDesktop04,
    ];

    const desktopBillableImages: string[] = [
        BillaDesktop01,
        BillaDesktop02,
        BillaDesktop03,
    ];

    const desktopNurasignImages: string[] = [
        NurasignDesktop01,
        NurasignDesktop02,
        NurasignDesktop03,
    ];

    const desktopSisefarImages: string[] = [
        SisefarDesktop01,
        SisefarDesktop02,
        SisefarDesktop03,
    ];

    const desktopLeyImages: string[] = [
        LeyDesktop01,
        LeyDesktop02,
        LeyDesktop03,
    ];

    const [currentIndexPhrase, setCurrentIndexPhrase] = useState<number>(
        getRandomNumber(0, list_ironic_phrases.length)
    );

    const updatePhrase = (): void => {
        if (currentIndexPhrase < list_ironic_phrases.length - 1) {
            setCurrentIndexPhrase(currentIndexPhrase + 1);
        } else {
            setCurrentIndexPhrase(0);
        }
    };

    const detectCurrentSection = (): void => {
        const scrollContainer = document.getElementById("scroll-container");
        const scrollTop = scrollContainer?.scrollTop || document.body.scrollTop;

        const windowHeight = window.innerHeight;

        const windowMiddle = scrollTop + windowHeight / 2;

        const sections = Array.from(document.getElementsByClassName("section"));

        sections.forEach((section: any, index: number) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (windowMiddle >= sectionTop && windowMiddle <= sectionBottom) {
                changecolor(section.dataset.project);

                if (index === 0) {
                    setCurrentSection("about-me");
                } else if (index === 7) {
                    setCurrentSection("experience");
                } else {
                    setCurrentSection("projects");
                }
            }
        });
    };

    const scrollTo = (name: string): void => {
        document.getElementById(name)?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        document
            .getElementById("scroll-container")
            ?.addEventListener("scroll", detectCurrentSection);
    }, []);

    const changecolor = (projectName: string): void => {
        const containerApp = document.getElementById("container-app");

        if (containerApp === null) return;

        for (let i = containerApp.classList.length - 1; i >= 0; i--) {
            const className = containerApp.classList[i];

            if (className.startsWith("background")) {
                containerApp.classList.remove(className);
            }
        }

        containerApp?.classList.add("background-" + projectName);
    };

    /* Follow pill */
    useEffect(() => {
        const logos = Array.from(
            document.getElementsByClassName("technologie_logo")
        );

        logos.forEach((logo: any) => {
            logo.addEventListener("mousemove", (e: MouseEvent) =>
                showTooltip(e, logo.dataset.name)
            );
            logo.addEventListener("mouseleave", hideTooltip);
        });
    }, []);

    const showTooltip = (event: MouseEvent, text: string): void => {
        const tooltips = Array.from(
            document.getElementsByClassName("project__technologie-pill")
        );

        tooltips.forEach((tooltip: any) => {
            tooltip.style.visibility = "visible";
            tooltip.textContent = text;

            tooltip.style.top =
                window.innerWidth !== 1280
                    ? event.clientY - 170 + "px"
                    : event.clientY - 115 + "px";
            tooltip.style.left =
                window.innerWidth !== 1280
                    ? event.clientX - 110 + "px"
                    : event.clientX - 70 + "px";
        });
    };

    const hideTooltip = (): void => {
        const tooltips = Array.from(
            document.getElementsByClassName("project__technologie-pill")
        );

        tooltips.forEach((tooltip: any) => {
            tooltip.style.visibility = "hidden";
        });
    };

    const updatePRPDesktop = (): void => {
        setCurrentDesktopPRP(
            currentDesktopPRP < desktopPRPImages.length - 1
                ? currentDesktopPRP + 1
                : 0
        );
    };

    const updateBillableDesktop = (): void => {
        setCurrentDesktopBillable(
            currentDesktopBillable < desktopBillableImages.length - 1
                ? currentDesktopBillable + 1
                : 0
        );
    };

    const updateNurasignDesktop = (): void => {
        setCurrentDesktopNurasign(
            currentDesktopNurasign < desktopNurasignImages.length - 1
                ? currentDesktopNurasign + 1
                : 0
        );
    };

    const updateSisefarDesktop = (): void => {
        setCurrentDesktopSisefar(
            currentDesktopSisefar < desktopSisefarImages.length - 1
                ? currentDesktopSisefar + 1
                : 0
        );
    };

    const updateLeyDesktop = (): void => {
        setCurrentDesktopLey(
            currentDesktopLey < desktopLeyImages.length - 1
                ? currentDesktopLey + 1
                : 0
        );
    };

    return (
        <div id={"container-app"} className="App">
            <Header
                currentSection={currentSection}
                navigateTo={(name: string) => scrollTo(name)}
            />
            <div id="grain-background"></div>
            {/* <div id="first-sphere-animation" className="sphere"></div> */}
            {/* <div id="second-sphere-animation" className="sphere"></div> */}

            <div id="scroll-container">
                <div id="about-me" className="section text-container">
                    <h1>Hola, soy Erik Josías👋.</h1>
                    <span>
                        Soy un Software Designer / Engineer ubicado en
                        Monterrey, México. <br></br> Mi motivación diaria es
                        escribir código limpio y estructurado, las papas
                        hashbrown y{" "}
                        <span id="ironic-phrase" onClick={updatePhrase}>
                            {list_ironic_phrases[currentIndexPhrase]}.
                        </span>
                    </span>
                    <div>
                        <div
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/erik-js-glz-lc/"
                                )
                            }
                        >
                            <LinkedinIcon />
                            <span>LINKEDIN</span>
                        </div>
                        <div
                            onClick={() => {
                                window.open(
                                    "mailto:erikjs.glz@gmail.com?subject=Solicitar%20información%20de%20contacto&body=Qué%20tal%20Erik!"
                                );
                            }}
                        >
                            <EmailIcon />
                            <span>Correo</span>
                        </div>
                        {/* <div>
                            <GithubIcon />
                            <span>GITHUB</span>
                        </div> */}
                    </div>
                </div>
                <div
                    id="projects"
                    data-project={"prp"}
                    className="section project"
                >
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--prp">
                                Personnel <br></br> Requisition Process
                            </h1>
                            <span className="project__description">
                                Gestionador de requisiciones de personal para
                                Chile. <br />
                                Este proyecto lo lideré y estuve trabajando en
                                la ideación junto con directivos y la UX/UI
                                Designer. Trabajé desde el diseño de la base
                                datos, el desarrollo de Frontend y Backend.
                                <br />
                                <br />
                                Entre los principales retos que me encontré fue
                                el levantamiento de requerimientos y alcance de
                                proyecto, además de integraciones con otro
                                sistema de Chile.
                            </span>
                        </div>

                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <FlutterLogo
                                        data-name={"Flutter"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <DartLogo
                                        data-name={"Dart"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PythonLogo
                                        data-name={"Python"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure Devops"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        {canShowMobilePRP && (
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="horizontal-swiper"
                            >
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
                            <div
                                className="project__photos-desktop"
                                onClick={updatePRPDesktop}
                            >
                                <img
                                    src={desktopPRPImages[currentDesktopPRP]}
                                ></img>
                            </div>
                        )}
                        <div className="project__photos-platforms">
                            <span
                                onClick={() => setCanShowMobilePRP(true)}
                                className={`material-symbols-rounded project__photos-platforms-icon ${
                                    canShowMobilePRP
                                        ? "project__photos-platforms-icon--active"
                                        : ""
                                }`}
                            >
                                phone_iphone
                            </span>
                            <span
                                onClick={() => setCanShowMobilePRP(false)}
                                className={`material-symbols-rounded project__photos-platforms-icon ${
                                    canShowMobilePRP
                                        ? ""
                                        : "project__photos-platforms-icon--active"
                                }`}
                            >
                                computer
                            </span>
                        </div>
                    </div>
                </div>
                <div data-project={"mywund"} className="section project">
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--mywund">
                                MyWund
                            </h1>
                            <span className="project__description">
                                Software para registrar y visualizar la
                                evolución de heridas de pacientes. <br /> En
                                este proyecto se colaboró con un equipo de
                                enfermeras de Chile. Fui colider y finalmente le
                                di seguimiento, optimizando y añandiendo nuevas
                                funcionalidades. Me desempeñé como Frontend,
                                programando en Flutter y Backend, desarrollado
                                en Flask.
                                <br />
                                <br />
                                Entre los retos a los que me enfrenté fue la
                                abstracción de escalas médicas para catalogar
                                heridas según su profundidad, color, etc.
                            </span>
                        </div>
                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <FlutterLogo
                                        data-name={"Flutter"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <DartLogo
                                        data-name={"Dart"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PythonLogo
                                        data-name={"Python"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure DevOps"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PostgresqlLogo
                                        data-name={"PostgreSQL"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="horizontal-swiper"
                        >
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
                <div data-project={"billable"} className="section project">
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--billable">
                                Billable Hours
                            </h1>
                            <span className="project__description">
                                Software para registrar las horas invertidas en
                                proyectos específicos.
                                <br />
                                En este proyecto trabajé en el desarrollo del
                                Backend, trabajado con NodeJs y Express y en
                                algunas funcionalidades del Frontend, que fue
                                con Flutter.
                                <br />
                                <br /> Uno de los pequeños retos a los que me
                                enfrenté fue una conexión que para mí era nueva
                                a Microsoft para obtener reuniones de los
                                calendarios de los usuarios.
                            </span>
                        </div>
                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <FlutterLogo
                                        data-name={"Flutter"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <DartLogo
                                        data-name={"Dart"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <NodeLogo
                                        data-name={"Node"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure DevOps"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        {canShowMobileBilla && (
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="horizontal-swiper"
                            >
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
                            <div
                                className="project__photos-desktop"
                                onClick={updateBillableDesktop}
                            >
                                <img
                                    src={
                                        desktopBillableImages[
                                            currentDesktopBillable
                                        ]
                                    }
                                ></img>
                            </div>
                        )}
                        <div className="project__photos-platforms">
                            <span
                                onClick={() => setCanShowMobileBilla(true)}
                                className={`material-symbols-rounded project__photos-platforms-icon ${
                                    canShowMobileBilla
                                        ? "project__photos-platforms-icon--active"
                                        : ""
                                }`}
                            >
                                phone_iphone
                            </span>
                            <span
                                onClick={() => setCanShowMobileBilla(false)}
                                className={`material-symbols-rounded project__photos-platforms-icon ${
                                    canShowMobileBilla
                                        ? ""
                                        : "project__photos-platforms-icon--active"
                                }`}
                            >
                                computer
                            </span>
                        </div>
                    </div>
                </div>
                <div data-project={"nurasign"} className="section project">
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--nurasign">
                                Nurasign
                            </h1>
                            <span className="project__description">
                                Sistema para gestionar enfermeras por turnos,
                                pisos y áreas así como asignación de pacientes
                                según su categoría.
                                <br /> En este sistema estuve dando
                                mantenimiento como Frontend, con React y
                                Typescript, mejorando la interfaz, buscando
                                respetar el diseño original y añadiendo
                                animaciones para mejorar la experiencia de
                                usuario y Backend con Flask.
                                <br />
                                <br />
                                Entre los principales retos fue dividir el
                                sistema en dos, Backend y Frontend, ya que era
                                un sistema monolítico. Esto trajo sus problemas
                                con las sesiones del Backend, que estaba
                                desarrollado en Flask.
                            </span>
                        </div>
                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <ReactLogo
                                        data-name={"React"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <TypescriptLogo
                                        data-name={"Typescript"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PythonLogo
                                        data-name={"Python"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <SassLogo
                                        data-name={"Sass"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure DevOps"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <MySqlLogo
                                        data-name={"MySQL"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        <div
                            className="project__photos-desktop"
                            onClick={updateNurasignDesktop}
                        >
                            <img
                                src={
                                    desktopNurasignImages[
                                        currentDesktopNurasign
                                    ]
                                }
                            ></img>
                        </div>
                    </div>
                </div>
                <div data-project={"sisefar"} className="section project">
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--sisefar">
                                Landing SISEFARPRO
                            </h1>
                            <span className="project__description">
                                Una página Landing para el sistema SISEFARPRO,
                                software para la gestión y seguimiento de
                                medicamentos.
                                <br />
                                Esta landing la hice enteramente yo, y estuve
                                trabajando con algunos endpoints en el Backend
                                para que funcionara algunas interacciones.
                                <br />
                                <br />
                                Entre los principales retos estaban las
                                animaciones dentro de la aplicación y las
                                responsividad para pantallas más pequeñas,
                                siempre buscando respetar el diseño propuesto.
                                <br />
                                <br />
                                <span
                                    onClick={() =>
                                        window.open(
                                            "https://www.sisefarpro.com/"
                                        )
                                    }
                                    style={{ cursor: "pointer" }}
                                >
                                    Vísitala aquí
                                </span>
                            </span>
                        </div>
                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <ReactLogo
                                        data-name={"React"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <TypescriptLogo
                                        data-name={"Typescript"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PythonLogo
                                        data-name={"Python"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <SassLogo
                                        data-name={"Sass"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure DevOps"}
                                        className="technologie_logo"
                                    />
                                </div>{" "}
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        <div
                            className="project__photos-desktop"
                            onClick={updateSisefarDesktop}
                        >
                            <img
                                src={
                                    desktopSisefarImages[currentDesktopSisefar]
                                }
                            ></img>
                        </div>
                    </div>
                </div>
                <div data-project={"ley"} className="section project">
                    <div className="project__information">
                        <div>
                            <h1 className="project__name project__name--ley">
                                Ley de Urgencias
                            </h1>
                            <span className="project__description">
                                Formulario para registrar la estancia
                                hospitalaria de un paciente para después hacer
                                cobro del seguro. <br />
                                En este proyecto fui colider y estuve trabajando
                                en el desarrollo de la base de datos, el
                                Frontend y el Backend.
                                <br />
                                <br />
                                Fue un proyecto sencillo en donde nos tardamos
                                un poco más en entender la necesidad y de qué
                                manera podríamos brindar una mejor solución.
                            </span>
                        </div>
                        <div className="project__technologies">
                            <h3 className="">Tecnologías utilizadas:</h3>
                            <div>
                                <div className="project__technologie">
                                    <FlutterLogo
                                        data-name={"Flutter"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <DartLogo
                                        data-name={"Dart"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <NodeLogo
                                        data-name={"Node"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <AzureLogo
                                        data-name={"Azure DevOps"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div className="project__technologie">
                                    <PostgresqlLogo
                                        data-name={"PostgreSQL"}
                                        className="technologie_logo"
                                    />
                                </div>
                                <div
                                    id="follow-pill"
                                    className="project__technologie-pill"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="project__photos">
                        <div
                            className="project__photos-desktop"
                            onClick={updateLeyDesktop}
                        >
                            <img
                                src={desktopLeyImages[currentDesktopLey]}
                            ></img>
                        </div>
                    </div>
                </div>
                <div id="experience" className="section">
                    <div id="timeline-content">
                        <ul className="timeline">
                            <li className="event" data-date="2022-2024">
                                <h3>Software Developer🤯</h3>
                                <h5>CHRISTUS CEI</h5>
                                <p>
                                    Mi principal experiencia, he colaborado con
                                    distintas personas, departamentos y países
                                    para brindar un mejor servicio médico desde
                                    la tecnología. Los proyectos han impactado
                                    en el área operativa y administrativa. He
                                    trabajado desde creando nuevos proyecto como
                                    también dandole seguimiento a proyectos
                                    existentes limpiando código, refactorizando
                                    y creando nuevas funcionalidades.
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Freelancer👽</h3>
                                <p>
                                    Trabajé por unos meses para una empresa de
                                    mueblería dandole mantenimiento a su página
                                    web. Fue solo HTMl y CSS, arreglando algunas
                                    funcionalidades para brindar una mejorar
                                    experiencia de usuario.
                                </p>
                            </li>
                            <li
                                className="event"
                                id="date"
                                data-date="2020-2021"
                            >
                                <h3>On Campus Intern👶</h3>
                                <h5>Tec de Monterrey</h5>
                                <p>
                                    Estuve dando mantenimiento a una página web
                                    de posgrado sobre cursos del Tec de
                                    Monterrey con Wordpress y también estuve
                                    ayudando con cierta analítica semanal de un
                                    chatbot de asistencia.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        </div>
    );
}

export default App;
