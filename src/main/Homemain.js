import Noticemain from "./Noticemain";
import Intromain from "./Intromain";
import Linkmain from "./Linkmain";
import Slidemain from "./Slidemain";
export default function Homemain() {
  return (
    <>
      <div className="h-64 my-3">
        <Slidemain />
      </div>
      <main className="h-4/6 flex-grow flex ">
        <section className="flex-1 h-full">
          <Intromain />
        </section>
        <section className="flex-1 h-full">
          <Noticemain />
        </section>
        <section className="flex-1 h-full">
          <Linkmain />
        </section>
      </main>
    </>
  );
}
