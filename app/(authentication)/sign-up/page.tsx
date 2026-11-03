import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignUpForm } from "../_components/sign-up-form";
import Link from "next/link";

export const instant = false;

export default function SignUpPage() {
  return (
    <>
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/sign-in" className="text-xs text-muted-foreground">
            Already have an account? <span className="underline">Sign In</span>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
