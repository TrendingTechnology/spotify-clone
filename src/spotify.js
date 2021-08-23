// authentication using spotify api , let spotify control it
export const authEndpoint = "https://accounts.spotify.com/authorize";
// client id from the spotify developer
const clientId = "a052408b930b4ca3bdfce897d6bfdf8d";
const redirectUri = "http://localhost:3000/";

// scopes :give the optportunity to user to do something , i will add in scope the rules what the user can like delete

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  //goes to the hash part of url
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
