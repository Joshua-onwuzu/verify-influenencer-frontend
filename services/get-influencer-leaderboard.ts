import { IGetGeneralInfoResponse, IGetInfluencerResponse, IGetLeaderboardResponse } from "@/types";

export const getLeaderboard = async (
    category: string
  ): Promise<IGetLeaderboardResponse> => {

    const query = category === 'All' ? '' : `?category=${category}`

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/leaderboard${query}`;
  
    const res = await fetch(url);
  
    return res.json();
  };





export const getGeneralInfo = async (): Promise<IGetGeneralInfoResponse> => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/general-info`;
  
    const res = await fetch(url);
  
    return res.json();
}




export const getInfluencerDetail = async (id: string): Promise<IGetInfluencerResponse> => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/influencer/details?id=${id}`;
  
    const res = await fetch(url);
  
    return res.json();
}
