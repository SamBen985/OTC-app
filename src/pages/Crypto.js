import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";
import { CryptoProvider } from "../context/CryptoContext";

function Crypto() {
  return (
    <>
      <CryptoProvider>
        <main
          className="w-[80%] h-full flex flex-col first-letter: m-auto
    content-center items-center relative text-white font-nunito
    "
        >
          <Filters />
          <TableComponent />
        </main>
      </CryptoProvider>
    </>
  );
}

export default Crypto;
