import BottomNavigation from "../components/BottomNavigation";

export default function Layout({ children }) {
  return (
    <div className="w-full h-dvh relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-1/3 bg-ruta_purple -z-10"></div>
      <main className="w-full h-full pt-8 pb-20 px-4 overflow-y-auto">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}
