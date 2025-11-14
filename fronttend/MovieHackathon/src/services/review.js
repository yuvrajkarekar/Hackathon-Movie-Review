import axios from "axios"
import { config } from "./config"

export async function createReview(movie_id, review, rating, modified) {
  try {
    // create url
    const url = `${config.server}/review/create`
    const body = { movie_id, review, rating, modified }

    // create headers with require token
    // send GET request and get the response
    const response = await axios.post(url,body, {
      headers: {
        token: localStorage.getItem('token'),
      },

    })

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}