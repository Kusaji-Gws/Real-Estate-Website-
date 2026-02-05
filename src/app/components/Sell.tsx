import { PropertyListings } from "./PropertyListings";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const navigate = useNavigate();

  const handlePropertyClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <PropertyListings onPropertyClick={handlePropertyClick} />
  );
};

export default Sell;
