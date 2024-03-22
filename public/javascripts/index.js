

let PreLoadedImg = ['https://pngimg.com/uploads/suit/suit_PNG93253.png'];

let immageURLS = PreLoadedImg


function createOutfitElement(immageURLS) {
    for (let i = 0; i < immageURLS.length; i++) {
        let imageURL = immageURLS[i];

        let div1 = document.createElement('div');
        div1.className = "outfitsBorder";

        let div2 = document.createElement('div');
        div2.id = "outfit" + i; // Using the index i to create a unique id
        div2.className = "Outfits";

        let img = document.createElement('img');
        img.src = imageURL;

        let hr = document.createElement('hr');

        let p = document.createElement('p');
        p.className = "descriptions";
        p.textContent = "Description: Outfit " + [i] // Using the imageURL as a description for demonstration purposes

        div2.appendChild(img);
        div2.appendChild(hr);
        div2.appendChild(p);

        div1.appendChild(div2);
        outfitsContainer.appendChild(div1); // Appending to the body, you can change this to append to a different container
    }
}

createOutfitElement(immageURLS);

module.exports = {
    createOutfitElement,
    
  };