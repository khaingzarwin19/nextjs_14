import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "lucide-react";

const BBSCard = () => {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus deserunt harum iste aperiam sunt vero officia asperiores sapiente. Suscipit, pariatur ea? Ut sequi laboriosam libero alias ipsam aliquid? Fuga.
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link href={"/bbs-posts/1"} className="text-blue-500">Read More</Link>
            </CardFooter>
        </Card>
    </div>
  )
}

export default BBSCard