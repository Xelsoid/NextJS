import {useRouter} from 'next/router';

export default function DetailsPage() {
    const router = useRouter();
    const {params} = router.query; // array

    if(!params) return null;

    return (
        <div>
            {params[0] && <h2>{`Item's type: ${params[0]}`}</h2>}
            {params[1] && <h2>{`Item's manufacturer: ${params[1]}`}</h2>}
            {params[2] && <h2>{`Item's model: ${params[2]}`}</h2>}
        </div>
    )
}