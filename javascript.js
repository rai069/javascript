/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_id,_color,_age) {
    const nft = {
        "id": _id,
        "color": _color,
        "age":_age
    }

    nfts.push(nft);
    console.log(" NFT minted:"+_id);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<nfts.length; i++){
        console.log("\n")
        console.log(nfts[i])
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs:" + nfts.length)
}

// call your functions below this line
mintNFT("0x1", "black", "17");
mintNFT("0x2", "blue", "18");
mintNFT("0x3", "orange", "21");
mintNFT("0x4", "white", "16");
listNFTs();
getTotalSupply();
