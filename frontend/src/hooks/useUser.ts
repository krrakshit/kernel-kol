import { create } from 'zustand';

export const BACKEND_URL = "http://localhost:3000";

export interface User {
    token: string;
    id: string;
    name: string;
}

interface UserState {
    user: User | null;
    refreshUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    refreshUser: async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (response.ok) {
                const data = await response.json();
                set({ user: data });
            } else {
                set({ user: null });
            }
        } catch (e) {
            console.error(e);
            set({ user: null });
        }
    },
}));

export const useUser = () => useUserStore((state) => state.user);
export const useRefreshUser = () => useUserStore((state) => state.refreshUser);