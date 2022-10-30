
import React from "react"
import GoogleMaps from "simple-react-google-maps"
import useClima from "../hooks/UseClima"


const Maps = ({ dato1, dato2, dato3  }) => {

    return (
            <div className="container">
            <GoogleMaps
                apiKey={"AIzaSyD27Lh6c-0eMW6bRsofgOjBcL1FWUntTYQ"}
                style={{ height: "400px", width: "100%" }}
                zoom={4}
                center={{
                    lat: dato2 ? dato2 : 35.7743,
                    lng: dato3 ? dato3 : -75.1937
                }}
                markers={[

                    
                    { lat: 25.7743, lng: -80.1937 },
                    { lat: 28.5383, lng: -81.3792 },
                    { lat: 40.7143, lng: -74.006 }
                ]}
                
            />
                
            </div>
        )
}

export default Maps