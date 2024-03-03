import { height } from "@mui/system";
import BottomNavigation from "../components/BottomNavigation";
// import Header from "../components/Header/Header";
// import InfoSection from "../components/Header/InfoSection";

export default function Layout({ children }) {
  return (
    <div className="w-full h-dvh relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-80 bg-ruta_purple -z-10"></div>
      <main className="w-full h-full pt-8 pb-16 px-4 overflow-y-auto">
        {children}
      </main>
      <BottomNavigation />
      {/* <div className="grid grid-cols-6 gap-6 p-6">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5">
          <Header />
          <InfoSection />
        </div>
      </div> */}
    </div>
  );
}
