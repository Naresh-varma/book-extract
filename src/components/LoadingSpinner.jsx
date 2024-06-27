import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
         <ThreeDots
            visible={true}
            height="750px"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
        />
    )
}