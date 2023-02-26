import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Ads from '../UI/Ads/Ads';
import Tabs from '../UI/Tabs/tabs';
// import QuizCard from '../QuizCard/QuizCard';

const HomePage = () => {
    // let data = useLoaderData();
    // console.log(data)
    return (
        <>
            <Ads />
            <Tabs />
        </>
    )
}

// export const Loader = async () => {
//     let data = await axios.get("http://localhost:8080/quizes");
//     let quizes = await data.data.response;
//     console.log(quizes)
//     return quizes;
// }
export default HomePage;