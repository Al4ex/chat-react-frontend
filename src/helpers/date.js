import moment from "moment/min/moment-with-locales";

export const newDate = (fecha) => {
  moment.locale("es-MX");
  const hoy = moment(fecha).format("HH:mm a | D MMM ");
  return hoy;
};
