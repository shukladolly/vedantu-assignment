export default function reducer(
  state = {
    profileInfo: {}
  },
  action
) {
  console.log("in reducer!!");
  console.log(action);

  switch (action.type) {
    case "PROFILE_INFO":
      {
        return {
          ...state,
          profileInfo: action.profileInfo
        };
      }
      break;

    case "PROFILE_ERROR":
      {
        throw new Error("Unable to fetch profile info!!");
      }
      break;
  }
  return state;
}
