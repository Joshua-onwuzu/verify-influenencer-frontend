import { getGeneralInfo, getLeaderboard } from '@/services/get-influencer-leaderboard';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'

const useLeaderBoard = () => {
    const [queryByCategory, setQueryByCategory] = useState('All')
    const {
        isLoading,
        data,
      } = useQuery({
        queryKey: ['GET_LEADERBOARD', queryByCategory],
        queryFn: async () => {
          const response = await getLeaderboard(queryByCategory);
          return response.data.claims
        },
      });

      const {
        data: generalInfo,
      } = useQuery({
        queryKey: ['GET_GENERAL_INFO'],
        queryFn: async () => {
          const response = await getGeneralInfo();
          return response.data
        },
      });



  return {
    isLoading,
    verifiedClaims: generalInfo?.total_verified_claims || '- -',
    totalClaims: generalInfo?.total_claims || '- -',
    averageTrustScore: generalInfo?.average_trust_score || '- -',
    categories: generalInfo?.categories || [],
    setQueryByCategory,
    claims: data,
    categoryQuery: queryByCategory
  }
}

export default useLeaderBoard