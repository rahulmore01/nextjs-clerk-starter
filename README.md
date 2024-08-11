step 1- clone this repo.

step 2- env secrets.

step 3-(using clerk dashboard on their website) go through these steps mensioned in docs to setup a user as an admin and add him into an org so that rbac will work.
-https://clerk.com/docs/guides/basic-rbac

step 4- Check role based auth implementation -
file --> app/cms/layout (every children inside layout will come under admin protection.)

step 5- visit localhost:3000/cms/profile.
