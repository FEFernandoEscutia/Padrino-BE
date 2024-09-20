import { v2 } from "cloudinary"
import { envs } from "./envsconfig"




export const cloudinaryConfig={
    provide: "CLOUDINARY",
    useFactory:()=>{
        return v2.config({
            cloud_name:envs.cloudynaryName,
            api_key:String(envs.cloudynaryApiKey),
            api_secret:process.env.CLOUDINARY_API_SECRET
        })
    }
    }