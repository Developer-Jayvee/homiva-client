import axios from "axios";

type ApiErrorPayload = {
	message?: unknown;
	errors?: unknown;
	error?: unknown;
};

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please try again.";

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getValidationMessages(errors: unknown): string[] {
	if (!isRecord(errors)) return [];

	return Object.values(errors).flatMap((value) => {
		if (typeof value === "string" && value.trim()) return [value];
		if (Array.isArray(value)) {
			return value.filter(
				(message): message is string =>
					typeof message === "string" && Boolean(message.trim()),
			);
		}
		return [];
	});
}

/** Returns a user-safe message for an API/request error. */
export function getApiErrorMessage(
	error: unknown,
	fallbackMessage = DEFAULT_ERROR_MESSAGE,
): string {
	let payload: ApiErrorPayload | undefined;

	if (axios.isAxiosError<ApiErrorPayload>(error)) {
		const response = error.response;
		
		if (!response) {
			return error.code === "ECONNABORTED" || error.code === "ETIMEDOUT"
				? "The request timed out. Please try again."
				: "Unable to connect. Check your internet connection and try again.";
		}

		// Avoid exposing internal server messages or details to the client.
		if (response.status >= 500) return fallbackMessage;
		payload = response.data;

		
		
	} else if (isRecord(error)) {
		payload = error as ApiErrorPayload;
	} else {
		return fallbackMessage;
	}

	return payload?.message as unknown as string;
	const validationMessages = getValidationMessages(payload.errors);
	if (validationMessages.length > 0) return validationMessages.join(" ");

	if (typeof payload.error === "string" && payload.error.trim()) {
		return payload.error;
	}
	if (isRecord(payload.error)) {
		const directValidationMessages = getValidationMessages(payload.error);
		if (directValidationMessages.length > 0) {
			return directValidationMessages.join(" ");
		}
		const nestedValidationMessages = getValidationMessages(payload.error.errors);
		if (nestedValidationMessages.length > 0) {
			return nestedValidationMessages.join(" ");
		}
		if (
			typeof payload.error.message === "string" &&
			payload.error.message.trim()
		) {
			return payload.error.message;
		}
	}

	return typeof payload.message === "string" && payload.message.trim()
		? payload.message
		: fallbackMessage;
}
