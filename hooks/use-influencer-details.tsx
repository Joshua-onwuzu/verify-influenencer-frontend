import { getInfluencerDetail } from '@/services/get-influencer-leaderboard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation'

const useInfluencerDetails = () => {

    const {id} = useParams()

    const {
        data,
      } = useQuery({
        queryKey: ['GET_DETAILS', id],
        queryFn: async () => {
            if(!id) return
          const response = await getInfluencerDetail(id as string);
          return response.data
        },
        enabled: !!id
      });


      console.log({data})


    
  return {
    details: data,
    totalVerifiedClaims: data?.detail.claim.filter((x) => x.verification_status === 'Verified')
  }
}

export default useInfluencerDetails