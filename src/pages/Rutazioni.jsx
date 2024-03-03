import RutaCard from "../components/RutaCard";

export default function Rutazioni() {
  return (
    <>
      <h1 className="h1">Rutazioni</h1>
      <h2 className="h3 text-center">Giornata 3</h2>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellat reiciendis! Consequatur, ducimus cupiditate ex incidunt corporis nisi quibusdam dolorum. Exercitationem optio voluptate, nam itaque amet blanditiis alias nemo soluta asperiores ut ratione. Eos, nostrum voluptatum repellat quo odit ipsa neque saepe exercitationem quia inventore recusandae vitae perspiciatis, ea maxime.</p> */}
      {[
        [1, 'Autista scorbutico', 'Si lamenta del traffico trovato in autostrada', 5, 5, 0],
        [2, 'Il seccatore seriale', 'Dice ”signori, allora quando io vi rompo i coglioni...” in un momento di sconforto generale, quando anche lui vorrebbe andarsene a casa all’istante', 5, 5, 0],
        [3, 'Il partenopeo', 'Passa almeno 5 minuti a parlare con Ruocco prima di iniziare l’allenamento', 5, 5, 0],
        [4, 'Rutanator', 'Chiude la sentenza con il suo cavallo di battaglia: ”CHIEDO”', 5, 5, 0],
        [5, 'Don Rutabbondio', 'Commenta con massimo ripudio la futura vita matrimoniale di Puri', 5, 5, 0],
        [6, 'Il sociopatico ansiolitico', 'Inizia l’analisi della partita di sabato con la famosa istanza ”Signori, quello che mi preoccupa di più”', 5, 5, 0],
        [7, 'Lo Sgarbi piacentino', 'Commenta le doti poco pallavolistiche degli avversari, condendo il discorso con celebri insulti quali ”deficienti patentati”, ”bambini focomelici” ed altro ancora', 5, 5, 0],
        [8, 'Joker 2. La follia in campo', 'Ti guarda, aspetta due secondi, e ti ride in faccia, come solo lui sa fare. E tu non saprai se ridere per farlo felice, o ridere perché ti sei giocato questa rutazione', 5, 5, 0],
        [9, 'Rutareggio, per veri intenditori', 'Gli parte l’insulto in dialetto stretto', 5, 5, 0],
        [10, 'Alzheimer, Ruta Alzheimer', 'Ripete la stessa cosa ad almeno tre persone diverse', 5, 5, 0],
        [11, 'Wolfgang Rutadeus Mozart: il giovane prodigio', 'Insegna a degli scappati di casa di Serie C tecniche che solo in superlega si usano, come lo swing in ricezione o lo shuffle prima della pipe', 10, 15, 0],
        [12, 'L’innamorato', 'Parla della sua ragazza, chiamandola ”Morosa”', 10, 15, 0],
        [13, 'Il Personal Trainer mancato', 'Nel circuito del Lunedì ci sono almeno due esercizi di affondi', 10, 15, 0],
        [14, 'Ruta ft. Peppuzzo', 'Parla di una persona a te sconosciuta, come se foste amici d’infanzia', 10, 15, 0],
        [15, 'Il pedofilo manesco', 'Percuote ripetute volte un atleta under dopo un errore', 10, 15, 0],
        [16, 'Rutaldo, Rutanni e Rutacomo: i cabarettisti mancati', 'Non termina l’allenamento con i canonici 5 minuti di battute finali', 10, 15, 0],
        [17, 'L’investitura medievale', 'Si inginocchia per attaccare, mostrando come da sotto la rete la palla possa comunque passare grazie all’ottima tecnica di attacco', 10, 20, 5, 'Attacca a rete'],
        [18, 'Così... semplicemente complicato', 'Propone un esercizio strutturato in almeno 5 fasi differenti (ex: Cambio palla, contrattacco, free ball, free ball avversaria, aperitivo, cena e auguri di Natale)', 10, 15, 0],
        [19, 'Il calabro-napoletano', 'Litiga con l’allenatore avversario', 10, 15, 0],
        [20, 'Effetto Peter Pan', 'Pronuncia la celebre frase ”Sono giovani e viaggiano sulle ali dell’entusiasmo”', 10, 15, 0],
        [21, 'Il competitivo ignaro', 'Tranquillizza i suoi atleti facendogli sapere che lui la classifica non la guarda da tempo immemore', 15, 25, 0],
        [22, 'Ruta Orfei, l’unico circo che vorrei', 'Richiama l’attenzione dicendo ”Signori non mi serve a niente fare il circo”', 15, 25, 0],
        [23, 'Testimonial Fonzies', 'Si lecca le dita', 15, 25, 0],
        [24, 'Vocabolario Trepporchi', 'Spiega un esercizio in modo semplice e coinciso. Ad esempio: Affondo: esercizio multi-articolare che coinvolge principalmente muscoli agonisti e sinergici dei quadricipiti, ischiocrurali e glutei, con un’attivazione simultanea dei muscoli stabilizzatori del tronco e delle articolazioni coxofemorali, femoro-tibiali e tibio-tarsiche.', 15, 25, 0],
        [25, 'Shopping compulsivo', 'Arriva ad allenamento con una felpa MAI vista', 15, 25, 0],
        [26, 'La vita `e fatta di scale, c’è chi scende e c’è chi sale', 'Usa le scalette durante la parte fisica', 15, 25, 0],
        [27, '”Sono Giaponese”', 'Prende un giallo in partita', 15, 25, 0],
        [28, 'Ruta Longobardi', 'Arriva in palestra con i capelli tagliati', 15, 25, 0],
        [29, 'Muratore bergamasco in bestemmio-deficienza', 'La fase di riscaldamento del mercoledì prevede come antipasto la classica routine di esercizi di muro', 15, 25, 0],
        [30, 'Il giocherellone', 'Propone il bagherone come riscaldamento', 15, 25, 0],
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
