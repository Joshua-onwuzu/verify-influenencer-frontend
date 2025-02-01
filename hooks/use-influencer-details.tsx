import { getInfluencerDetail } from '@/services/get-influencer-leaderboard'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const useInfluencerDetails = () => {
  const { id } = useParams()

  const { data, isFetched } = useQuery({
    queryKey: ['GET_DETAILS', id],
    queryFn: async () => {
      if (!id) return
      const response = await getInfluencerDetail(id as string)
      return response.data
    },
    enabled: !!id,
  })

  useEffect(() => {
    if (isFetched && data?.total_claims === 0) {
      toast.info('Data Not Found for this influencer')
    }
  }, [isFetched])

  console.log({ data })
  return {
    details: data,
    totalVerifiedClaims: data?.detail.claim.filter((x) => x.verification_status === 'Verified'),
  }
}

export default useInfluencerDetails
