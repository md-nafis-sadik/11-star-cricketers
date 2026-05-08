import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
      <Skeleton className="h-[28rem] rounded-[2rem]" />
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/5" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
}
