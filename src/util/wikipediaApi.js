export async function fetchCountryDesc(country) {
    return await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${country}&explaintext=1&exsectionformat=plain&format=json&origin=*`)
        .then(val => {
            return val.json();
        })
        .then(val => {
            let pageKeys = Object.keys(val.query.pages);
            if (pageKeys[0] === '-1') throw new Error("Country wasn't found");
            else {
                if (!val.query.pages[pageKeys[0]].extract)
                    return 'Wikipedia did not provide information summary about this country :(';
                else return val.query.pages[pageKeys[0]].extract;
            }
        })
}

export async function fetchCountryImage(country) {
    return await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${country}&prop=pageimages&format=json&pithumbsize=1000&origin=*`)
        .then(val => {
            return val.json();
        })
        .then(val => {
            let pageKeys = Object.keys(val.query.pages);
            if (pageKeys[0] === '-1') throw new Error("Country wasn't found");
            else return val.query.pages[pageKeys[0]].thumbnail.source
        });
}