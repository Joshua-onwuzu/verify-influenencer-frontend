import { fetchJobDetails, researchInfluencer } from '@/services/get-influencer-leaderboard';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const useResearch = () => {
    const router = useRouter()
    const [jobId, setJobId] = useState('')
    const { mutateAsync, isPending } = useMutation({
        mutationFn: researchInfluencer,
        onSuccess: (data) => {
            console.log({data}, "xxxxxxx")

            setJobId(data.job.id)
        }
      });

      const fetchInfluencerDetails = async (id: string) => {
        return await fetchJobDetails(id)
      }

      const ref = useRef<NodeJS.Timeout  | null>(null)
      const listenForJobCompletion = (id: string) => {
        if(!id) return
        const s = () => new Promise((resolve, reject) => {
            const interval =  setInterval(() => {
                fetchInfluencerDetails(id).then((data) => {
                    console.log({data}, 'PPPPPPPPPPPPPPPPPPP')
                    if(data.job.claimId){
                        resolve(null)
                        router.push(`/leaderboard/${data.job.claimId}`)
                    }
                }).catch(reject)
            }, 2000)

            ref.current = interval
        })



        toast.promise(s, {
            success: 'Research Completed',
            pending: 'Researching ...',
            error: 'Research failed'
        })

      }


      useEffect(() => {

        if(jobId){
            listenForJobCompletion(jobId) 
        }


        return () => {
            if(!ref.current) return
            clearInterval(ref.current)
        }

      }, [jobId])


      return {
        research: mutateAsync,
        isLoading: isPending,

      }
}

export default useResearch