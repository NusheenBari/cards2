export interface ITenant{
    "id":number,
    "companyName": string,
    "headerColor": string,
    "footerColor": string,
    "h1Font": string,
    "h2Font": string,
    "h3Font": string,
    "iconColor": string,
    "bandColor": string,
    "bgColor": string,
    "companyLogo": string,
    "phoneNumber": string,
    "contactPerson": string,
    "otherLinks": null,
    "otherLinksContentType": null,
    "plan": string,
    "planCost": string,
    "renewalDate": string,
    "createdAt": string,
    "updatedAt": string
}

export interface IUser{
    "id": number
    "username": string,
    "email": string,
    "password": string,
    "profilePicture": string,
    "socialLinks": null,
    "socialLinksContentType": null,
    "createdAt": string,
    "updatedAt": string,
    "tenant": {    
        "id":number,
        "companyName": string,
        "headerColor": string,
        "footerColor": string,
        "h1Font": string,
        "h2Font": string,
        "h3Font": string,
        "iconColor": string,
        "bandColor": string,
        "bgColor": string,
        "companyLogo": File,
        "phoneNumber": string,
        "contactPerson": string,
        "otherLinks": null,
        "otherLinksContentType": null,
        "plan": string,
        "planCost": string,
        "renewalDate": string,
        "createdAt": string,
        "updatedAt": string
    },
    "langKey": string,
    "activationKey": string,
    "authorities": [
        {
            "name": string
        }
    ]

}

export interface IContact{
    "id": string,
    "name": string,
    "email": string,
    "phone": string,
    "address": string,
    "user": {
        "id": string
}
}

export interface ICard{
    "customMessage": string,
    "customImage": string,
    "sentAt": string,
    "createdAt": string,
    "updatedAt": string,
    "recipient": {
        "id": string
    },
     "user": {
        "id": string
    }
}   
   