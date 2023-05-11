import Banner from "../../Banner/Banner";
import Collapse from "../../Collapse/Collapse";

export default function About() {
  return (
    <>
      <Banner
        src="assets/png/Banner_About.png"
        alt="Forest openning on mountains and sky."
      />
      <main className="about">
        <Collapse
          title="Fiabilité"
          labor={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
        />
        <Collapse
          title="Respect"
          labor={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse
          title="Service"
          labor={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
        />
        <Collapse
          title="Sécurité"
          labor={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />
      </main>
    </>
  );
}
