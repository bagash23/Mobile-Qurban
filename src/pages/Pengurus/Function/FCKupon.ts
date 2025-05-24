import useNavigation from '../../../routers/useNavigation';

export const useFCKupon = () => {
    const {back} = useNavigation();
    return {back};
};
