import { Card } from '@/design-system/card/Card'
import { SkeletonBox } from '@/design-system/skeletonBox/SkeletonBox'

const SkeletonCard = () => (
  <Card className="flex items-center gap-3 border-gray-200">
    <SkeletonBox className="w-12 h-12 rounded-full" />
    <div className="flex-1 space-y-1">
      <SkeletonBox className="h-4 w-2/3" rounded={false} />
      <SkeletonBox className="h-3 w-1/3" rounded={false} />
    </div>
  </Card>
)

export const DoctorLoadingState = () => (
  <div
    aria-busy="true"
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 min-h-[192px]"
  >
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)