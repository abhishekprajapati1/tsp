import { create } from 'zustand';

interface AuthState {
    token: string | null;
    isLoading: boolean;
    role: string | null;
}

interface AuthActions {
    setToken: (incomingToken: string | null) => void;
    setRole: (payload: string | null) => void;
    setIsLoading: (payload: boolean) => void;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
    token: null,
    isLoading: false,
    role: null,
    setRole: (payload: string | null) => set(() => ({ role: payload })),
    setToken: (incomingToken: string | null) => set(() => ({ token: incomingToken })),
    setIsLoading: (payload: boolean) => set(() => ({ isLoading: payload }))
}))

export default useAuthStore;