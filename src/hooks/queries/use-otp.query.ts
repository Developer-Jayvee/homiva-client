import { authOtpService } from "@/src/services/auth.service";
import { useQuery } from "@tanstack/react-query";


export const useOtpEligibility = () => {
    return useQuery({
        queryKey:['otp-eligibility'],
        queryFn: authOtpService.eligibility,
        retry: false
    })
}