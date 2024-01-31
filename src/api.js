const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 *
 */

/** Get all companies */

class FrienderAPI {

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
     // authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  /** make get request for all users
   * [{username...}...]
  */
  static async getAllUsers() {
    const usersData = await this.request(`users/`);

    return usersData;
  }

  /**Register a user
   * user must include
   * {
   *  username,
   *  password,
   *  hobbies,
   *  number_street_name,
   *  city,friend_radius,
   *  photo_url
   * }
  */
  static async register(
    username,
    password,
    hobbies,
    number_street_name,
    city,
    friend_radius,
    photo_url) {

    let responseData;

    try {
      responseData = await this.request("users/",
        {
          username,
          password,
          hobbies,
          number_street_name,
          city,
          friend_radius,
          photo_url
        },
        "POST");
    }
    catch (err) {
      throw new Error("Username has already been taken");
    }

    //this.token = responseData.token;
    return responseData;
  }


}

export default FrienderAPI;



