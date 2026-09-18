export enum Method {
	GET = `GET`,
	POST = `POST`,
	PUT = `PUT`,
	PATCH = `PATCH`,
	DELETE = `DELETE`,
}

type ApiOptions<T> = NonNullable<Parameters<typeof useFetch<T>>[1]>;

const logResponseError: ApiOptions<unknown>[`onResponseError`] = ({ request, response, options }) => {
	console.error(`[api] ${options.method ?? Method.GET} ${request} → ${response.status}`);
};

export const useApiClient = <T>(url: string, options: ApiOptions<T> = {}) =>
	useFetch<T>(url, {
		baseURL: useEnv().apiBaseUrl,
		credentials: `include`,
		onResponseError: logResponseError,
		...options,
		headers: { Accept: `application/json`, ...options.headers },
	});
