import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;



/*import React from 'react';

//import './custom-button.styles.scss';
//no longer needed cos of the custombuttoncontainer

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children, ...props}) => (

	<CustomButtonContainer {...props} >  { children } </CustomButtonContainer>

);

export default CustomButton;*/

