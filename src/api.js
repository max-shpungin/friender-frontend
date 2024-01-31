const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 *
 */

/** Get all companies */

class FrienderAPI {

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
      responseData = await this.request("auth/register/",
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



