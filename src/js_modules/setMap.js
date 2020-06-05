import API_KEYS from "./data/API_KEYS";

export default function setMap(lng, lat) {
    mapboxgl.accessToken = API_KEYS.mapBoxAPIToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [lng, lat],
        zoom: 12,
    });
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);
}