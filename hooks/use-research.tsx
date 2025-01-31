import { fetchJobDetails, researchInfluencer } from '@/services/get-influencer-leaderboard';
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

const useResearch = () => {
    const router = useRouter()
    const [jobId, setJobId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { mutateAsync, isPending } = useMutation({
        mutationFn: researchInfluencer,
        onSuccess: (data) => {

            setJobId(data.job.id)
        }
      });

      const fetchInfluencerDetails = async (id: string) => {
        return await fetchJobDetails(id)
      }

      const ref = useRef<NodeJS.Timeout  | null>(null)
      const listenForJobCompletion = async (id: string) => {
        if(!id) return
        setIsLoading(true)
        const s = () => new Promise((resolve, reject) => {
            const interval =  setInterval(() => {
                fetchInfluencerDetails(id).then((data) => {
                    if(data.job.claimId){
                        resolve(null)
                        const isEmpty = data.job.isEmpty

                        if(isEmpty){
                            toast.info('No data found')
                        } else {
                            router.push(`/leaderboard/${data.job.claimId}`)
                        }

                        if(ref.current){
                            clearInterval(ref.current)
                        }
                        setIsLoading(false)

                    } else if(data.job.status === 'error'){
                        reject()
                        toast.error(data.job.message)
                        if(ref.current){
                            clearInterval(ref.current)
                        }
                        setIsLoading(false)

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
        disableResearch: isPending || isLoading,
        

      }
}

export default useResearch