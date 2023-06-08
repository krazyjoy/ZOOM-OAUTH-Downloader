const newman = require('newman'),
        fs = require('fs');

newman.run({
    collection: 'Zoom_API.postman_collection.json',
    environment: {
        "id": "ffbf9417-a8d3-45cb-bbd5-972374c8e629",
        "name": "Zoom_Env",
        "values": [
            {
                "key": "user_index",
                "value": "3",
                "type": "default",
                "enabled": true
            },
            {
                "key": "date_iterations",
                "value": "0",
                "type": "default",
                "enabled": true
            },
            {
                "key": "users_num",
                "value": "",
                "type": "any",
                "enabled": true
            },
            {
                "key": "recordings_json",
                "value": "",
                "type": "default",
                "enabled": true
            },
            {
                "key": "date_index",
                "value": "0",
                "type": "default",
                "enabled": true
            },
            {
                "key": "date_arr",
                "value": '["2022-06-30","2022-07-30","2022-08-29","2022-09-28","2022-10-28","2022-11-27","2022-12-27","2023-01-26","2023-02-25","2023-03-27","2023-04-26","2023-05-26","2023-06-07"]',
                "type": "default",
                "enabled": true
            },
            {
                "key": "emails",
                "value": '["hr_zoom@tomofun.com","pm@tomofun.com","cammy@tomofun.com","it@tomofun.com","hr@tomofun.com","ai_comp2021@tomofun.com","claire@tomofun.com","maggie@tomofun.com","phoebe@tomofun.com","eu_team@tomofun.com","zoe@tomofun.com","nobel@tomofun.com","careers.ph@tomofun.com","jp_team@tomofun.com","bonniechieh@gmail.com","support@tomofun.com","tina@tomofun.com","pai@tomofun.com","connie@tomofun.com","it_nYr2_a6UQf-KgXOgEJC_xg@tomofun.com","it_xIV7r-ZBQjKwntnAb-Xw-Q@tomofun.com","rooms_Gm-YB4KkSgmQlewn45SHGA@tomofun.com","rooms_O9M7TuCWSGCDyP3XMbAnyg@tomofun.com","rooms_OoF6Kl4dR3uflZJcsc8zsg@tomofun.com","rooms_v_f516YwS2e0mV02o-a6mg@tomofun.com","rooms_y30wKjFgT-2CK9yKl3TGTw@tomofun.com","rooms_ZU986YdwTBmCMUOSNvmgpQ@tomofun.com"]',
                "type": "any",
                "enabled": true
            }
        ],
        "_postman_variable_scope": "environment",
        "_postman_exported_at": "2023-06-07T07:40:30.653Z",
        "_postman_exported_using": "Postman/10.14.9"
    },
    iterationCount: 312
}).on('request', function (error, data) {
    if (error) {
        console.error(error);
    }
    else {
        console.log("-------------------")
        // const fileContents = fs.readFileSync('response.json')
        // // const fileObject=[]
        // // if (fileContents.length != 0){

        // //     fileObject.push(JSON.parse(fileContents));
        // //     console.log(fileObject)
        // // }
        // const fileObject = JSON.parse(fileContents)

        // console.log('read fileobject ...\n', fileObject)
        
        // console.log(data.response.stream.toString())
        // fileObject.push(data.response.stream.toString())
        fs.appendFileSync('response.json', data.response.stream.toString() + "," + "\n", function(err){
            if(err){
                console.log(err)
            }
        })

    }
});