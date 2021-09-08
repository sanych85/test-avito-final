import axios from "axios"

export const getInfo  = async (type, url)=> {
   
   try {
      return await axios[type](url)
   }
   catch(err) {
      console.log(err)
   }
   

   }


