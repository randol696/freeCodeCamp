const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;

  // first will give output secrets
  //second stapler
  const gloveBoxContents = myStorage.car.inside["glove box"];
    console.log(myStorage.car.inside["glove box"]);

// accesing other way
    const ourPets = [
        {
          animalType: "cat",
          names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
          ]
        },
        {
          animalType: "dog",
          names: [
            "Spot",
            "Bowser",
            "Frankie"
          ]
        }
      ];
      
      ourPets[0].names[1]; //Fluffy
      ourPets[1].names[0]; //Sport

      // test
      const myPlants = [
        {
          type: "flowers",
          list: [
            "rose",
            "tulip",
            "dandelion"
          ]
        },
        {
          type: "trees",
          list: [
            "fir",
            "pine",
            "birch"
          ]
        }
      ];
      console.log(myPlants[1].list[1]);
      const secondTree = myPlants[1].list[1];
      ///
      // Setup modify 
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');