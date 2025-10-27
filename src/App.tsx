import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input as ShadInput } from "./components/ui/input";
import { X } from "lucide-react";

type AuthFormData = {
  login: {
    value: string;
    error: boolean;
    validate: RegExp;
  };
  password: {
    value: string;
    error: boolean;
    validate: RegExp;
  };
  email: {
    value: string;
    error: boolean;
    validate: RegExp;
  };
  surname: {
    value: string;
    error: boolean;
    validate: RegExp;
  };
};

function App() {
  const [formData, setFormData] = useState<AuthFormData>({
    login: {
      value: "",
      error: false,
      validate: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    },
    password: {
      value: "",
      error: false,
      validate:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    },
    email: {
      value: "",
      error: false,
      validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    surname: {
      value: "",
      error: false,
      validate: /^[A-Z][a-z]+$/,
    },
  });

  const [picture, setPicture] = useState<string>("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);


    const hasErrors = Object.values(formData).some((field) => field.error);
    if (hasErrors) {
      alert("❌ Исправьте ошибки перед отправкой!");
      return;
    }

    alert("✅ Все поля прошли проверку!");
  };

  function handleChangeFormData<K extends keyof AuthFormData>(
    key: K,
    value: string
  ) {
    setFormData((prev) => {
      const newValue = value;
      const regex = prev[key].validate;
      return {
        ...prev,
        [key]: {
          ...prev[key],
          value: newValue,
          error: newValue.length > 0 ? !regex.test(newValue) : false,
        },
      };
    });
  }

  function handleChangeFile(e: any) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPicture(url);
    }
  }

  return (
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

              {Object.entries(formData).map(([key, data]) => (
                <div key={key} className="flex flex-col gap-2">
                  <label className="text-sm font-medium capitalize">
                    {key}
                  </label>
                  <div className="relative">
                    <ShadInput
                      type={key === "password" ? "password" : "text"}
                      name={key}
                      placeholder={key}
                      value={data.value}
                      onChange={(e) =>
                        handleChangeFormData(key as keyof AuthFormData, e.target.value)
                      }
                      className={data.error ? "border-red-500" : ""}
                    />
                    {data.error && (
                      <X
                        color="red"
                        className="absolute right-2 top-2.5 w-4 h-4"
                      />
                    )}
                  </div>
                </div>
              ))}

              <Button type="submit" className="w-full bg-black text-white">
                Login
              </Button>
            </form>
          </div>


          <div className="hidden md:block flex-1 relative">
            <ShadInput type="file" name="image" onChange={handleChangeFile} />
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
  );
}

export default App;

