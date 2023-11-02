import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div>
      <Card className="flex flex-col justify-between">
        <CardHeader className="flex-row gap-4 items-center">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-6 flex-grow" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
