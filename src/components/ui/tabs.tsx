"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // True black border with 4px thickness and rounded corners
        "border-[4px] border-black rounded-lg inline-flex h-9 w-fit items-center justify-center p-[3px] bg-[#121212] shadow-lg",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
        inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 
        rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap 
        transition-colors duration-200 ease-in-out focus-visible:ring-[3px] focus-visible:outline-1 
        disabled:pointer-events-none disabled:opacity-50

        /* Active tab styles */
        data-[state=active]:text-black font-semibold
        data-[state=active]:bg-white
        data-[state=active]:shadow-sm
        data-[state=active]:border-gray-300

        /* Inactive tab styles */
        text-gray-400
        hover:text-gray-200
        bg-[#121212]
        `,
        className
      )}
      {...props}
    />
  )
}


function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
