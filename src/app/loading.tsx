import { Skeleton } from "@/components/ui/skeleton"

function loading() {
  return (
    <div className="flex ">
      <Skeleton className="min-h-[630px] h-full w-full bg-zinc-500 mt-5"/>
    </div>
  )
}
export default loading;