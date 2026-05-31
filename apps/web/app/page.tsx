"use client"
import { Button } from "@workspace/ui/components/button"
import {add} from "@workspace/math/add"
import { multi } from "@workspace/math/add"
import { Input } from "@workspace/ui/components/input"
import {Textarea} from "@workspace/ui/components/textarea"

import { useQuery } from "convex/react"
import {api} from "@workspace/backend/_generated/api"


export default function Page() {
const user = useQuery(api.users.getMany);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          {JSON.stringify(user)}
        </div>
      </div>
    </div>
  )
}
