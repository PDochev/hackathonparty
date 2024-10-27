import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import docs_icon from "@/assets/file.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Files() {
  const [selectedBill, setSelectedBill] = useState("Council Tax Bill");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBill(event.target.value);
  };

  const uploadDoc = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input after upload
      }
    }, 2000);
  };

  const viewDocs = () => {
    console.log("viewing docs");
  };

  const files = [
    "CouncilTaxMar23",
    "CouncilTaxMay22",
    "OctopusEneJan24",
    "TriodosBankAug23",
    "OctopusEneJun24",
    "OctopusEneSep24",
  ];

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-10">
          <h3 className="text-2xl font-semibold">Your Documents</h3>
        </div>
        <div className="w-full max-w-sm items-center mt-6">
          <div className=" w-80 h-72  flex flex-col items-center justify-center border p-10 rounded-md bg-background m-auto drop-shadow-lg">
            <div
              className={`${
                !loading ? "hidden" : "h-60 text-center flex p-20"
              }`}
            >
              <p>UPLOADING...</p>
            </div>
            <div
              className={`${
                loading ? "hidden" : "flex flex-col items-center justify-center"
              }`}
            >
              <Label className="m-2 text-center" htmlFor="picture">
                Upload a new document
              </Label>
              <Input
                className="m-2"
                id="picture"
                type="file"
                ref={fileInputRef}
              />
              <div className="flex flex-col p-1 m-2 gap-2 ">
                <div className="flex flex-col gap-4">
                  <label>
                    <input
                      className="mr-2"
                      type="radio"
                      defaultChecked
                      value="Council Tax Bill"
                      checked={selectedBill === "Council Tax Bill"}
                      onChange={handleChange}
                    />
                    Council Tax Bill
                  </label>
                  <label>
                    <input
                      className="mr-2"
                      type="radio"
                      value="Water Bill"
                      checked={selectedBill === "Water Bill"}
                      onChange={handleChange}
                    />
                    Water Bill
                  </label>

                  <label>
                    <input
                      className="mr-2"
                      type="radio"
                      value="Bank Statement"
                      checked={selectedBill === "Bank Statement"}
                      onChange={handleChange}
                    />
                    Bank Statement
                  </label>
                </div>
              </div>

              <Button
                className="mx-2 p-2 bg-green-400"
                onClick={uploadDoc}
                type="submit"
              >
                Upload {selectedBill}
              </Button>
            </div>
          </div>
          <br />
          <div className="uploaddocCard w-80 h-32 flex flex-col items-center justify-center border p-10 rounded-md bg-background drop-shadow-lg m-auto">
            <p className="text-center text-md mb-4">
              SettleBuddy keeps all your documents safely in one place.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button
                  className="p-2 bg-green-400"
                  type="submit"
                  onClick={viewDocs}
                >
                  View your uploaded documents
                </Button>
              </DialogTrigger>
              <DialogContent className="w-80 md:w-96 lg:w-96  flex justify-center items-center rounded-md">
                <DialogHeader>
                  <DialogTitle className="text-center m-2">
                    <h2 className="mb-4">Your Files</h2>
                    <div className="grid grid-cols-2 items-center justify-center">
                      {files.map((item) => (
                        <div className="p-1 m-2">
                          <img
                            src={docs_icon}
                            className="w-16 h-16 m-auto rounded-md"
                          />
                          <p className="text-sm text-center p-1 mt-2">{item}</p>
                        </div>
                      ))}
                    </div>
                  </DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Layout>
  );
}
