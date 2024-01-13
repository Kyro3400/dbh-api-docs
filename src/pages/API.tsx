import React from "react"
import Layout from "@theme/Layout"
import JSONSchemaViewer from "@theme/JSONSchemaViewer"

export default function ExamplePage(): JSX.Element {
    const [schema, setSchema] = React.useState(undefined as undefined | Error | unknown);

    React.useEffect( () => {
        fetch(
            // TODO Your link here
            "https://bot-api.danbot.host/",
            {
                headers: {
                    'Accept': 'application/json',
                }
            }
        )
            .then((response) => response.json())
            .then((data) => setSchema(data))
            .catch( (err) => setSchema(err) )
    }, [schema])

    return (
        <Layout
            title={`My super JSON Schema`}
            description="Description will go into a meta tag in <head />"
        >
            {schema === undefined && <div>Loading ...</div>}
            {schema !== undefined && schema instanceof Error && <div>Houston we have a problem : {schema.message}</div>}
            {schema !== undefined && !(schema instanceof Error) && <JSONSchemaViewer schema={schema} />}
        </Layout>
    )
}
