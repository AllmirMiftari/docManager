import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <main className="auth-Page">
      <SignIn />
    </main>
  );
}

export default SignInPage;
