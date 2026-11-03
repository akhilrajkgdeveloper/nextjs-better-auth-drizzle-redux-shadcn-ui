import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInForm } from "../_components/sign-in-form";
import Link from "next/link";

export const instant = false;

export default function SignInPage() {
  return (
    <>
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/sign-up" className="text-xs text-muted-foreground">
            Don't have an account? <span className="underline">Sign Up</span>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
