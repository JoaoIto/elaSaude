"use client"
import { getStorageItem } from "./getStorageItem";

export const checkUserAuthenticated = () => {
    const userToken = getStorageItem();
    return !!userToken;
}