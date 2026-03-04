//this file holds the data for calculating harvest times 

/*
i need a table with estimated EOT times for each item i can plant.
this requires noting all the seeds in my possesion (genus and species) 
this will also require applying math to dates and a way to read the dates from the planted.planted field...
will need a way to handle unexpected data, ex: "unknown date" and different possible date formats
can i use a standard european date system? YYYYMMDD?
when the item is theoretically harvestable, need to change the color of the location to var(--colorHarvestReady)
*/

window.harvestTable = [
    {
        name: "Broccoli",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
    {
        name: "Corn",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
    {
        name: "Parsley",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
    {
        name: "Strawberries",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
    {
        name: "Peas",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
    {
        name: "Chocolate Mint",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    },
];
