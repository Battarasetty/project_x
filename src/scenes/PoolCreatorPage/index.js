import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioOverview from "../../components/PortfolioOverview";
import PortfolioInfo from "../../components/PortfolioInfo";
import PoolFormSection from "../../components/PoolFormSection";
import HighlightComponentsContainer from "../../components/HighLightComponents/HighlightComponentsContainer";
import AddTokenModal from "../../components/AddTokenModal";
import { setShowHighlights } from "../../redux/pool/poolSlice";

const PoolCreatorPage = () => {
  const dispatch = useDispatch();

  const showHighlights = useSelector((state) => state.pool.showHighlights);
  const isPoolFormOpen = useSelector((state) => state.pool.isPoolFormOpen);

  const marginTopValue = isPoolFormOpen ? "30px" : "62px";


  return (
    <>
      <div className="flex gap-5">
        {/* Left Side */}
        <PortfolioOverview />

        {/* Right Side */}
        <div className={`mt-[${marginTopValue}]`} style={{ width: "70%" }}>
          <PortfolioInfo
            showHighlights={showHighlights}
            setShowHighlights={(value) => dispatch(setShowHighlights(value))}
          />
          {/* Charts */}
          <div className="container mt-7">
            <HighlightComponentsContainer showHighlights={showHighlights} />
          </div>
          {/* Pool Form  */}
          {isPoolFormOpen && <PoolFormSection />}
        </div>
      </div>
      {/* <AddTokenModal /> */}
    </>
  );
};

export default PoolCreatorPage;
