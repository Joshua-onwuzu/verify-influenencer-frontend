import { researchInfluencer } from '@/services/get-influencer-leaderboard';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useResearch = () => {
    const router = useRouter()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: researchInfluencer,
        onSuccess: (data) => {
            if(data.id){
                router.push(`/leaderboard/${data.id}`)
            } else {
                toast.error(data.message)
            }
        }
      });

      return {
        research: mutateAsync,
        isLoading: isPending,

      }
}

export default useResearch