
export default function Regolamento() {
    return (
        <>
            <h1 className="h1 text-white">Regolamento</h1>
            <p className="h5 text-white text-center !mb-4">Versione 1.0</p>

            <div className="card">
                <h2 className="h4">Regolamento ufficiale</h2>
                <div className="card__description">
                    <p>
                        Simile al popolare gioco del FantaSanremo, il FantaRuta permette agli appassionati di citazioni di sfidarsi tra loro, mettendo alla prova le loro capacità di gestione e previsione.
                    </p>
                    <p>
                        Alcuni termini tecnici prima di entrare nel cuore del regolamento:
                    </p>
                    <ol className="list-decimal list-outside ml-6 mb-2">
                        <li><b>Rutatore</b>: giocatore, partecipante</li>
                        <li><b>Rutazione</b>: citazione, massima</li>
                        <li><b>Rutas</b>: moneta di scambio</li>
                        <li><b>Rutabilità percentuale</b>: probabilità percentuale che una Rutazione avvenga</li>
                        <li><b>MonteRuta</b>: montepremi guadagnato in caso di corretta previsione</li>
                        <li><b>Rutasslifica</b>: classifica</li>
                    </ol>
                </div>
            </div>

            <div className="card">
                <h2 className="h4">Le fasi del FantaRuta</h2>

                <h3 className="h7">Formazione della domenica</h3>
                <div className="card__description">
                    <p>
                        I partecipanti al FantaRuta stilleranno la
                        loro formazione vincente scegliento tra un’ampia gamma di <b>Rutazioni</b>
                        (settimanalmente aggiornate). Ogni giocatore deve rispettare determinati
                        budget, scegliendo accuratamente le Rutazioni in base al loro costo,
                        espresso in <b>Rutas</b>, strettamente collegato a ciascuna <b>Rutabilità percentuale</b>.
                        Più la Rutabilità percentuale è bassa, più la Rutazione sarà
                        improbabile, maggiore sarà il <b>MonteRuta</b> che prenderete nel caso di
                        corretta previsione! Ecco un esempio:
                    </p>
                    <img src="/images/regolamento/rutazione.jpg" alt="Esempio Rutazione" className="mx-auto mb-2" />
                    <p>
                        La formazione ha validità settimanale e deve tenere conto di:
                    </p>
                    <ol className="list-decimal list-outside ml-6 mb-2">
                        <li>Discorso riguardante la partita precedente</li>
                        <li>Allenamenti settimanali</li>
                        <li>Discorso riguardante la partita successiva e partita stessa</li>
                    </ol>
                    <p>
                        Una volta che il Rutatore invia la sua formazione, essa non potrà più
                        essere modificata fino all’apertura della giornata successiva.
                    </p>
                </div>

                <h3 className="h7 mt-6">Sviluppo settimanale</h3>
                <div className="card__description">
                    <p>
                        Il FantaRuta entra nel vivo dell’azione con
                        l’allenamento del Lunedì, che segna l’avvio della competizione. Da questo
                        momento in poi, ogni Rutazione detta può influenzare il punteggio dei
                        Rutatori.
                    </p>
                    <p>
                        In particolare, quando Ruta pronuncia una Rutazione durante l’evento,
                        questa viene automaticamente registrata nel sistema di gioco. I Rutatori
                        che hanno quella Rutazione nella loro formazione ottengono automaticamente
                        dei punti in base alle regole stabilite, aumentando il loro
                        MonteRuta e scalando la Rutassiflica.
                    </p>
                    <p>
                        Questa dinamica aggiunge un elemento di suspense e divertimento al
                        gioco, poiché i Rutatori devono essere attenti alle parole di Ruta e alle
                        Rutazioni che possono essere pronunciate. Essi devono fare affidamento
                        sul loro istinto e sulla loro conoscenza del personaggio per anticipare e
                        includere le Rutazioni con la maggior Rutabilità percentuale nella loro
                        formazione.
                    </p>
                </div>

                <h3 className="h7 mt-6">Conteggio finale</h3>
                <div className="card__description">
                    <p>
                        Al termine di ciascun ciclo verranno conteggiati i MonteRuta di
                        ciascun Rutatore e verrà aggiornata la <b>Rutasslifica</b> generale.
                    </p>
                    <p>
                        Da questo momento ogni Rutatore avrà nuovamente a disposizione tutti
                        i Rutas per comprare altre Rutazioni per la settimana successiva.
                    </p>
                </div>
            </div>

            <div className="card">
                <h2 className="h4">Bonus speciali</h2>
                <div className="card__description">
                    <p>
                        Ogni Rutatore dispone di una serie di bonus speciali (monouso) che può
                        utilizzare strategicamente per migliorare il suo punteggio e ottenere vantaggi
                        competitivi. Uno di questi bonus è il ”Bonus Raddoppio”.
                    </p>
                    <img src="/images/regolamento/bonus.jpg" alt="Bonus" className="mx-auto mb-2" />
                    <p>
                        Il Bonus Raddoppio consente ai Rutatori di ottenere il doppio dei punti
                        per ogni Rutazione registrata quando viene attivato. Questo significa che
                        ogni volta che Ruta pronuncia una Rutazinoe durante l’evento, il giocatore
                        che ha attivato il Bonus Raddoppio riceverà il doppio dei punti rispetto a
                        quanto riceverebbe normalmente.
                    </p>
                    <p>
                        Tuttavia, c’è un’importante considerazione da tenere presente: una volta
                        utilizzato il Bonus Raddoppio, il credito disponibile per la settimana succes3
                        siva verrà dimezzato. Questo significa che il giocatore avrà meno Rutas a
                        disposizione per la settimana successiva.
                    </p>
                    <p>
                        In questo modo, il Bonus Raddoppio offre ai Rutatori un’opportunità unica
                        di accumulare punti in modo più rapido e significativo, ma richiede una gestione
                        oculata delle risorse disponibili per massimizzare il suo impatto nel
                        lungo termine. E` quindi importante valutare attentamente quando e come
                        utilizzare questo bonus speciale per ottenere il massimo vantaggio strategico
                        e migliorare la propria posizione nella Rutassiflica.
                    </p>
                </div>
            </div>

            <div className="card">
                <h2 className="h4">Malus</h2>
                <div className="card__description">
                    <p>
                        Oltre ai bonus speciali, è importante tenere conto dei potenziali malus
                        associati a determinate Rutazioni. Alcune Rutazioni possono essere soggette
                        a un malus nel caso in cui l’evento correlato non si verifichi come previsto.
                        Pertanto, è fondamentale scegliere le Rutazioni con attenzione per evitare
                        penalità e massimizzare il punteggio complessivo.
                    </p>
                    <p>
                        Ecco un esempio:
                    </p>
                    <img src="/images/regolamento/malus.jpg" alt="Malus" className="mx-auto mb-2" />
                    <p>
                        Se un Rutatore seleziona una Rutazione a cui è associato un malus e tale
                        Rutazione non si verifica, i punti associati a tale Rutazione verranno sottratti
                        anzichè essere aggiunti al MonteRuta totale. Questo può significativamente
                        influenzare la posizione del giocatore nella Rutazione generale.
                    </p>
                    <p>
                        Pertanto, è consigliabile ai Rutatori di valutare attentamente le Rutazioni
                        disponibili e considerare il rischio potenziale di malus associati a ciascuna di
                        esse. Scegliere Rutazioni con maggior Rutabilità percentuale può ridurre il
                        rischio di subire penalità e contribuire a mantenere una posizione competitiva
                        nella Rutasslifica generale.
                    </p>
                </div>
            </div>

            <div className="card">
                <h2 className="h4">Obiettivo finale</h2>
                <div className="card__description">
                    <p>
                        L’obiettivo finale nel FantaRuta è quello di arrivare primi nella Rutazione
                        generale, dimostrando abilità strategiche e una conoscenza approfondita del
                        personaggio. Il premio in palio per il vincitore è un weekend speciale con Ruta
                        in persona, il protagonista del gioco, per assistere ad una emozionantissima
                        partita della Gas Sales Piacenza.
                    </p>
                    <p>
                        Auguriamo a tutti i Rutatori del FantaRuta buona fortuna e grande divertimento
                        nel corso della competizione. Che ogni scelta e ogni Rutazione sia un
                        passo verso il successo e che l’esperienza sia ricca di emozioni e soddisfazioni.
                        Che vinca il miglior Rutatore e che l’avventura sia indimenticabile per tutti!
                    </p>
                </div>
            </div>
        </>
    );
}