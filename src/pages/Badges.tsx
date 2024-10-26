import { Layout } from "@/components/Layout";

export default function Badges() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Your badges
          </h3>
        </div>

        <div className="flex gap-2 items-center justify-center mt-8">
          <div className="w-80 h-72 border p-10 rounded-md bg-background drop-shadow-lg">
            1
          </div>
        </div>
      </div>
    </Layout>
  );
}
