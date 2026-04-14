const brandDiv = document.querySelector("#brand-names")

const brands = [
    {
        brandName: "Ravensburger",
        location: "Ravensburg, Germany",
        affordability: {cost: 3, money: "$$$"},
        quality: "9.5",
        description: "Ravensburger is widely regarded as the gold standard in jigsaw puzzles due to its exceptional craftsmanship and precision engineering. The brand’s signature “Softclick” technology ensures a tight, satisfying fit between pieces, paired with thick, durable materials and a glare-free linen finish for optimal image clarity. Its extensive catalog spans everything from fine art to pop culture, appealing to a broad range of puzzlers. This consistent quality and attention to detail have made it one of the most trusted and recognizable puzzle brands worldwide.",
        tldr: "precision + premium feel",
        imgSource: "images/ravensburger-logo.png"
    },
    {
        brandName: "Ceaco",
        location: "Massachusetts, USA",
        affordability:  {cost: 1, money: "$"},
        quality: "6.5",
        description: "Ceaco stands out for its strong emphasis on licensed artwork and collaborations with well-known artists such as Thomas Kinkade, offering puzzles that feel more like collectible art pieces. The brand is particularly popular for its affordability and wide range of themes, from nostalgic scenes to pop culture favorites. While its piece fit may be less premium, the visual appeal and accessibility make it a favorite among casual puzzlers and art enthusiasts alike. Its ability to bring recognizable artwork into puzzle form is a key driver of its popularity.",
        tldr: "artwork + accessibility",
        imgSource: "images/ceaco-logo.png"
    },
    {
        brandName: "Buffalo Games",
        location: "New York, USA",
        affordability: {cost: 2, money: "$$"},
        quality: "8",
        description: "Buffalo Games has built a strong reputation for delivering high-quality puzzles at an accessible price point, making it a staple in many households. Its puzzles feature thick, durable pieces and “Perfect Snap” technology, which provides a secure and satisfying fit during assembly. The brand is also known for including full-size reference posters and offering a lost-piece replacement service, enhancing the overall user experience. Combined with a wide variety of engaging and often exclusive artwork, these features contribute to its widespread popularity.",
        tldr: "value + user-friendly experience",
        imgSource: "images/buffalo-games-logo.png"
    },
    {
        brandName: "Schmidt Puzzles",
        location: "Berlin, Germany",
        affordability: {cost: 2.5, money: "$$-$$$"},
        quality: "8.5",
        description: "Schmidt Puzzles is recognized for its high-quality materials and durable construction, often featuring a protective lacquer finish that helps prevent wear and fading over time. The brand offers a diverse selection of themes, including fantasy, landscapes, and licensed artwork, with puzzles ranging from beginner to highly advanced levels. Its pieces are known for maintaining their shape and fit well without deforming, contributing to a reliable puzzling experience. This balance of durability, variety, and European craftsmanship has made Schmidt a respected name among dedicated puzzlers.",
        tldr: "durability + craftsmanship",
        imgSource: "images/schmidt-logo.jpg"
    }
];

function displayBrands(brandList) {
    brandList.forEach((brand) => {
        // brandDiv.innerHTML = '';
        // Individual container
        const newDiv = document.createElement('div');
        newDiv.classList.add('brand');
        brandDiv.append(newDiv);
        // Brand image
        const brandImage = document.createElement('img');
        brandImage.src = brand.imgSource;
        brandImage.alt = brand.brandName;
        brandImage.loading ='lazy';
        newDiv.append(brandImage);
        // Heading
        const brandHeading = document.createElement('h3');
        brandHeading.textContent = `${brand.brandName}`;
        newDiv.append(brandHeading);
        // Extra Information
        const extraInfo = document.createElement('p');
        extraInfo.innerHTML = `<strong>HQ Location</strong>: ${brand.location}<br><strong>Affordability</strong>: ${brand.affordability.money}<br><strong>Quality</strong>: ${brand.quality}/10`;
        newDiv.append(extraInfo);
        // Long Descrition
        const brandDescription = document.createElement('p');
        brandDescription.textContent = `${brand.description}`;
        brandDescription.id = 'description';
        newDiv.append(brandDescription);
        // Too Long; Don't Read
        const brandTldr = document.createElement('p');
        brandTldr.innerHTML = `<strong><i>TL;DR</i></strong>: ${brand.tldr}`;
        newDiv.append(brandTldr);
    })
}

displayBrands(brands);