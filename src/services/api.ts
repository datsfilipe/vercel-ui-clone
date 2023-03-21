import axios from 'axios';

const baseURL = process.env.NOT_DEV ? 'https://vercel-ui-clone-three.vercel.app' : 'http://localhost:3000'

export const api = axios.create({
  baseURL: baseURL,
})
