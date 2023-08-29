"use client";

import { useEffect, useRef } from "react";
import { useMap } from "../hooks/useMap";
import { Route } from "../utils/model";
import { socket } from "../utils/socket-io";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef);

  useEffect(() => {
    socket.connect();

    socket.on(
      "admin-new-points",
      async (data: { route_id: string; lat: number; lng: number }) => {
        const { route_id, lat, lng } = data;
        if (!map?.hasRoute(route_id)) {
          const response = await fetch(
            `http://localhost:3001/api/routes/${route_id}`
          );
          const route: Route = await response.json();
          map?.removeRoute(route_id);
          await map?.addRouteWithIcons({
            routeId: data.route_id,
            startMarkerOptions: {
              position: route.directions.routes[0].legs[0].start_location,
            },
            endMarkerOptions: {
              position: route.directions.routes[0].legs[0].end_location,
            },
            carMarkerOptions: {
              position: route.directions.routes[0].legs[0].start_location,
            },
          });
        }
        map?.moveCar(route_id, {
          lat,
          lng,
        });
      }
    );
    return () => {
      socket.disconnect();
    };
  }, [map]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        id="map"
        style={{ width: "100%", height: "100%" }}
        ref={mapContainerRef}
      ></div>
    </div>
  );
}

export default AdminPage;
