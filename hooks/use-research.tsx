import { researchInfluencer } from '@/services/get-influencer-leaderboard';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';

const useResearch = () => {
    const router = useRouter()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: researchInfluencer,
        onSuccess: (data) => {
            router.push(`/leaderboard/${data.id}`)
        }
      });

      return {
        research: mutateAsync,
        isLoading: isPending,

      }
}

export default useResearch