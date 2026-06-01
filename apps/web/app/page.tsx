"use client"
import { Button } from "@workspace/ui/components/button"
import {add} from "@workspace/math/add"
import { multi } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"
import {Textarea} from "@workspace/ui/components/textarea"
import { Authenticated , Unauthenticated } from "convex/react"
import { SignInButton ,UserButton } from '@clerk/nextjs'

import { useQuery } from "convex/react"
import {api} from "@workspace/backend/_generated/api"


export default function Page() {
const user = useQuery(api.users.getMany);

  return (
    <>
      <Authenticated>
        <div className="flex min-h-svh p-6">
          <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
            <div>
             <UserButton></UserButton>
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>must be sing in</p>
        <SignInButton> Sing in </SignInButton>
      </Unauthenticated>
    </>
  )
}
