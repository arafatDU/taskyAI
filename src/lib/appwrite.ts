import { Client, Databases, ID, Query } from 'appwrite';

const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT

const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT) 
    .setProject(APPWRITE_PROJECT_ID); 


const databases = new Databases(client);


export { databases, ID, Query };