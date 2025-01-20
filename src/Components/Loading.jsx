import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className="container flex flex-col justify-center items-center h-[75vh]">
      <AiOutlineLoading3Quarters  size={48} className="mb-5 animate-spin"/>
      <h1 className="text-2xl font-bold">Loading...</h1>
    </div>
  )
}
