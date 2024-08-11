step 1- clone this repo.

step 2- env secrets.

step 3-(using clerk dashboard on their website) go through these steps mensioned in docs to setup a user as an admin and add him into an org so that rbac will work.

Link - https://clerk.com/docs/guides/basic-rbac.

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/b8ecd4f0-5056-47b6-93cd-67dfb87d6c20">


step 4- Check role based auth implementation -
file --> app/cms/layout (every children inside layout will come under admin protection.)

step 5- visit "localhost:3000/cms/profile" (profile is protected under layout with org:admin role).If you are admin you will see something like this -->

<img width="789" alt="image" src="https://github.com/user-attachments/assets/130ab379-90c7-4033-a3b2-f8b34258adc2">

