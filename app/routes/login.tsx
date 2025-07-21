import { Form, redirect } from "react-router";
import type { Route } from "./+types/login";

export async function action({ request }: Route.ActionArgs) {
  let fd = await request.formData();

  let errors: { username: string | null; password: string | null } = {
    username:
      (fd.get("username") as string)?.length > 0
        ? null
        : "Username is required",
    password:
      (fd.get("password") as string)?.length > 0
        ? null
        : "Password is required",
  };

  if (Object.values(errors).some((error) => error !== null)) {
    return { errors };
  }

  return redirect("/");
}

export default function Login({ actionData }: Route.ComponentProps) {
  return <LoginForm actionData={actionData} />;
}

export function LoginForm({
  actionData,
}: {
  actionData?: Route.ComponentProps["actionData"];
}) {
  return (
    <Form method="post">
      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        <span style={{ display: "inline-block", marginRight: "0.5rem" }}>
          Username:
        </span>
        <input type="text" name="username" />
        {actionData?.errors?.username && (
          <ErrorMessage message={actionData.errors.username} />
        )}
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        <span style={{ display: "inline-block", marginRight: "0.5rem" }}>
          Password:
        </span>
        <input type="password" name="password" />
        {actionData?.errors?.password && (
          <ErrorMessage message={actionData.errors.password} />
        )}
      </label>
      <br />

      <button type="submit">Login</button>
    </Form>
  );
}

export function ErrorMessage({ message }: { message: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: "0.5rem",
        color: "red",
      }}
    >
      {message}
    </span>
  );
}
