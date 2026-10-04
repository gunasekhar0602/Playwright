import {test, expect} from'@playwright/test'

test("Schema validation",async({request})=>
{
    // step 1 - Send request and get the response

    const response = await request.get('https://mocktarget.apigee.net/json');
    const responsebody=await response.json();
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
    const validate=ajv.complie(schema)        // compile returns a validator fumction  // validate is variable
    const isvalid=validate(responsebody)         // retruns true OR false

    expect(isvalid).toBeTruthy()

})