import Navbar from "@/components/custom/Navbar";

export default function Home() {
  return (
    <header>
      <nav role="navigation">
        <Navbar>
          <div className="flex items-center justify-between w-full m-2">
            <h4 className="ml-4 text-md font-semibold tracking-tight scroll-m-20 ">
              Immigration App
            </h4>
            <div className="flex items-center gap-4 mr-4"></div>
          </div>
        </Navbar>
      </nav>
    </header>
  );
}
