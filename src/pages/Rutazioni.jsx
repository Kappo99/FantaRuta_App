import RutaCard from "../components/RutaCard";

export default function Rutazioni() {
  return (
    <>
      <h1 className="h1">Rutazioni</h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat reiciendis! Consequatur, ducimus cupiditate ex incidunt corporis nisi quibusdam dolorum. Exercitationem optio voluptate, nam itaque amet blanditiis alias nemo soluta asperiores ut ratione. Eos, nostrum voluptatum repellat quo odit ipsa neque saepe exercitationem quia inventore recusandae vitae perspiciatis, ea maxime.</p> */}
      {[
        [1, 'Autista scorbutico', 'Si lamenta del traffico trovato in autostrada', 5, 5, 0],
        [2, 'Il seccatore seriale', 'Dice ”signori, allora quando io vi rompo i coglioni...” in un momento di sconforto generale, quando anche lui vorrebbe andarsene a casa all’istante', 5, 5, 0],
        [3, 'Il partenopeo', 'Passa almeno 5 minuti a parlare con Ruocco prima di iniziare l’allenamento', 5, 5, 0],
        [11, 'Wolfgang Rutadeus Mozart: il giovane prodigio', 'Insegna a degli scappati di casa di Serie C tecniche che solo in superlega si usano, come lo swing in ricezione o lo shuffle prima della pipe', 10, 15, 0],
        [12, 'L’innamorato', 'Parla della sua ragazza, chiamandola ”Morosa”', 10, 15, 0],
        [17, 'L’investitura medievale', 'Si inginocchia per attaccare, mostrando come da sotto la rete la palla possa comunque passare grazie all’ottima tecnica di attacco', 10, 20, 5, 'Attacca a rete'],
      ].map(([num, title, description, rutas, bonus, malus, malusText]) => (
        <RutaCard
          key={num}
          num={num}
          title={title}
          description={description}
          rutas={rutas}
          bonus={bonus}
          malus={malus}
          malusText={malusText}
        />
      ))}
    </>
  );
}
