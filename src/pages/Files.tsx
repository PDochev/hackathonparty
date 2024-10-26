import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Files() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-10">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Documentation organiser:
          </h3>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-12">
          <Label htmlFor="picture">Document</Label>
          <Input id="picture" type="file" />
        </div>
      </div>
    </Layout>
  );
}
