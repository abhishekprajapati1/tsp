import React from 'react'
import ManagerTabs from './ManagerTabs';
import useAuthStore from '../store/useAuthStore';
import AdminTabs from './AdminTabs';
import StaffTabs from './StaffTabs';


const MainNavigator = () => {
    const role: string | null = useAuthStore(state => state.role);

    if (role === "admin") {
        return (
            <AdminTabs />
        )
    }

    if (role === "manager") {
        return (
            <ManagerTabs />
        )
    }

    return (
        <StaffTabs />
    )
}

export default MainNavigator;