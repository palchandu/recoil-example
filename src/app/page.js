import Image from "next/image";
import TextInput from "./component/TextInput";
import IncreaseDecrease from "./component/IncreaseDecrease";
export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-3 flex-col">
        <h2 className="text-2xl">Recoil : Use and example</h2>
        <IncreaseDecrease/>
      </div>
    </>
  );
}
