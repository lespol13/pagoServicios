export default class Api {
    static URL = 'http://10.255.11.147:8093/pse/';
    static categories = 'listOfServices/WC/0/0';
    static services = (categoryId) => `listOfServices/WC/${categoryId}/0`;
    static products = (categoryId, serviceId) => `listOfServices/WC/${categoryId}/${serviceId}`;

    static defaultHeaders() {
        return {
            "Content-Type": 'application/json',
            'Authorization': ' eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjMxODg4OTkwMzgsInN1YiI6InN1cGVyIiwiZmluZ2VyIjp7ImlkIjoic3VwZXIiLCJjbGF2ZSI6IiIsInJvbCI6MCwidXNlckRldGFpbCI6eyJ1c2VyIjoic3VwZXIiLCJpc3N1ZVRpbWUiOjMxNTM2MDAsImV4cGlyYXRpb25UaW1lIjoxNTc5MTAwNDQ1LCJleHBpcmF0aW9uVG9rZW5UaW1lIjoxNjA5MDE0OTE5LCJsYXN0VXNhZ2UiOjAsInNlcnZpY2VzQWxsb3ciOiIifX19.sfuxnHYkxmttom_d7LC1UhGfM2h-JrnoXbeQVxe3asVuMYgWkX_AtPBIXgX1Nd2_9LptcOgf7RNEuVlnBzOsPA'
        }
    }
    // -----------------------------------------------------------------------
    static async getCategories() {
        const config = {
            headers: Api.defaultHeaders(),
        };
        const response = await fetch(`${Api.URL}${Api.categories}`, config);
        return await response.json();
    }
    // -----------------------------------------------------------------------
    static async getServices(categoryId) {
        const config = {
            headers: Api.defaultHeaders(),
        };
        const response = await fetch(`${Api.URL}${Api.services(categoryId)}`, config);
        return await response.json()
    }
    // ------------------------------------------------------------------------
    static async getProducts(categoryId, serviceId) {
        const config = {
            headers: Api.defaultHeaders(),
        };
        const response = await fetch(`${Api.URL}${Api.products(categoryId, serviceId)}`, config);
        return await response.json();
    }
    // ------------------------------------------------------------------------
}