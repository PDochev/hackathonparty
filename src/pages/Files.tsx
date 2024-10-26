import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Files() {

  const [selectedBill, setSelectedBill] = useState('Council Tax Bill');
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    setSelectedBill(event.target.value);
  };

  const uploadDoc = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  const viewDocs = () => {
    console.log("viewing docs")
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-10">
          <h3 className="text-2xl font-semibold">
            Your Documents:
          </h3>
        </div>
        <div className="w-full max-w-sm items-center gap-1.5 mt-6">
          <div className="uploaddocCard bg-gray-200 flex flex-col p-2 m-2 shadow-md">
            <div className={`${!loading ? "hidden" : "h-60 text-center p-20"}`}><p>UPLOADING...</p></div>
            <div className={`${loading ? "hidden" : ""}`}>
              <Label className="m-2 text-center" htmlFor="picture">Upload a new document</Label>
              <Input className="m-2" id="picture" type="file" />
              <div className="selectinput flex flex-col p-1 m-2 gap-0">
                <label className="flex-1">
                  <input
                    type="radio"
                    defaultChecked
                    value="Council Tax Bill"
                    checked={selectedBill === 'Council Tax Bill'}
                    onChange={handleChange}
                  />
                  Council Tax Bill
                </label>
                <br />
                <label className="flex-1">
                  <input
                    type="radio"
                    value="Water Bill"
                    checked={selectedBill === 'Water Bill'}
                    onChange={handleChange}
                  />
                  Water Bill
                </label>
                <br />
                <label className="flex-1">
                  <input
                    type="radio"
                    value="Bank Statement"
                    checked={selectedBill === 'Bank Statement'}
                    onChange={handleChange}
                  />
                  Bank Statement
                </label>
              </div>
              <br />
              <Button className="mx-2 p-2 bg-green-400" onClick={uploadDoc} type="submit">Upload {selectedBill}</Button>
            </div>
          </div>
          <br />
          <div className="uploaddocCard bg-gray-200 flex flex-col p-2 mx-2 shadow-md">
            <p className="text-center text-md">SettleBuddy keeps all your documents safely in one place.</p>
            <Button className="m-2 p-2 bg-green-400" type="submit" onClick={viewDocs} >View your uploaded documents {loading ? "true" : "bye"}</Button>
          </div>
        </div>
      </div >

    </Layout >
  );
}
