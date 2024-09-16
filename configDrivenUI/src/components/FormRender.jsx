import React, { useState } from 'react';

const formSchema = {
  "type": "object",
  "title": "Sample Form",
  "properties": {
    "firstName": { "type": "string", "title": "First Name" },
    "lastName": { "type": "string", "title": "Last Name" },
    "email": { "type": "string", "format": "email", "title": "Email" },
    "age": { "type": "integer", "title": "Age" },
    "gender": { "type": "string", "title": "Gender", "options": ["Male", "Female", "Other"] },
    "newsletterSubscription": { "type": "boolean", "title": "Subscribe to Newsletter" },
    "preferredColor": { "type": "string", "title": "Preferred Color", "options": ["Red", "Blue", "Green"] },
    "address": {
      "type": "object",
      "title": "Address",
      "properties": {
        "street": { "type": "string", "title": "Street" },
        "city": { "type": "string", "title": "City" },
        "state": { "type": "string", "title": "State" },
        "zipCode": { "type": "string", "title": "Zip Code" }
      }
    }
  }
};

const FormGenerator = ({ schema }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const renderField = (key, config) => {
    switch (config.type) {
      case 'string':
        if (config.options) {
          return (
            <select key={key} onChange={(e) => handleChange(key, e.target.value)}>
              <option value="">Select {config.title}</option>
              {config.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          );
        } else {
          return (
            <div key={key}>
              <label>{config.title}</label>
              <input
                type="text"
                value={formData[key] || ''}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          );
        }

      case 'integer':
        return (
          <div key={key}>
            <label>{config.title}</label>
            <input
              type="number"
              value={formData[key] || ''}
              onChange={(e) => handleChange(key, parseInt(e.target.value))}
            />
          </div>
        );

      case 'boolean':
        return (
          <div key={key}>
            <label>{config.title}</label>
            <input
              type="checkbox"
              checked={formData[key] || false}
              onChange={(e) => handleChange(key, e.target.checked)}
            />
          </div>
        );

      case 'object':
        return (
          <fieldset key={key}>
            <legend>{config.title}</legend>
            {Object.keys(config.properties).map((subKey) => (
              renderField(`${key}.${subKey}`, config.properties[subKey])
            ))}
          </fieldset>
        );

      default:
        return null;
    }
  };

  return (
    <form  onSubmit={(event) => event.preventDefault()}>
      {Object.keys(schema.properties).map((key) => (
        renderField(key, schema.properties[key])
      ))}
      <button type="submit" onClick={(e)=> console.log(formData)}>Submit</button>
    </form>
  );
};

const App = () => (
  <div>
    <h1>{formSchema.title}</h1>
    <FormGenerator schema={formSchema} />
  </div>
);

export default App;
