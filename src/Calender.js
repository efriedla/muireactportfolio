import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const DatePicker1 = () => (
    <div>
      <DatePicker hintText="Portrait Inline Dialog" container="inline" />
      <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
    </div>
  );
  
  export default DatePicker1;