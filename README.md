<!-- In order to pitch a capstone project idea, you must have at least:
4 wireframes:
User Stories: Done
ERD:Done
tech stack: Done
third party API if applicable
 -->

# composting-mgmt-systems
Web App to Manage Composting Bins, Pickups and Quality Control

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
**1. Customer**

    - CREATE
        1. Pickup Address
        2. Bin Order

     - READ 
        1. Pickup Address
             - bins
             - Pickup Route
        2. Bin Order
        3. Bin Check
        4. Fines

     - UPDATE
        1. Pickup Address
             - status

**2. Driver**

    - READ
        1. route(s)
            -address(es)

**3. Support (Dispatch)**

    - CREATE
        1. Pickup Route
    
    - READ
        1. Customer
            - pickup address(es)
                - bins
        2. Pickup Routes
            - pickup address(es)
                - bins
            - drivers
    
     - UPDATE
         1. Customer
            - pickup address(es)
                - bins
        2. Pickup Routes
            - pickup address(es)
                - bins
            - drivers

**4. Officer**

    - CREATE
        1. Bin Check
        2. Fine
    - READ
        1. Bin
            -Bin Checks
        2. Customer
            -Bin Checks
    - UPDATE
        1. Bin Check
        2. Fine
    - DELETE
        1. Fine





            



