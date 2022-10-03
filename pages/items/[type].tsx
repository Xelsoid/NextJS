import {useRouter} from 'next/router';

export default function ItemsTypePage() {
    const router = useRouter();
    const {type} = router.query;

    return (
        <div>Item's Type: {type}</div>
    )
}