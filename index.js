const os = require('os')
const path = require('path');
const fs = require('fs');

let home_dir = os.homedir();
let mod_path = path.join(home_dir, 'Documents', 'Paradox Interactive', 'Crusader Kings II', 'mod');
let mod_content = 'name = "Pentaghast"\npath = "mod/pentaghast"';

fs.writeFile(mod_path + '/' + 'pentaghast.mod', mod_content, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
