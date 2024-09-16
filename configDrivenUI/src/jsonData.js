const dynamicData = {
  "type": "object",
  "title": "Sample Form",
  "properties": {
        "firstName": {
        "type": "string",
        "title": "First Name"
     },
     "lastName": {
        "type": "string",
        "title": "Last Name"
     },
     "email": {
        "type": "string",
        "format": "email",
        "title": "Email"
     },
     "age": {
        "type": "integer",
        "title": "Age"
     },
    "gender": {
        "type": "string",
        "title": "Gender",
        "options": ["Male", "Female", "Other"] //radio
     },
     "newsletterSubscription": {
        "type": "boolean",
        "title": "Subscribe to Newsletter" //checkbox
     },
     "preferredColor": {
        "type": "string",
        "title": "Preferred Color",
        "options": ["Red", "Blue", "Green", "Red"] //dropdown
     },
"address": {
        "type": "object",
        "title": "Address",
        "properties": {
           "street": {
              "type": "string",
              "title": "Street"
           },
           "city": {
              "type": "string",
              "title": "City"
           },
           "state": {
              "type": "string",
              "title": "State"
           },
           "zipCode": {
              "type": "string",
              "title": "Zip Code"
           }
        }
}
  }
}

export default dynamicData;
