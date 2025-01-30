export interface IApiResponse {
    success: boolean;
    message?: string;
  }



  export enum Journal {
    NEJM = 'The New England Journal of Medicine (NEJM)',
    Lancet = 'The Lancet',
    JAMA = 'JAMA (Journal of the American Medical Association)',
    BMJ = 'BMJ (British Medical Journal)',
    NatureMedicine = 'Nature Medicine',
    PLOSMedicine = 'PLOS Medicine',
    CID = 'Clinical Infectious Diseases (CID)',
    AnnalsIM = 'Annals of Internal Medicine',
  }
  
  export interface IGetLeaderboardResponse extends IApiResponse {
    data: {
      claims: {name: string, _id: string, average_trust_score: string, claim: any[] }[];
    };
  }

  export interface IGetGeneralInfoResponse extends IApiResponse {
    data: {
        categories: string[];
        total_claims: number;
        total_verified_claims: number;
        average_trust_score: number;
      }; 
  }

  export type ResearchInfluencerPayload = {
    time: Time;
    name: string;
    claim_size: number;
    selected_journals: Journal[];
    openAi_key: string;
    assemblyAi_key: string;
    perplexity_key: string;
    listen_notes_key: string;
    twitter_bearer_token: string;
  };

  export interface IGetInfluencerResponse extends IApiResponse {
    data: {
      detail: {name: string, _id: string, average_trust_score: string, claim: any[] };
      average_trust_score: string;
      total_claims: number;
      categories: string[];
    };
  }

  export enum Time {
    ALL_TIME = 'ALL_TIME',
    LAST_WEEK = 'LAST_WEEK',
    LAST_MONTH = 'LAST_MONTH',
    LAST_YEAR = 'LAST_YEAR',
  }