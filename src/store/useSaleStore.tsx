import { create } from 'zustand';

interface SaleState {
    isForm: boolean,
}

interface SaleActions {
    setForm: (payload: boolean) => void;
}

const useSaleStore = create<SaleState & SaleActions>((set) => ({
    isForm: false,
    setForm: (payload: boolean) => set(() => ({ isForm: payload }))
}))

export default useSaleStore;