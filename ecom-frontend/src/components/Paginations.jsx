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
           siblingCount={0}
           boundaryCount={3}
           onChange={onChangeHandler} 
           shape="rounded"
        />
    )
}  
export default Paginations;
