import { ReactComponent as LinkedinIcon } from "./assets/icons/linkedin_icon.svg";
import { ReactComponent as EmailIcon } from "./assets/icons/mail_icon.svg.svg";

import { useEffect, useState } from "react";
import Header from "./Header";
import "./swiper-styles.scss";
import "./time-line-styles.scss";
import "./App.scss";

import "swiper/css/effect-cards";
import "swiper/css";

import Project01 from "./projects/Project01";
import Project02 from "./projects/Project02";
import Project03 from "./projects/Project03";
import Project04 from "./projects/Project04";
import Project05 from "./projects/Project05";
import Project06 from "./projects/Project06";

function App() {
    const [currentSection, setCurrentSection] = useState<string>("about-me");

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

    const [currentIndexPhrase, setCurrentIndexPhrase] = useState<number>(getRandomNumber(0, list_ironic_phrases.length));

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
        document.getElementById("scroll-container")?.addEventListener("scroll", detectCurrentSection);
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
        const logos = Array.from(document.getElementsByClassName("technologie_logo"));

        logos.forEach((logo: any) => {
            logo.addEventListener("mousemove", (e: MouseEvent) => showTooltip(e, logo.dataset.name));
            logo.addEventListener("mouseleave", hideTooltip);
        });
    }, []);

    const showTooltip = (event: MouseEvent, text: string): void => {
        const tooltips = Array.from(document.getElementsByClassName("project__technologie-pill"));

        tooltips.forEach((tooltip: any) => {
            tooltip.style.visibility = "visible";
            tooltip.textContent = text;

            tooltip.style.top = window.innerWidth !== 1280 ? event.clientY - 170 + "px" : event.clientY - 115 + "px";
            tooltip.style.left = window.innerWidth !== 1280 ? event.clientX - 110 + "px" : event.clientX - 70 + "px";
        });
    };

    const hideTooltip = (): void => {
        const tooltips = Array.from(document.getElementsByClassName("project__technologie-pill"));

        tooltips.forEach((tooltip: any) => {
            tooltip.style.visibility = "hidden";
        });
    };

    return (
        <div id={"container-app"} className="App">
            <Header currentSection={currentSection} navigateTo={(name: string) => scrollTo(name)} />
            <div id="grain-background"></div>

            <div id="scroll-container">
                <div id="about-me" className="section text-container">
                    <h1>Hola, soy Erik Josías👋.</h1>
                    <span>
                        Soy un Software Designer / Engineer ubicado en Monterrey, México. <br></br> Mi motivación diaria es escribir código limpio y
                        estructurado, las papas hashbrown y{" "}
                        <span id="ironic-phrase" onClick={updatePhrase}>
                            {list_ironic_phrases[currentIndexPhrase]}.
                        </span>
                    </span>
                    <div>
                        <div onClick={() => window.open("https://www.linkedin.com/in/erik-js-glz-lc/")}>
                            <LinkedinIcon />
                            <span>LINKEDIN</span>
                        </div>
                        <div
                            onClick={() => {
                                window.open("mailto:erikjs.glz@gmail.com?subject=Solicitar%20información%20de%20contacto&body=Qué%20tal%20Erik!");
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
                <Project01 />
                <Project02 />
                <Project03 />
                <Project04 />
                <Project05 />
                <Project06 />

                <div id="experience" className="section">
                    <div id="timeline-content">
                        <ul className="timeline">
                            <li className="event" data-date="2022-2024">
                                <h3>Software Developer🤯</h3>
                                <h5>CHRISTUS CEI</h5>
                                <p>
                                    Mi principal experiencia, he colaborado con distintas personas, departamentos y países para brindar un mejor
                                    servicio médico desde la tecnología. Los proyectos han impactado en el área operativa y administrativa. He
                                    trabajado desde creando nuevos proyecto como también dandole seguimiento a proyectos existentes limpiando código,
                                    refactorizando y creando nuevas funcionalidades.
                                </p>
                            </li>
                            <li className="event" data-date="2022">
                                <h3>Freelancer👽</h3>
                                <p>
                                    Trabajé por unos meses para una empresa de mueblería dandole mantenimiento a su página web. Fue solo HTMl y CSS,
                                    arreglando algunas funcionalidades para brindar una mejorar experiencia de usuario.
                                </p>
                            </li>
                            <li className="event" id="date" data-date="2020-2021">
                                <h3>On Campus Intern👶</h3>
                                <h5>Tec de Monterrey</h5>
                                <p>
                                    Estuve dando mantenimiento a una página web de posgrado sobre cursos del Tec de Monterrey con Wordpress y también
                                    estuve ayudando con cierta analítica semanal de un chatbot de asistencia.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="section">
                    <div className="information-slide">
                        <div className="information-slide__education">
                            <h2>Educación</h2>
                            <div className="information-slide__education-content">
                                <h3>
                                    Ingeniería en Tecnologías Computacionales
                                </h3>
                                <h4>
                                    ITESM <span>2019-2023</span>
                                </h4>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div> */}
            </div>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
        </div>
    );
}

export default App;
