export const START_DATE = new Date('2024-02-18');
export const TODAY = new Date();
export const IS_EDITABLE = false; //TODAY.getDay() == 0; //* campionato terminato il 12-05-2024
const dateDiff = TODAY.getTime() - START_DATE.getTime(); // Calcolo della differenza in millisecondi
const daysDiff = Math.floor(dateDiff / (1000 * 3600 * 24)); // Convertire la differenza da millisecondi a giorni
export const GIORNATA = 12; //Math.floor(daysDiff / 7) + 1; //* campionato terminato il 12-05-2024

export const MAX_RUTAS = 50;

export const STATUS = {
    DESELECTED: 0,
    STANDARD: 1,
    OVERPOWER: 2,
}
