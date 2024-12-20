import login_img from "@/assets/login.jpg";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store";

function Login() {
  const navigate = useNavigate();
  const updateUsername = useUserStore(({ updateName }) => updateName);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;

    if (username) {
      updateUsername(username);
      navigate("/");
    }
  }

  return (
    <div role="presentation" className="flex w-full  min-h-svh">
      <section className="hidden w-1/2  lg:flex ">
        <img
          className="w-full  h-svh object-cover bg-center flex-shrink-0"
          src={login_img}
          alt="Image of a person reading a book."
        />
      </section>
      <section className="lg:w-1/2 flex items-center justify-center mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="w-72 md:w-96 py-6 mx-auto flex flex-col justify-center items-center border rounded-md  "
        >
          <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
            SettleBuddy
          </h3>
          <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
            Welcome Back
          </h2>

          <div className="grid w-3/4 max-w-sm items-center gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <Button type="submit" className="w-3/4 mt-4">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Login;
