export const jsondata = 
[
    {
      "name": "firstName",
      "label": "First name:",
      "value": "",
      "type": "text",
      "validators": ["required"]
      
    },
    {
      "name": "lastName",
      "label": "Last name:",
      "value": "",
      "type": "text",
      "validators": []
    },
    {
      "name": "dob",
      "label": "Date Of Birth",
      "value": "",
      "type": "date",
      "validators": ["required"]
    },
    {
      "name": "email",
      "label": "Email ID",
      "value": "",
      "type": "email",
      "validators": ["email"]
    },
    {
      "name": "h_add",
      "label": "Home Address",
      "value": "",
      "type": "text",
      "validators": ["required"]
    },
    {
      "name": "o_add",
      "label": "Office Address",
      "value": "",
      "type": "text",
      "validators": []
    },
    {
      "name": "check_add",
      "label": " Select if both the addresses are same",
      "value": false,
      "type": "checkbox",
      "validators": []
    },
    {
      "name": "skills",
      "label": "Skills",
      "value": "",
      "type": "array",
      "validators": []
    },
    {
      "name": "courses",
      "label": "Courses Taken",
      "value": "",
      "type": "array",
      "validators": []
    }

];
