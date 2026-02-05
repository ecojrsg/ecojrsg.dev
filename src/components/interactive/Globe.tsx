import { onMount, onCleanup } from "solid-js";
import * as d3 from "d3";
import worldData from "@/lib/world.json";

// Define a basic GeoJSON Feature interface for better type safety
interface GeoJSONFeature {
  type: "Feature";
  properties: {
    name: string;
    // Add other properties if needed
  };
  geometry: {
    type: string;
    coordinates: any; // More specific type could be defined if necessary
  };
}

const GlobeComponent = ({ scale = 250 }) => {
  let mapContainer: HTMLDivElement | undefined;

  const visitedCountries = [
    "Spain",
    "Germany",
    "Netherlands",
    "Austria",
    "Japan",
    "Mexico",
    "Italy",
    "France",
    "Belgium",
    "Luxembourg",
  ];

  onMount(() => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = 500;
    const sensitivity = 100;

    let projection = d3
      .geoOrthographic()
      .scale(scale)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    let svg = d3
      .select(mapContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append("circle")
      .attr("fill", "#EEE")
      .attr("stroke", "#000")
      .attr("stroke-width", "0.2")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    let map = svg.append("g");

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", (d: GeoJSONFeature) => pathGenerator(d))
      .attr("fill", (d: { properties: { name: string } }) =>
        visitedCountries.includes(d.properties.name) ? "#7B50A1" : "white"
      )
      .style("stroke", "black")
      .style("stroke-width", 0.3)
      .style("opacity", 0.8);

    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll("path").attr("d", (d: GeoJSONFeature) => pathGenerator(d));
    }, 200);

    onCleanup(() => {
      svg.remove(); // Remove the SVG element when the component unmounts
    });
  });

  return (
    <div class="flex flex-col text-white justify-center items-center w-full h-full">
      <div class="w-full" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;
