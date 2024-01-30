import "./headerStyles.css";

export default function Header(props: {
    currentSection: string;
    navigateTo: Function;
}) {
    return (
        <div id="header">
            <h4
                className={`span-hover ${
                    props.currentSection === "about-me" && "span-hover--active"
                }`}
                onClick={() => props.navigateTo("about-me")}
            >
                SOBRE MÍ
            </h4>
            <h4
                className={`span-hover ${
                    props.currentSection === "projects" && "span-hover--active"
                }`}
                onClick={() => props.navigateTo("projects")}
            >
                PROYECTOS
            </h4>
            <h4
                className={`span-hover ${
                    props.currentSection === "experience"
                        ? "span-hover--active"
                        : undefined
                }`}
                onClick={() => props.navigateTo("experience")}
            >
                EXPERIENCIA
            </h4>
        </div>
    );
}
