import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions";


export const useProductFilter = () => {
    // Debugging: Log the current search parameters
    // console.log("Current Search Params:", searchParams.toString());



   
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect (() => {
        const  params =new URLSearchParams();

        const currentPage = searchParams.get("page") 
            ? Number(searchParams.get("page")) : 1;

        params.set("pageNumber",currentPage - 1);

        const sortOrder = searchParams.get("sortby") || "asc";
        const categoryParams =searchParams.get("category") || null;
        const keyword = searchParams.get("keyword") || null;
        params.set("sortBy","price");
        params.set("sortOrder",sortOrder);

        if(categoryParams)
        {
            params.set("category",categoryParams);
        }

        if(keyword){
            params.set("keyword",keyword);
        }

        const queryString = params.toString(); 
        // Debugging: Log the constructed query string
        // console.log("Constructed Query String:", queryString);


        console.log("QUERY STRING",queryString);

        dispatch(fetchProducts(queryString));

},[dispatch,searchParams]);
};
export  default useProductFilter;
