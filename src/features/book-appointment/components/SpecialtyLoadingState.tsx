import { SkeletonCard } from "@/design-system/skeletonCard/SkeletonCard";


export const SpecialtyLoadingState = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)
