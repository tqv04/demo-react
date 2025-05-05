import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export async function Signup(state: FormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const res = await fetch("http://localhost:9000/users", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Đăng ký thành công!!!");
      redirect("/");
    } else {
      toast.error(data?.message || "Có gì đó không ổn!?");
      return { message: data?.message || "Đăng ký thất bại!" };
    }
  } catch (error) {
    return { message: "Lỗi hệ thống hoặc server không phản hồi!" };
  }
}

export async function Login(state: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors: Record<string, string> = {};

  if (!email || !email.includes("@")) {
    errors.email = "Invalid email address.";
  }

  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const res = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      let message = "Đăng nhập thất bại!";
      try {
        const errorData = await res.json();
        message = errorData?.message || message;
      } catch (_) {}
      toast.error(message);
      return { message };
    }

    const data = await res.json();
    toast.success("Đăng nhập thành công!");
    redirect("/");
  } catch (error) {
    console.error("Lỗi fetch:", error);
  }
}
