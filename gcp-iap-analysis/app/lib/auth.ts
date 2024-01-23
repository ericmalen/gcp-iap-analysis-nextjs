import { OAuth2Client } from 'google-auth-library';

export const validateIapToken = async (token: string | null) => {
    if(!token){
      return false;
    } 
    try{
      const oAuth2Client = new OAuth2Client();
      const keys = await oAuth2Client.getIapPublicKeys();
      const audience = '/projects/686790199885/global/backendServices/3664783403676490642';
      const ticket = await oAuth2Client.verifySignedJwtWithCertsAsync(
          token,
          keys.pubkeys,
          audience,
          ['https://cloud.google.com/iap']
      );
    } 
    catch(err){  
      return false;
    }
    return true;
  };

  export const getPayload = async (token: string | null) => {
    if(!token){
        return null;
    } 
    try{
      const oAuth2Client = new OAuth2Client();
      const keys = await oAuth2Client.getIapPublicKeys();
      const audience = '/projects/686790199885/global/backendServices/3664783403676490642';
      const ticket = await oAuth2Client.verifySignedJwtWithCertsAsync(
          token,
          keys.pubkeys,
          audience,
          ['https://cloud.google.com/iap']
      );
      return ticket.getPayload();
    } 
    catch(err){
      console.log(err);  
      return false;
    }
  };