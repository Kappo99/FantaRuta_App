export const START_DATE = new Date('2024-02-18');
export const TODAY = new Date();
const dateDiff = new Date(TODAY.getTime() - START_DATE.getTime());
const daysDiff = dateDiff.getUTCDate() - 1;
export const GIORNATA = Math.floor(daysDiff / 7) + 1;