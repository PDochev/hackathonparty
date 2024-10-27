import { Layout } from "@/components/Layout";
import badge_1 from "@/assets/sim-card.png";
import badge_2 from "@/assets/hospital.png";
import badge_3 from "@/assets/piggy-bank.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const badges = [
  {
    id: 1,
    name: "SIMply the best!",
    image: badge_1,
    task: "You have successfully registered your SIM card",
    date: "Earned on 12th June 2021",
  },
  {
    id: 2,
    name: "An Apple a day!",
    image: badge_2,
    task: "You have successfully registered with the NHS",
    date: "Earned on 16th June 2022",
  },
  {
    id: 3,
    name: "It's Payday!",
    image: badge_3,
    task: "You have successfully opened a bank account",
    date: "Earned on 13th June 2024",
  },
];

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
          {badges.map((badge) => {
            return (
              <Dialog>
                <DialogTrigger>
                  <div
                    key={badge.id}
                    className="w-80 h-72  flex flex-col items-center justify-center border p-10 rounded-md bg-background drop-shadow-lg"
                  >
                    <img src={badge.image} alt="badge 1" />
                    <h4 className="text-center font-bold mt-6">{badge.name}</h4>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-80 md:w-96 lg:w-96  flex justify-center items-center rounded-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl">
                      Badge 🏆
                    </DialogTitle>

                    <DialogDescription className="">
                      <div
                        key={badge.id}
                        className="w-80 h-72 flex flex-col items-center justify-center  p-10 gap-10 "
                      >
                        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-black">
                          {badge.name}
                        </h3>
                        <img src={badge.image} alt="badge 1" />

                        <small className="text-sm font-medium leading-none text-center">
                          {badge.task}
                        </small>
                        <small className="text-sm  leading-none text-center">
                          {badge.date}
                        </small>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
