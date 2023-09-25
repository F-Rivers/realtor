// Create main content
const main = document.createElement("main");
const propertyListSection = document.createElement("section");
propertyListSection.id = "property-list";
const h2 = document.createElement("h2");
h2.textContent = "Featured Properties";

// Create property listings
const property1 = createPropertyListing("Property 1", "3 Bed, 2 Bath | $300,000", "property1.jpg");
propertyListSection.appendChild(property1);


// Append everything to the body
main.appendChild(propertyListSection);
document.body.appendChild(main);

// Function to create a property listing
function createPropertyListing(name, details, imageSrc) {
  const propertyDiv = document.createElement("div");
  propertyDiv.classList.add("property");
  
  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = name;
  
  const h3 = document.createElement("h3");
  h3.textContent = name;
  
  const p = document.createElement("p");
  p.textContent = details;
  
  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.textContent = "Contact Agent";
  
  // Add click event to the button
  contactButton.addEventListener("click", () => {
    alert("Contact the agent for more information.");
  });
  
  propertyDiv.appendChild(image);
  propertyDiv.appendChild(h3);
  propertyDiv.appendChild(p);
  propertyDiv.appendChild(contactButton);
  
  return propertyDiv;
}

export default createPropertyListing;