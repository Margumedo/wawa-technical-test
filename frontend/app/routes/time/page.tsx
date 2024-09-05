

// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
// import { useForm } from "react-hook-form"
// import { z } from "zod"

// import { cn } from "@/lib/utils"
// import { toast } from "@/hooks/use-toast"

// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"


// import { TimePicker12Demo } from "../../../components/time-picker/time-picker-12h-demo";
// interface TimePickerDemoProps {
//   date: Date | undefined;
//   setDate: (date: Date | undefined) => void;
// }


// const FormSchema = z.object({
//   dob: z.date({
//     required_error: "A date of birth is required.",
//   }),
// })

// function DatePickerForm() {
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }



//   return (
//     <>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="dob"
//             render={({ field }: any) => (
//               <FormItem className="flex flex-col">
//                 <FormLabel>Date of birth</FormLabel>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <FormControl>
//                       <Button
//                         variant={"outline"}
//                         className={cn(
//                           "w-[240px] pl-3 text-left font-normal",
//                           !field.value && "text-muted-foreground"
//                         )}
//                       >
//                         {field.value ? (
//                           format(field.value, "PPp")
//                         ) : (
//                           <span>Pick a date</span>
//                         )}
//                         <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                       </Button>
//                     </FormControl>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={field.value}
//                       onSelect={field.onChange}
//                       disabled={(date) =>
//                         date < new Date()
//                       }
//                       initialFocus
//                     />

//                     <div className="p-3 border-t border-border flex justify-center items-start gap-2">
//                       <TimePicker12Demo
//                         setDate={field.onChange}
//                         date={field.value}
//                       />
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//                 <FormDescription>
//                   Your date of birth is used to calculate your age.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>


//     </>
//   )
// }

// export default DatePickerForm

"use client"
import React, { useEffect, useRef } from 'react';
import useLoadScript from './useLoadScript'; // Importa el hook

const RouteForm = () => {
  const originRef = useRef<HTMLInputElement | null>(null);
  const destinationRef = useRef<HTMLInputElement | null>(null);

  const isLoaded = useLoadScript(
    `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`
  );

  useEffect(() => {
    if (isLoaded && window.google) {
      if (originRef.current) {
        const originAutocomplete = new window.google.maps.places.Autocomplete(
          originRef.current,
          { types: ['geocode'] }
        );

        originAutocomplete.addListener('place_changed', () => {
          const place = originAutocomplete.getPlace();
          console.log('Origen:', place);
        });
      }

      if (destinationRef.current) {
        const destinationAutocomplete = new window.google.maps.places.Autocomplete(
          destinationRef.current,
          { types: ['geocode'] }
        );

        destinationAutocomplete.addListener('place_changed', () => {
          const place = destinationAutocomplete.getPlace();
          console.log('Destino:', place);
        });
      }
    }
  }, [isLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Tu lógica de manejo de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Origen"
        ref={originRef}
      />
      <input
        type="text"
        placeholder="Destino"
        ref={destinationRef}
      />
      <button type="submit">Guardar Ruta</button>
    </form>


  );
};

export default RouteForm;
