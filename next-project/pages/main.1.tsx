import type {NextPage} from 'next'
import { useRouter } from 'next/router'



const MainId: NextPage = () => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>这里是mai - id <p>Post: {pid}</p></div>
    )
}

export default MainId