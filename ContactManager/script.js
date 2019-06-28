class Contact
{
    constructor(contactName, contactAddress, contactNumber)
    {
        this.contactName = contactName;
        this.contactAddress = contactAddress;
        this.contactNumber = contactNumber;
    }
}

let addContactButton = document.getElementById("addContactButton");

function addContactToList(currentContact)
{
    let contactList = document.getElementById("contactList");

    let contactBox = document.createElement("div");
    contactBox.classList.add("contactBox");
    contactList.appendChild(contactBox);

    let contactHeading = document.createElement("div");
    contactHeading.classList.add("contactHeading");
    contactHeading.innerText="Contact";
    contactBox.appendChild(contactHeading);

    let nextLine = document.createElement("br");

    // Data Append
    let key = document.createElement("div");
    key.classList.add("key");
    key.innerText = "Name : ";
    contactBox.appendChild(key);

    let value = document.createElement("div");
    value.classList.add("value");
    value.innerText = currentContact.contactName;
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    key = document.createElement("div");
    key.classList.add("key");
    key.innerText = "Address : ";
    contactBox.appendChild(key);

    value = document.createElement("div");
    value.classList.add("value");
    value.innerText = currentContact.contactAddress;
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    key = document.createElement("div");
    key.classList.add("key");
    key.innerText = "Number : ";
    contactBox.appendChild(key);

    value = document.createElement("div");
    value.classList.add("value");
    value.innerText = currentContact.contactNumber;
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton");
    removeButton.innerText = "Remove";
    contactBox.appendChild(removeButton);

}

function createContact()
{
    let contactName = document.getElementById("contactName");
    let contactAddress = document.getElementById("contactAddress");
    let contactNumber = document.getElementById("contactNumber");
    
    contact = new Contact(contactName.value, contactAddress.value, contactNumber.value);
    console.log(contact);

    
    addContactToList(contact);
}
addContactButton.addEventListener("click", createContact);