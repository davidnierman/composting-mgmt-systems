<!-- In order to pitch a capstone project idea, you must have at least:
4 wireframes: Done
User Stories: Done
ERD:Done
tech stack: Donethird party API if applicable
 -->

# composting-mgmt-systems
Web App to Manage Composting Bins, Pickups and Ticketing

&nbsp;

## Tech Stack
---
**Front-end**
 - Express
 - React
 - Node
 - Bootsrap

**Back-end**
 - Django

&nbsp;

## User Stories
---

 - There will be 4 types of users with different permisions/views when accessing the app. All of the users will be able to sign in / sign-out.
 - A new member to the site will have access to create a new customer user.
    - All other user types will be created by Support Admin.


**1. Customer**

    - CREATE
        1. Pickup Address
        2. Bin Order

     - READ 
        1. Pickup Address
             - bins(s)
             - Pickup Route(s)
        2. Bin Order(s)
        3. Bin Check(s)
        4. Fines(s)

     - UPDATE
        1. Pickup Address
             - status

**2. Driver**

    - READ
        1. route(s)
            -address(es)

**4. Officer**

    - CREATE
        1. Bin Check
        2. Fine
    - READ
        1. Bin
            -Bin Check(s)
        2. Customer
            -Bin Checks(s)
            -Fine(s)
    - UPDATE
        1. Bin Check
        2. Fine
    - DELETE
        1. Fine

**4. Support **

    - CREATE
        1. Create bin
        2. Pickup Route
        3. User (driver)
        4. User (Officer)
        5. User (Support Admin)
    
    - READ
        1. Customer(s)
            - pickup address(es)
                - bin(s)
        2. Pickup Routes
            - pickup address(es)
                - bin(s)
            - drivers
    
     - UPDATE
         1. Customer
            - pickup address
                - bin
        2. Pickup Routes
            - pickup address
                - bin
            - drivers



## Wireframes
---
- [Customer](https://github.com/dnierman0920/composting-mgmt-systems/tree/main/planning/Wireframes/Customer)
     - [Nav](https://github.com/dnierman0920/composting-mgmt-systems/blob/main/planning/Wireframes/Customer/Navigation.jpg)
- [Driver](https://github.com/dnierman0920/composting-mgmt-systems/tree/main/planning/Wireframes/Driver)
     - [Nav](https://github.com/dnierman0920/composting-mgmt-systems/blob/main/planning/Wireframes/Driver/Navigation.jpg)
- [Officer](https://github.com/dnierman0920/composting-mgmt-systems/tree/main/planning/Wireframes/Officer)
     - [Nav](https://github.com/dnierman0920/composting-mgmt-systems/blob/main/planning/Wireframes/Officer/Navigation.jpg)
- [Support](https://github.com/dnierman0920/composting-mgmt-systems/tree/main/planning/Wireframes/Support)
     - [Nav](https://github.com/dnierman0920/composting-mgmt-systems/blob/main/planning/Wireframes/Support/Navigation.jpg)


            
### MVP
---

Complete User Stories Listed above for Customer and Admin

### Stretch Goals

Complete User Stories Listed above for Driver and Officer


