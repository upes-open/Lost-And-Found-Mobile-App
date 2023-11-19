import { TokenResponse } from "expo-auth-session";
import { getData, storeData } from "./asyncStore";

const clientId = "9e01da48-54e9-4470-9513-cfec59568426";
const tokenEndpoint = `https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b/oauth2/v2.0/token`;

export const refreshToken = async () => {
  const tokenString = await getData("cachedToken");
  if (!tokenString) return null;

  const tokenConfig = JSON.parse(tokenString);
  let tokenResponse = new TokenResponse(tokenConfig);

  if (!tokenResponse.shouldRefresh()) return tokenResponse;

  const refreshConfig = {
    clientId: clientId,
    refreshToken: tokenResponse.refreshToken,
  };

  const endpointConfig = { tokenEndpoint };

  try {
    tokenResponse = await tokenResponse.refreshAsync(
      refreshConfig,
      endpointConfig
    );

    if (tokenResponse.accessToken) {
      await storeData("cachedToken", JSON.stringify(tokenResponse));

      return tokenResponse;
    }
  } catch (err) {
    console.log("Error refreshing token: " + err.message);
  }
};
