// Server Component
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
export default async function Protected() {
  const { isAuthenticated } = getKindeServerSession();

  return (await isAuthenticated()) ? (
    <div>
      This page is protected - but you can view it because you are authenticated
    </div>
  ) : (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
              <p className="text-2xl font-semibold mb-4">Page Not Found</p>
              <p className="text-muted-foreground mb-8">
                Oops! The page you&#39;re looking for doesn&#39;t exist or has
                been moved.
              </p>
            </div>

            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-md shadow-sm"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
