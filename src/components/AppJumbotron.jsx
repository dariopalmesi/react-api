export default function AppJumbotron() {
    return (
        <div className="p-5 mb-4 bg-info-subtle rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Benvenuti nel mio mondo di torte!</h1>
                <p className="col-md-8 fs-4">
                    Sono felice di condividere con voi la mia passione per la pasticceria e la cucina. In questo blog, troverete una vasta gamma di ricette di torte e dolci, dalle classiche alle innovative, con step-by-step e foto dettagliate per aiutarvi a preparare i vostri dessert preferiti.
                    Sono qui per aiutarvi a scoprire il mondo delle torte e a migliorare le vostre abilità di pasticcere. Condivido con voi le mie ricette, i miei consigli e le mie esperienze, in modo che possiate creare torte deliziose e uniche per voi e per i vostri cari.
                    Siete pronti a scoprire il segreto per creare torte che lasciano a bocca aperta? Allora entrate nel mio mondo di torte e iniziate a scoprire le ricette e le tecniche che vi aiuteranno a diventare un pasticcere esperto!
                </p>
                <button className="btn btn-primary btn" type="button" popovertarget='off-canvas-form'>
                    <i className="bi bi-plus"></i> add
                </button>
            </div>
        </div>
    )
}