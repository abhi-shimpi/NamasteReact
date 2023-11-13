import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>Opps</h1>
            <h2>Somthing went wrong</h2>
            <h3>{err.statusText}</h3>
        </>
    )
}