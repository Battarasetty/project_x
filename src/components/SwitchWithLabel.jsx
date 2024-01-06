import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

const SwitchWithLabel = ({ label, checked, onChange, className }) => {
  return (
    <FormControlLabel
      label={label}
      labelPlacement="start"
      control={<Switch color="primary" checked={checked} onChange={onChange} />}
      className={className}
    />
  );
};

export default SwitchWithLabel;
