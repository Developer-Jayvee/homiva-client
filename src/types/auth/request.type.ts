import { z } from "zod";


export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8,"Minimum of 8 characters")
})


export const registerSchema = z.object({
    first_name: z.string().min(1, "First name is required").max(255),
    last_name: z.string().min(1, "Last name is required").max(255),
    address: z.string().min(1, "Address is required"),
    contact_no: z.string().min(1, "Contact number is required"),
    email: z.email(),
    
    organization : z.object({
        name: z.string().min(1, "Organization name is required").max(255),
        address: z.string().min(1, "Address is required"),
        contact_no: z.string().min(1, "Contact number is required"),
    })  
})

export const otpSchema = z.object({
    otp: z.string().max(6,"Maximum of 6 numbers is required.")
})

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type OtpFormDAta = z.infer<typeof otpSchema>;
