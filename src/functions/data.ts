interface WPGraphQLParams {
    query: string;
    variables?: object;
}

const fetchURL = `https://${import.meta.env.WORDPRESS_DOMAIN + "/" + import.meta.env.API_SLUG}`;

/*
 * Solicitar datos a la API de WordPress
*/
export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
    const res = await fetch(fetchURL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!res.ok) {
        console.error(res);
        return {};
    }

    const { data } = await res.json();

    return data;
}