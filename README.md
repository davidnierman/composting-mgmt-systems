<!-- In order to pitch a capstone project idea, you must have at least:
4 wireframes:
User Stories:
ERD:
tech stack:
third party API if applicable
 -->

# composting-mgmt-systems
Web App to Manage Composting Bins, Pickups and Quality Control

## User Stories
**1. Customer**
    - Create
        1. Pickup Address
        2. Bin Order

     - Read 
        1. Pickup Address
             - bins
             - Pickup Route
        2. Bin Order
        3. Bin Check
        4. Fines

     - Update
        1. Pickup Address
             - status

**2. Driver**

    - Read
        1. route(s)
            -address(es)

**3. Support (Dispatch)**
    - Create
        1. Pickup Route
    
    - Read
        1. Customer
            - pickup address(es)
                - bins
        2. Pickup Routes
            - pickup address(es)
                - bins
            - drivers
    
     - Update
         1. Customer
            - pickup address(es)
                - bins
        2. Pickup Routes
            - pickup address(es)
                - bins
            - drivers

**4. Officer**

    - Create
        1. Bin Check
        2. Fine
    - Read
        1. Bin
            -Bin Checks
        2. Customer
            -Bin Checks
    - Update
        1. Bin Check
        2. Fine
    - Delete
        1. Fine





            



