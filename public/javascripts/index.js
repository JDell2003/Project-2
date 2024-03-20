// Example array of image URLs

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

module.exports = immageURLS;

// Sample Demo
// ,'https://i.pinimg.com/originals/11/09/9b/11099b37d35e4a5cbb91203f27bf753b.png','https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-High-Quality-Image.png','https://i.pinimg.com/originals/8d/de/4b/8dde4ba5b7507ab9a1693b8f25646385.png','https://i.pinimg.com/originals/44/76/6c/44766c5b579bc65699fb42d155a16ab8.png'