# Music Store

## Mongo Documents diagram:

Categories:
	Name:


Album:
        Thumbnail: [1,2,3...]
		category:
		Name:
        Description:
        Details:
        Price:
        discount:
        Supply:
        Year:
        Artist:
        User:
        First Name:
        Last Name:
        Email:
        Password:
        Wishlist:
        Orders:
        Billing information: [
            {
            Address:
            City:
            Zip:
            Telephone:
            }
        ]
        Payment information:[
            {
        Method:
        cardName:
        creditType:
        creditNumber:
        expirationDate:
        cardVerify:
        }
        ]


Order:
	User: 1
	Albums: [
    Album
    Quantity
    ]
    Billing information : [
        ….
    ]
    Payment method:

    Payment : [
        ….
    ]
