import { useState } from "react"
import { supabase } from '../product'

export const useSupabase = async () => {

  const [products, setProducts] = useState([]);
  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from('products').select('*');
    if (data) {
      setProducts(data)
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
    return { products, getDataFromSupabase };
  }
}