import { authService } from "@/src/services/auth.service";
import { LoginFormData, RegisterFormData } from "@/src/types/auth/request.type";
import { useMutation } from "@tanstack/react-query";


export function useLoginMutation() {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async (data: LoginFormData) => {
            await authService.getCsrfCookie();
            
            return authService.login(data)
        }
    })
}

export function useRegisterMutation() {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (data: RegisterFormData) => {
            await authService.getCsrfCookie()
            return authService.register(data)
        }
    })
}