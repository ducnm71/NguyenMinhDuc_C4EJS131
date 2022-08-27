const bai1 = {
    id1: {
        albumTittle: 'Give it to me',
        artist: 'Son Tung MTP',
        tracks: ['track1', 'track2', 'track3' ]
    }
}

//create
function addtrack () {
    let track = [];
    for (let i = 1; i <= 3; i++) {
        track.push(prompt(`Enter new track ${i}`));
            
    }
    return track;
}
let createObject = prompt('Do you want to create new Object?');
if (createObject == 'yes'){
    let flag = true
    while(flag) {
        bai1[prompt('Enter new id')] = {
            albumTittle: prompt('Enter new albumTittle'),
            artist: prompt('Enter new artist'),
            tracks: addtrack(),          
        }
        let ques = prompt('Do you want to continue to enter?');
        if (ques == 'no') {
            flag = false;
        }
    } 
}


//read
let readObject = prompt('Do you want to read object?');
if (readObject == 'yes') {
    let ques1= Object.keys(bai1)
    let x = prompt('What id do you want to read?'); 
    for (let i in ques1) {
    
        if (ques1[i] == x) {
            let ques1_1 = prompt(`All of ${x}?`);
            if (ques1_1 == 'yes') {
                console.log(bai1[x]);
                break;
            }
            else {
                let ques1_1_1 = prompt(`What key do you want to read in ${x}?`)
                if (ques1_1_1 == 'albumTittle') {
                    console.log(bai1[x].albumTittle);
                }
                else if (ques1_1_1 == 'artist') {
                    console.log(bai1[x].artist);
                }
                else {
                    console.log(bai1[x].tracks);
                }
                break;
            }
        }

    }
}

//update
let updateObject = prompt('Do you want to update object?');
if (updateObject == 'yes') {
    let ques2= Object.keys(bai1);
    let y = prompt('What id do you want to update?'); 
    for (let i in ques2) {
    
        if (ques2[i] == y) {
            let ques2_1 = prompt(`Do you want to update the name of ${y}?`);
            if (ques2_1 == 'yes') {
                let y1 = prompt('What is the new name?');
                bai1[y1] = bai1[y];
                delete bai1[y];
                break;
            }
            else {
                let ques2_1_1 = prompt(`What key do you want to update in ${y}?`)
                if (ques2_1_1 == 'albumTittle') {
                    bai1[y].albumTittle = prompt('What is new value of albumTittle? ');
                }
                else if (ques2_1_1 == 'artist') {
                    bai1[y].artist = prompt('What is new value of artist? ');
                }
                else {
                    let ques2_2 = prompt('Update all of tracks or each factor in tracks?');
                    if ( ques2_2 == 'all of tracks') {
                        bai1[y].tracks = addtrack();
                    }
                    else {
                        let ques2_2_1 = prompt('What factor do you want to update in tracks?');
                        switch (ques2_2_1) {
                            case bai1[y].tracks[0]:
                                bai1[y].tracks.splice(0,1);
                                bai1[y].tracks.unshift(prompt('Update new track 1'));
                                break;
                            case bai1[y].tracks[1]:
                                bai1[y].tracks.splice(1,1);
                                bai1[y].tracks.push(prompt('Update new track 2')); 
                                break;
                            case bai1[y].tracks[2]: 
                                bai1[y].tracks.splice(2,1);
                                bai1[y].tracks.push(prompt('Update new track 3')); 
                                break;
                        }  
                    }
                }
                break;
            }
        }

    }
}

//delete
let deleteObject = prompt('Do you want to delete object?');
if (deleteObject == 'yes') {
    let ques3 = Object.keys(bai1);
    let z = prompt('What id do you want to delete?');
    for (let i in ques3 ) {
        if (z == ques3[i]) {
            let ques3_1 = prompt(`Do you want to delete ${z}?`);
            if (ques3_1 == 'yes') {
                delete bai1[z];
                break;
            }
            else {
                let ques3_2 = prompt(`What key do you want to delete in ${z}?`);
                if (ques3_2 == 'albumTittle') {
                    delete bai1[z].albumTittle;
                }
                else if (ques3_2 == 'artist') {
                    delete bai1[z].artist;
                }
                else {
                    let ques3_2_1 = prompt('Delete all of tracks or each factor in tracks?');
                    if (ques3_2_1 == 'all of tracks') {
                        delete bai1[z].tracks;
                    }
                    else {
                        let last_ques = prompt('What factor do you want to delete in tracks?');
                        switch (last_ques) {
                            case bai1[z].tracks[0]: bai1[z].tracks.splice(0,1); break;
                            case bai1[z].tracks[1]: bai1[z].tracks.splice(1,1); break;
                            case bai1[z].tracks[2]: bai1[z].tracks.splice(2,1); break;
                        }
                    }
                }
                break;
            }
        }
    }
}

console.log(bai1);







