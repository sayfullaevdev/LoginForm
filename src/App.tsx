import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [picture, setPicture] = useState<string>("");

  const [errors, setErrors] = useState({
    name,
    age,
    email,
    password,
  });

  const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
  const ageRegex = /^(1[2-4][0-9]|150|[1][2-9])$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const submit = (e: any) => {
    e.preventDefault();

    setErrors({ name: "", age: "", email: "", password: "" });

    let hasError = false;
    const newErrors = { name: "", age: "", email: "", password: "" };

    if (!nameRegex.test(name.trim())) {
      newErrors.name = "Имя может содержать только буквы";
      hasError = true;
    }

    if (!ageRegex.test(age)) {
      newErrors.age = "Возраст должен быть от 12 до 150";
      hasError = true;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Некорректный email";
      hasError = true;
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Пароль должен содержать ≥8 символов, заглавную букву, цифру и спецсимвол";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    console.log({
      name,
      age,
      email,
      password,
    });
    alert("✅ Все поля прошли проверку!");
  };

  function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPicture(url);
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-4xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8">
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
                  <p className="text-muted-foreground">
                    Login to your Acme Inc account
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Age</label>
                  <Input
                    type="number"
                    name="age"
                    onChange={(e) => setAge(e.target.value)}
                    className={errors.age ? "border-red-500" : ""}
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm">{errors.age}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Password</label>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={errors.password ? "border-red-500" : ""}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-black text-white">
                  Login
                </Button>
              </form>
            </div>

            <div className="hidden md:block flex-1 relative">
              <Input type="file" name="image" onChange={handleChangeFile} />
              {picture && (
                <img
                  src={picture}
                  alt="preview"
                  className="absolute inset-0 h-full w-full object-contain p-8 dark:brightness-[0.8]"
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
