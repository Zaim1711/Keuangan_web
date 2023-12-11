import create from "zustand";
import { persist } from "zustand/middleware";

let keuanganApp = (set) =>({
    dopen: true,
    updateOpen:(dopen)=> set((state) => ({dopen:dopen})),
});

keuanganApp = persist (keuanganApp,{name:"my_money"});
export const useKeuanganApp = create(keuanganApp);