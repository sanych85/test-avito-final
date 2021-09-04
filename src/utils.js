import axios from "axios"

export const getInfo  = async (type, url)=> {
   
   try {
      return await axios[type](url)
   }
   catch(err) {
      console.log(err)
   }
   
      
   }


//   export const getSingePostAndComments 


// export const getItem = (arr, param)=> {
//    return arr.find(item=>item[param]=param)
// }