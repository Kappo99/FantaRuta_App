import { useLocation, useParams } from "react-router-dom";

export const getRoute = () => {
  const location = useLocation();
  const { id } = useParams();

  const isUserRoute = () => location.pathname === userRoute;
  const isPatientsRoute = () => location.pathname === patientsRoute;
  const isDetailsAddressPatientRoute = () => location.pathname === detailsAddressPatientRoute;
  const isOrdersRoute = () => location.pathname === ordersRoute;
  const isDetailsAddressOrderRoute = () => location.pathname === detailsAddressOrderRoute;
  const isDetailsOrderRoute = () => location.pathname === detailsOrderRoute;
  const isRejectedOrderRoute = () => location.pathname === rejectedOrderRoute;
  const isRejectedOrderDetailsRoute = () => location.pathname === rejectedOrderDetailsRoute;
  const isOrderFarmacieRoute = () => location.pathname === orderFarmacieRoute;
  const isOrderPoliambulanzaRoute = () => location.pathname === orderPoliambulanzaRoute;
  
  // const userRoute = location.pathname === "/utenti";
  // const patientsRoute = location.pathname === `/utenti/${id}`;
  // const ordersRoute = location.pathname === `/ordini`;
  // const detailsAddressRoute = location.pathname === `/order/address/${id}`;
  // const detailsOrderRoute = location.pathname === `/ordini/${id}`;
  // const rejectedOrderRoute = location.pathname === `/ordini-persi`;
  // const rejectedOrderDetailsRoute = location.pathname === `/ordini-persi/${id}`;
  
  const userRoute = "/utenti";
  const patientsRoute = `/utenti/${id}`;
  const ordersRoute = `/ordini`;
  const detailsAddressPatientRoute = `/pazienti/indirizzi/${id}`;
  const detailsAddressOrderRoute = `/ordini/indirizzi/${id}`;
  const detailsOrderRoute = `/ordini/${id}`;
  const rejectedOrderRoute = `/ordini-persi`;
  const rejectedOrderDetailsRoute = `/ordini-persi/${id}`;
  const orderFarmacieRoute = `/ordini-farmacie`;
  const orderPoliambulanzaRoute = `/ordini-poliambulanza`;


  return {
    isUserRoute,
    isPatientsRoute,
    isOrdersRoute,
    detailsAddressPatientRoute,
    isDetailsAddressPatientRoute,
    isDetailsAddressOrderRoute,
    isDetailsOrderRoute,
    isRejectedOrderRoute,
    isRejectedOrderDetailsRoute,
    userRoute,
    patientsRoute,
    ordersRoute,
    detailsAddressOrderRoute,
    detailsOrderRoute,
    rejectedOrderRoute,
    rejectedOrderDetailsRoute,
    isOrderFarmacieRoute,
    orderFarmacieRoute,
    isOrderPoliambulanzaRoute,
    orderPoliambulanzaRoute
  };
};
