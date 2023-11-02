import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-3">
        {"abcdefgi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
