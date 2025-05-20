/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { APIAuth } from '../../../api/APIAuth';
import useNavigation from '../../../routers/useNavigation';
import { useStarted } from '../../../zustand/persist/useStarted';
import { useAuth } from '../../../zustand/useAuth';

export const useFCGetStarted = () => {
    const {FetchProfile} = APIAuth();
    const {profile} = useAuth();
    const {replace} = useNavigation();
    const {setRole, setStarting} = useStarted();

    const handleNextHome = () => {
        if (profile.dataProfile.role === 'Pengurus') {
            replace('HomePengurusScreen');
        } else {
            replace('HomeJamaahScreen');
        }
        setRole(profile?.dataProfile?.role);
        setStarting(true);
    };

    useEffect(() => {
        FetchProfile();
    },[]);

    return {profile, handleNextHome};
};
