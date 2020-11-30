
const fetch = require("node-fetch");

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
  
  // TODO-Call Function
  postData('/addAnimal', {animal: 'Zanete'});


// const postData2 = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }

// postData2('/add', {answer:42});