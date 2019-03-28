export function getPersonalProfile() {
  return dispatch => {
    return fetchUserProfile().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchProfileSuccess(json));
      } else {
        dispatch(fetchProfileError(json));
      }
    });
  };

  function fetchUserProfile() {
    return fetch("https://api.github.com/users/supreetsingh247", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => Promise.all([response, response.json()]));
  }

  function fetchProfileSuccess(profileInfo) {
    return {
      type: "PROFILE_INFO",
      profileInfo
    };
  }

  function fetchProfileError(json) {
    return {
      type: "PROFILE_ERROR",
      json
    };
  }
}
