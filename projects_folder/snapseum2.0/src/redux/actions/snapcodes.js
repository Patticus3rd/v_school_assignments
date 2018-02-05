//add snapcode
export function addSnap(codeName, codeSource, codeArtist, favorites){
    return {
        type: 'ADD_SNAP',
        codeName,
        codeSource,
        codeArtist,
        favorites
    }
}

//remove snapcode
export function removeSnap(index){
    return {
        type: 'REMOVE_SNAP',
        index,
    }
}

//edit snapcode

