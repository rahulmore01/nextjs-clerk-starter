import { Roles } from "@/types/globals"
import { auth } from "@clerk/nextjs/server"

//  a reusable function to check roles
//-- This checkRole() helper will accept a role using the Roles type and will return TRUE if the user has that role, or FALSE if the user does not.
export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth()

  return sessionClaims?.metadata.role === role;
}
