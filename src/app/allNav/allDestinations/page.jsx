import DestinationCard from '@/components/destinationCard/DestinationCard';
import React from 'react';
const allDestinations = async()=>{
  const res = await fetch('http://localhost:5000/destination')
  const data = res.json()
  return data
}
const allDestinationsPage = async() => {
  const views = await allDestinations()
  return (
    <div>
      <h1 className='text-3xl font-bold my-7'>All Destination: {views.length}</h1>
      <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5'>
        {
          views.map((view)=>{
            return(
              <DestinationCard key={view._id} view={view}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default allDestinationsPage;