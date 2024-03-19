import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";
import { CryptoProvider } from "../context/CryptoContext";

function Crypto() {
  return (
    <>
      <CryptoProvider>
        <main className="h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito">
          <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
            <Filters />
            <TableComponent />
            <Outlet />
          </section>
        </main>
      </CryptoProvider>
    </>
  );
}

export default Crypto;
