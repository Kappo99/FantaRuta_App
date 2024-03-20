export const START_DATE = new Date('2024-02-18');
export const TODAY = new Date();
export const IS_EDITABLE = TODAY.getDay() == 0;
const dateDiff = TODAY.getTime() - START_DATE.getTime(); // Calcolo della differenza in millisecondi
const daysDiff = Math.floor(dateDiff / (1000 * 3600 * 24)); // Convertire la differenza da millisecondi a giorni
export const GIORNATA = Math.floor(daysDiff / 7) + 1;

export const MAX_RUTAS = 50;
