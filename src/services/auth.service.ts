import { api, web } from "../lib/api/client";
import { LoginFormData, OtpFormDAta, RegisterFormData } from "../types/auth/request.type";


export const authService = {
    getCsrfCookie: async () => {
        const response = await web.get('sanctum/csrf-cookie')

        return response?.data;
    },

    login: async (data: LoginFormData): Promise<ResponseFormData> => {
        const response = await api.post('v1/auth/login', data);
        return response?.data;
    },

    register: async (data: RegisterFormData): Promise<ResponseFormData> => {
        const response = await api.post('v1/auth/register',data);
        return response?.data;
    },

    logout: async () => {
        const response = await api.post('v1/auth/logout');
        return response?.data;
    },

    verify_me: async () => {
        const response = await api.get('v1/me');
        return response?.data
    }
}

export const authOtpService = {
    eligibility: async (): Promise<ResponseFormData> => {
        const response = await api.get('v1/auth/otp/eligibility');
        return response?.data
    },
    send : async (data: OtpFormDAta): Promise<ResponseFormData> => {
        const response = await api.post('v1/auth/otp/send',data);
        return response?.data;
    }
}

