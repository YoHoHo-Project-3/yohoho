import React from 'react'


const TripCard =({trip})=> {
    return (
        <div>
            <h1>{trip.title}</h1>
            <h1>{trip.description}</h1>
        </div>
    )
}

export default TripCard
