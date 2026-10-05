import {test, expect} from'@playwright/test'
import Ajv from 'ajv/dist/core';

test("Schema validation",async({request})=>
{
    // step 1 - Send request and get the response

    const response = await request.get('https://mocktarget.apigee.net/json');

    // get response body
    const responsebody=await response.json();
    // print response body
    console.log(responsebody);



    // step 2 - Define the schema

    const schema=
    {
        "type":"object",
        "properties":{
            "firstname":{
                "type":"string"
            },
            "lastname":{
                "type":"string"
            },
            "city":{
                "type":"string"
            },
            "state":{
                "type":"string"
            }
        },
        "required":[
            "firstName",
            "lastName",
            "city",
            "state"
        ]
    }

    // step 3 - Check response against schema

    const ajv=new Ajv();
    const validate=ajv.compile(schema);        // compile returns a validator function  // validate is variable
    const isvalid=validate(responsebody);         // retruns true OR false
    expect(isvalid).toBeTruthy();

})