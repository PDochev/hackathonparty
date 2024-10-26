import { Layout } from "@/components/Layout";
import badge_1 from "@/assets/sim-card.png";
import badge_2 from "@/assets/hospital.png";
import badge_3 from "@/assets/piggy-bank.png";

export default function Badges() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Your badges
          </h3>
        </div>

        <div className="flex gap-6 items-center justify-center mt-8 flex-wrap flex-1">
          <div className="w-80 h-72  flex flex-col items-center justify-center border p-10 rounded-md bg-background drop-shadow-lg">
            <img src={badge_1} alt="badge 1" />
            <h4 className="text-center font-bold mt-6">SIMply the best!</h4>
          </div>
          <div className="w-80 h-72  flex flex-col items-center justify-center border p-10 rounded-md bg-background drop-shadow-lg">
            <img src={badge_2} alt="badge 1" />
            <h4 className="text-center font-bold mt-6">An Apple a day!</h4>
          </div>
          <div className="w-80 h-72  flex flex-col items-center justify-center border p-10 rounded-md bg-background drop-shadow-lg">
            <img src={badge_3} alt="badge 1" />
            <h4 className="text-center font-bold mt-6">It's Payday!</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}
