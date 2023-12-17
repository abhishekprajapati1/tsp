import { create } from 'zustand';

interface AuthState {
    token: string | null;
    isLoading: boolean;
}

interface AuthActions {
    setToken: (incomingToken: string) => void;
    setIsLoading: (payload: boolean) => void;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
    token: null,
    isLoading: false,
    setToken: (incomingToken: string) => set(() => ({ token: incomingToken })),
    setIsLoading: (payload: boolean) => set(() => ({ isLoading: payload }))
}))

export default useAuthStore;