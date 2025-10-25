import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack';

export enum Method {
	GET = `GET`,
	POST = `POST`,
	PUT = `PUT`,
	DELETE = `DELETE`,
};

export const baseOptions: NitroFetchOptions<any> = {
	headers: {
		'Content-Type': `application/json`,
		'Accept': `application/json`,
	},
	credentials: `include`,
	method: Method.GET,
};

function deepMerge(obj1: any, obj2: any): any {
	const output = { ...obj1 };

	for (const key in obj2) {
		if (Object.prototype.hasOwnProperty.call(obj2, key)) {
			if (typeof obj2[key] === `object` && obj2[key] !== null && obj1[key]) {
				output[key] = deepMerge(obj1[key], obj2[key]);
			}
			else {
				output[key] = obj2[key];
			}
		}
	}
	return output;
}

export const useApiClient = async <T>(
	url: string,
	options?: NitroFetchOptions<NitroFetchRequest>,
) => {
	try {
		const isFormData = options?.body instanceof FormData;

		const mergedOptions = deepMerge(baseOptions, options);

		if (isFormData) {
			delete mergedOptions.headers?.[`Content-Type`];
		}

		return await useFetch<T>(url, mergedOptions);
	}
	catch (e: unknown) {
		console.error(e);
		throw e;
	}
};
