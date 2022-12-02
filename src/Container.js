import ButtonInfo from "./Buttons/ButtonInfo";
import DarkMode from "./Buttons/DarkMode";
import UniversalButton from "./Buttons/UniversalButton";
import Info from "./Info";

export default function Container({ children }) {
  return (
    <div className="bg-cyan-600 text-black dark:bg-slate-800 dark:text-yellow-300 min-h-screen flex flex-col container mx-auto">
      <div className="flex flex-col mx-auto container text-center text-5xl">
        <div className="py-4">
          <h1>Популярные вопросы</h1>
        </div>
        <div className="flex justify-around border text-2xl">
          <DarkMode />
          <ButtonInfo />
          <UniversalButton />
        </div>
      </div>
      <div className="min-h-max flex">
        <Info />
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
}
