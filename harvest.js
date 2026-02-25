//this file holds the data for calculating harvest times 

// this is pulled from another file. edit with caution.
var planted = window.gardenData;

/*
i need a table with estimated EOT times for each item i can plant.
this requires noting all the seeds in my possesion (genus and species) 
this will also require applying math to dates and a way to read the dates from the planted.planted field...
will need a way to handle unexpected data, ex: "unknown date" and different possible date formats
can i use a standard european date system? YYYYMMDD?
when the item is theoretically harvestable, need to change the color of the location to var(--colorHarvestReady)
*/

const harvestTable = [
    {
        name: "Broccoli",
        scientificName: "GENUS SPECIES",
        EOT: 60 /* need check accuracy */
    }
];

/* this function needs double checking before live testing
function calcHarvest() {
    if (testing) {
        console.log("calculating harvest dates");
    };
    let len = planted.length;
    let text = "";
    for (let i = 0; i < len; i++) {
        if (planted[i].removed !== "") {
            continue;
        } else {
            function fds {
                const harvestDate = new Date(planted[i].planted);
                let item = planted[i].item;
                let EOT = "";
                for (let o = 0; o < harvestTable.length; o++) {
                    if (item = harvestTable[o].name) {
                        EOT = harvestTable[o].EOT;
                    } else {};
                };
                harvestDate.setDate(harvestDate.getDate() + EOT);
            };
            text += "--> " + planted[i].item + " has an estimated harvest date of " + harvestDate + ". \n \n";
        };
    };
    gardenNotes.innerText = text;
}
*/