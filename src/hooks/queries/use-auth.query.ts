import { authService } from "@/src/services/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useVerifyMe = () => {
    return useQuery({
        queryKey:['user-verification'],
        queryFn: authService.verify_me,
        retry: false
    })
}