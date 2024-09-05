import { useParams } from "react-router-dom";

export function PixTransfer() {
    const { id } = useParams<{ id: string }>();
    console.log(id)

    return <>{ id }</>
}