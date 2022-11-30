import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";



function Map() {
    const [selectedPark, setSelectedPark] = useState(null);
    var uluru = [{ lat: 37.542571, lng: -121.993037 },
    { lat: 37.525400, lng: -122.037764 },
    { lat: 37.587546, lng: -122.066716 },
    { lat: 37.587546, lng: -122.066716 },
    { lat: 37.660284, lng: -122.089396 },
    { lat: 37.492686, lng: -122.249346 },
    { lat: 37.007888, lng: -122.067355 },
    { lat: 37.113164, lng: -121.651485 },
    { lat: 37.638625, lng: -121.911430 },
    { lat: 37.594870, lng: -122.473562 },
    { lat: 36.995174, lng: -121.602745 },
    { lat: 37.753038, lng: -122.423198 },
    { lat: 37.344717, lng: -121.979666 },
    { lat: 37.527798, lng: -122.312989 },
    { lat: 37.006852, lng: -122.064148 }
    ];
    const mapStyles = [
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                {
                    color: "#004358"
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
                {
                    color: "#fd7400"
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                },
                {
                    lightness: -20
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                },
                {
                    lightness: -17
                }
            ]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [
                {
                    color: "#ffffff"
                },
                {
                    visibility: "on"
                },
                {
                    weight: 0.9
                }
            ]
        },
        {
            elementType: "labels.text.fill",
            stylers: [
                {
                    visibility: "on"
                },
                {
                    color: "#ffffff"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {
                    visibility: "simplified"
                }
            ]
        },
        {
            elementType: "labels.icon",
            stylers: [
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                },
                {
                    lightness: -10
                }
            ]
        },
        {},
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
                {
                    color: "#1f8a70"
                },
                {
                    weight: 0.7
                }
            ]
        }
    ];
    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 37.660284, lng: -122.089396 }}
            defaultOptions={{ styles: mapStyles }}
        >
            {uluru.map((park, i) => (
                <Marker
                    key={i}
                    position={{
                        lat: park.lat,
                        lng: park.lng
                    }}
                    // onClick={() => {
                    //     setSelectedPark(park);
                    // }}
                    icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
                />
            ))}

            {selectedPark && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedPark(null);
                    }}
                    position={{
                        lat: selectedPark.geometry.coordinates[1],
                        lng: selectedPark.geometry.coordinates[0]
                    }}
                >
                    <div>
                        <h2>{selectedPark.properties.NAME}</h2>
                        <p>{selectedPark.properties.DESCRIPTIO}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={`${process.env.REACT_APP_MAP_KEY}`}
                loadingElement={<div style={{ height: `75%`, marginTop: "50px" }} />}
                containerElement={<div style={{ height: `75%`, marginTop: "50px" }} />}
                mapElement={<div style={{ height: `75%`, marginTop: "50px" }} />}
            />
        </div>
    );
}