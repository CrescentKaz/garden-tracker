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
        name: "Chamomile",
        scientificName: "GENUS SPECIES",
        SOT: "Feb-May and Sept-Oct",
        EOT: 80,
        daysToGerm: "7-14 days",
        plantingDepth: "Do not cover",
        spacing: "6in",
        height: "20-30in"
    },
    {
        name: "Sweet Marjoram",
        scientificName: "GENUS SPECIES",
        SOT: "Jan-Feb",
        EOT: 60,
        daysToGerm: "8-10 days",
        plantingDepth: "1/4in",
        spacing: "6in",
        height: "18in"
    },
    {
        name: "Munstead Lavender",
        scientificName: "GENUS SPECIES",
        SOT: "Feb-May",
        EOT: 85,
        daysToGerm: "10-28 days",
        plantingDepth: "1/4 n",
        spacing: "12in",
        height: "18-24in"
    },
    {
        name: "Sweet Corn (Stowell's Evergreen)",
        scientificName: "GENUS SPECIES",
        SOT: "Mar-Aug",
        EOT: 90,
        daysToGerm: "7-10 days",
        plantingDepth: "1/2in",
        spacing: "20in x 3ft",
        height: ""
    },
    {
        name: "Alaska Peas",
        scientificName: "GENUS SPECIES",
        SOT: "Jan-Mar and Sept",
        EOT: 58,
        daysToGerm: "8-12 days",
        plantingDepth: "1.5in",
        spacing: "2in x 2.5ft",
        height: "2.5ft"
    },
    {
        name: "Pumpkin (Early Sugar or Pie)",
        scientificName: "GENUS SPECIES",
        SOT: "Mar-Jun",
        EOT: 90,
        daysToGerm: "8-10 days",
        plantingDepth: "1in",
        spacing: "8ft x 8ft",
        height: ""
    },
    {
        name: "Peppermint",
        scientificName: "GENUS SPECIES",
        SOT: "Feb-May",
        EOT: 60,
        daysToGerm: "12-16 days",
        plantingDepth: "1/8in - 1/4in",
        spacing: "12in",
        height: "18in"
    },
    {
        name: "Sunflower (Evening Sun)",
        scientificName: "GENUS SPECIES",
        SOT: "Mar-Jul",
        EOT: 85,
        daysToGerm: "7-14 days",
        plantingDepth: "1in",
        spacing: "18-24in",
        height: "6ft"
    },
    {
        name: "Parsley (Moss Curled)",
        scientificName: "GENUS SPECIES",
        SOT: "Jan-Apr and Aug-Oct",
        EOT: 75,
        daysToGerm: "21-28 days",
        plantingDepth: "1/4in",
        spacing: "10in",
        height: "12-16in"
    },
    {
        name: "Oregano",
        scientificName: "Origanum vulgare",
        SOT: "Feb-May and Aug-Sept",
        EOT: 85,
        daysToGerm: "8-14 days",
        plantingDepth: "1/8in",
        spacing: "12in",
        height: "14-22in"
    },
];
