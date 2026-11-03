"use client";

import { Loader } from "@/components/loader";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!session && !isPending) {
      router.replace("/sign-in");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return <Loader />;
  }

  return <>{children}</>;
}
