import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return <SignUp routing="path" path="/register" appearance={{ elements: { card: "bg-transparent shadow-none" } }} />;
}
