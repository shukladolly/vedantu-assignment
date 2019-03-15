export default function reducer(
  state = {
    profileInfo: {},
    projectInfo: []
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

    case "PROJECT_INFO":
      {
        return {
          ...state,
          projectInfo: action.projectInfo
        };
      }
      break;

    case "PROJECT_ERROR":
      {
        throw new Error("Unable to fetch project info!!");
      }
      break;
  }
  return state;
}
