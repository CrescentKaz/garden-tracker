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
        nickname: "Chamomile",
        SOT: "Feb-May and Sept-Oct",
        harvestReady: 80,
        overripe: 2,
        daysToGerm: "7-14 days",
        plantingDepth: "Do not cover",
        spacing: "6in",
        height: "20-30in"
    },
    {
        name: "Sweet Marjoram",
        scientificName: "GENUS SPECIES",
        nickname: "Marjoram",
        SOT: "Jan-Feb",
        harvestReady: 60,
        overripe: 2,
        daysToGerm: "8-10 days",
        plantingDepth: "1/4in",
        spacing: "6in",
        height: "18in"
    },
    {
        name: "Munstead Lavender",
        scientificName: "GENUS SPECIES",
        nickname: "Lavender",
        SOT: "Feb-May",
        harvestReady: 85,
        overripe: 2,
        daysToGerm: "10-28 days",
        plantingDepth: "1/4 n",
        spacing: "12in",
        height: "18-24in"
    },
    {
        name: "Sweet Corn (Stowell's Evergreen)",
        scientificName: "GENUS SPECIES",
        nickname: "Corn",
        SOT: "Mar-Aug",
        harvestReady: 90,
        overripe: 2,
        daysToGerm: "7-10 days",
        plantingDepth: "1/2in",
        spacing: "20in x 3ft",
        height: ""
    },
    {
        name: "Alaska Peas",
        scientificName: "GENUS SPECIES",
        nickname: "Peas",
        SOT: "Jan-Mar and Sept",
        harvestReady: 58,
        overripe: 2,
        daysToGerm: "8-12 days",
        plantingDepth: "1.5in",
        spacing: "2in x 2.5ft",
        height: "2.5ft"
    },
    {
        name: "Pumpkin (Early Sugar or Pie)",
        scientificName: "GENUS SPECIES",
        nickname: "Pumpkin",
        SOT: "Mar-Jun",
        harvestReady: 90,
        overripe: 2,
        daysToGerm: "8-10 days",
        plantingDepth: "1in",
        spacing: "8ft x 8ft",
        height: ""
    },
    {
        name: "Peppermint",
        scientificName: "GENUS SPECIES",
        nickname: "Peppermint",
        SOT: "Feb-May",
        harvestReady: 60,
        overripe: 2,
        daysToGerm: "12-16 days",
        plantingDepth: "1/8in - 1/4in",
        spacing: "12in",
        height: "18in"
    },
    {
        name: "Sunflower (Evening Sun)",
        scientificName: "GENUS SPECIES",
        nickname: "Sunflower",
        SOT: "Mar-Jul",
        harvestReady: 85,
        overripe: 2,
        daysToGerm: "7-14 days",
        plantingDepth: "1in",
        spacing: "18-24in",
        height: "6ft"
    },
    {
        name: "Parsley (Moss Curled)",
        scientificName: "GENUS SPECIES",
        nickname: "Parsley",
        SOT: "Jan-Apr and Aug-Oct",
        harvestReady: 75,
        overripe: 2,
        daysToGerm: "21-28 days",
        plantingDepth: "1/4in",
        spacing: "10in",
        height: "12-16in"
    },
    {
        name: "Oregano",
        scientificName: "Origanum vulgare",
        nickname: "Oregano",
        SOT: "Feb-May and Aug-Sept",
        harvestReady: 85,
        overripe: 2,
        daysToGerm: "8-14 days",
        plantingDepth: "1/8in",
        spacing: "12in",
        height: "14-22in"
    },
    {
        name: "Sweet Basil",
        scientificName: "",
        nickname: "Basil",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
    {
        name: "Strawberries",
        scientificName: "",
        nickname: "Strawberries",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
    {
        name: "Chocolate Mint",
        scientificName: "",
        nickname: "Chocolate Mint",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
    {
        name: "Lettuce",
        scientificName: "",
        nickname: "Lettuce",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
    {
        name: "Carrot",
        scientificName: "",
        nickname: "Carrots",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
    {
        name: "Marigold",
        scientificName: "",
        nickname: "Marigold",
        SOT: "",
        harvestReady: 0,
        overripe: 0,
        daysToGerm: "",
        plantingDepth: "",
        spacing: "",
        height: ""
    },
];
