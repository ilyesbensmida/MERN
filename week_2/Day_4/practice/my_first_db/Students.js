const students = [
    {
      name: "John Doe",
      home_state: "California", // San Jose Dojo
      lucky_number: 2,
      birthday: {
        month: 10,
        day: 25,
        year: 1990,
      },
    },
    {
      name: "Jane Smith",
      home_state: "Washington", // Seattle Dojo
      lucky_number: 4,
      birthday: {
        month: 5,
        day: 12,
        year: 1995,
      },
    },
    // Add 3 more student documents with similar structure
  ];
  
  await database.collection("students").insertMany(students);
  