class Contact
{
    constructor(contactName, contactAddress, contactNumber, contactImage)
    {
        this.contactName = contactName;
        this.contactAddress = contactAddress;
        this.contactNumber = contactNumber;
        this.contactImage = contactImage;
    }
}

let addContactButton = document.getElementById("addContactButton");

function removeContact(event)
{
    let contactBox = event.target.parentElement;
    contactBox.remove();
}

function editContact(event)
{
    let contactBox = event.target.parentElement.querySelectorAll(".value");
    for (let i=0 ; i < contactBox.length ; i++)
    {
        let condition = contactBox[i].getAttribute("contenteditable");
        if (condition == "false")
        {  contactBox[i].setAttribute("contenteditable", "true")}
        else if (condition == "true")
        { contactBox[i].setAttribute("contenteditable", "false")}
    }

        
}

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
    value.setAttribute("contenteditable", "false");
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    key = document.createElement("div");
    key.classList.add("key");
    key.innerText = "Address : ";
    contactBox.appendChild(key);

    value = document.createElement("div");
    value.classList.add("value");
    value.innerText = currentContact.contactAddress;
    value.setAttribute("contenteditable", "false");
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    key = document.createElement("div");
    key.classList.add("key");
    key.innerText = "Phone Number : ";
    contactBox.appendChild(key);

    value = document.createElement("div");
    value.classList.add("value");
    value.innerText = currentContact.contactNumber;
    value.setAttribute("contenteditable", "false");
    contactBox.appendChild(value);
    contactBox.appendChild(document.createElement("br"));

    let contactImage = document.createElement("div");
    contactImage.classList.add("contactImage");
    contactImageTag = document.createElement("img");
    contactImageTag.setAttribute("src", currentContact.contactImage);
    contactImage.appendChild(contactImageTag);
    contactBox.appendChild(contactImage);
    contactBox.appendChild(document.createElement("br"));

    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton");
    removeButton.innerText = "Remove";
    contactBox.appendChild(removeButton);

    let editButton = document.createElement("button");
    editButton.setAttribute("id", "editButton");
    editButton.innerText = "Edit";
    contactBox.appendChild(editButton);

    removeButton.addEventListener("click", removeContact);
    editButton.addEventListener("click", editContact);


}

function createContact()
{
    let contactName = document.getElementById("contactName");
    let contactAddress = document.getElementById("contactAddress");
    let contactNumber = document.getElementById("contactNumber");
    let contactImage = document.getElementById("contactImage");
    let path = contactImage.value.split("\\");
    let fileName = "Images/" + path[path.length - 1];

    contact = new Contact(contactName.value, contactAddress.value, contactNumber.value, fileName);
    contactName.value = "";
    contactAddress.value = "";
    contactNumber.value = "";
    contactImage.value = "";
    
    addContactToList(contact);
}

addContactButton.addEventListener("click", createContact);