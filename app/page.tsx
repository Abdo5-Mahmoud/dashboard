import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Admin Panel
        </h1>

        <p className="text-gray-600">Manage products, orders and customers</p>

        <Link href="/dashboard/products">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
