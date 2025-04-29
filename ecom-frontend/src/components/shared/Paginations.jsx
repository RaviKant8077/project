import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Paginations = ({ numberOfPage, totalPage ,onPageChange}) => {
    
    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const paramValue = searchParams.get("page")
          ? Number(searchParams.get("page"))
          : 1;

    const onChangeHandler = (event, value) => {
        params.set("page", value.toString());
        navigate(`${pathname}?${params}`);
    };

    return (
        <Pagination
           count={numberOfPage} // Ensure this reflects the correct total number of pages
           page={paramValue}
           defaultPage ={0}
           siblingCount={1} // Adjusted to show one sibling page
           boundaryCount={1} // Adjusted to show one boundary page

           onChange={onChangeHandler} 
           shape="rounded"
        />
    )
}  
export default Paginations;
