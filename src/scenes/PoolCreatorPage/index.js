import React, { useState } from 'react';
import SwitchWithLabel from '../../components/SwitchWithLabel';
import HighlightComponentsContainer from '../../components/HighLightComponents/HighlightComponentsContainer';

const PoolCreatorPage = () => {
  const [showHighlights, setShowHighlights] = useState(true);

  return (
    <div className="flex">
      {/* Left Side */}
      <div style={{ flex: 1, paddingRight: '20px', borderRight: '1px solid #F1F2F5' }}>
        <h2 className="text-xl font-semibold">Portfolio Overview</h2>
        <button className="border-b mb-2">Create Pool</button>
      </div>

      {/* Right Side */}
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        {/* SwitchWithLabel component */}
        <SwitchWithLabel
          label="Highlights"
          checked={showHighlights}
          onChange={() => setShowHighlights(!showHighlights)}
          className="ml-4"
        />

        

        {/* Add other components or content for the right side as needed */}
        <HighlightComponentsContainer showHighlights={showHighlights} />
      </div>
    </div>
  );
};

export default PoolCreatorPage;
