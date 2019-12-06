import React from 'react';

const withSuspense = (Component) => {
   return (props) => {
       return   <React.Suspense fallback={<div>Wait, please... </div>} > <Component {...props} /> </React.Suspense>
   }
}

export default withSuspense