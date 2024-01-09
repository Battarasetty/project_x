import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioOverview from "../../components/PortfolioOverview";
import PortfolioInfo from "../../components/PortfolioInfo";
import PoolFormSection from "../../components/PoolFormSection";
import HighlightComponentsContainer from "../../components/HighLightComponents/HighlightComponentsContainer";
import AddTokenModal from "../../components/AddTokenModal";
import { setShowHighlights } from "../../redux/pool/poolSlice";
import ChartComponent from "../../components/HighLightComponents/ChartComponent";
import TrendingArticle from "../../components/HighLightComponents/TrendingArticle";

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

          <div>
            {/* Top Cards  */}
            <div className="flex items-center justify-between">
              <div className="text-center shadow p-4 rounded-lg bg-white inline-block">
                <div className="font-bold text-lg mb-2">All-time profit</div>
                <div className="text-green-600 text-2xl mb-2">+ $208.02</div>
                <div className="text-blue-500 text-lg">01.5%</div>
              </div>
              <div className="text-center shadow p-4 rounded-lg bg-white inline-block">
                <div className="font-bold text-lg mb-2">
                  Pool Sharing Income
                </div>
                <div className="text-green-600 text-2xl mb-2">+ $18.02</div>
                <div className="text-blue-500 text-lg">1/8 Followers</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <ChartComponent />
              </div>
              <div>
                <TrendingArticle />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AddTokenModal /> */}
    </>
  );
};

export default PoolCreatorPage;
